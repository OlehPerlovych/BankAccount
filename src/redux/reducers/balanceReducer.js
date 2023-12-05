import {depositAction, withdrawAction} from "../actions/accountActions";

const initialBalance = 10000;

function balanceReducer(balance = initialBalance, action)
{
    switch (action.type)
    {
        case depositAction.type:
            return balance + action.payload;
        case withdrawAction.type:
            const res = balance - action.payload;
            return res<0 ? balance : res;
        default:
            return balance;
    }
}

export default balanceReducer;