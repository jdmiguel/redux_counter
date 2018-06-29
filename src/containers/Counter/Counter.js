import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';
import './Counter.css';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        const {ctr,storedResults,onIncrementCounter,onDecrementCounter,onAddCounter,onSubstractCounter,onDeleteResult,onStoreResult} = this.props;
        return (
            <div>
                <CounterOutput value={ctr} />
                <div className='controlContainer'>
                    <CounterControl label="Increment" clicked={onIncrementCounter} />
                    <CounterControl label="Decrement" clicked={onDecrementCounter}  />
                    <CounterControl label="Add 5" clicked={onAddCounter}  />
                    <CounterControl label="Subtract 5" clicked={onSubstractCounter} />
                </div>
                <button onClick={ () => onStoreResult(ctr) }> Store result </button>
                <ul>
                    {
                        storedResults.map(strResult => (
                            <li onClick={ () => onDeleteResult(strResult.id) } key={strResult.id}> {strResult.value} </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value:5}),
        onSubstractCounter: () => dispatch({type: actionTypes.SUBSTRACT,value:5}),
        onStoreResult: result => dispatch({type: actionTypes.STORE_RESULT,result:result}),
        onDeleteResult: id => dispatch({type: actionTypes.DELETE_RESULT,resultId:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);