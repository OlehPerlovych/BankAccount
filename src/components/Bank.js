import React from 'react';

const Bank = ({info, index}) => {
    console.log(`Render bank ${info(index).name}`)
    return <h1 className={'text-center text-uppercase'}>Bank {info(index).name} </h1>
};

export default React.memo(Bank);