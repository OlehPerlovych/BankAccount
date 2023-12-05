import {createAction} from "@reduxjs/toolkit";

export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';

export const depositAction = createAction(DEPOSIT);

export const withdrawAction = createAction(WITHDRAW);