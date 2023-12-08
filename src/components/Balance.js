import {useSelector} from "react-redux";
import Bank from "./Bank";
import {getBank, getRandomIndex} from "../utils/constants";
import {useCallback} from "react";

const Balance = () => {

    const balance = useSelector(state => state.account.balance);
    const quote = useSelector(state => state.quote.text);

    //const info = names[getRandomIndex()];
    //const info = {name : 'Leumi'};

    const index = getRandomIndex();
    // const info = useMemo(()=> ({name: names[index]}), [index]);
    //const info = index => getBank(index);

    const info = useCallback(index => getBank(index), [index]);

    return (
        <div>
            <Bank info={info} index={index}/>
            <h4 className={'text-center text-uppercase'}><q>{quote}</q></h4>
            <h3 className={'text-center text-uppercase'}>Balance = {balance}</h3>
        </div>
    )
}

export default Balance;