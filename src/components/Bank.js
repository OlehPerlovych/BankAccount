import React from 'react';

const Bank = ({info}) => {
    console.log(`Render bank ${info}`)
    return <h1 className={'text-center text-uppercase'}>Bank {info} </h1>
};

export default React.memo(Bank);