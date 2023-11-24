import React, {useState} from 'react';
import {depositAction, withdrawAction} from "../redux/actions/accountActions";
import {useDispatch} from "react-redux";
import {getQuoteAction} from "../redux/actions/quoteAction";

const Operation = () =>
{
    const [sum, setSum] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className={'container'}>
            <div className={'d-flex justify-content-center'}>
                <button onClick={() => dispatch(withdrawAction(sum))}
                        className={'btn btn-primary btn-lg'}>Withdraw</button>
                <input type='number' min={0} onChange={e => setSum(+e.target.value)}
                       value={sum} className={'form-control-lg text-center'}/>
                <button onClick={() => dispatch(depositAction(sum))}
                        className={'btn btn-primary btn-lg'}>Deposit</button>
            </div>
            <div className={'d-flex justify-content-center'}>
                <button className={'btn btn-primary btn-lg'} onClick={() => dispatch(getQuoteAction())}>Get quote</button>
            </div>
        </div>
    );
};

export default Operation;