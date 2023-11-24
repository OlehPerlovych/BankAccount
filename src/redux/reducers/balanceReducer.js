import {DEPOSIT, WITHDRAW} from "../actions/accountActions";

function balanceReducer(balance, action)
{
    switch (action.type)
    {
        case DEPOSIT:
            return balance + action.payload;
        case WITHDRAW:
            const res = balance - action.payload;
            return res<0 ? balance : res;
        default:
            return balance;
    }
}

export default balanceReducer;