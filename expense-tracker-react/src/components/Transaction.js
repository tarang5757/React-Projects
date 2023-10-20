import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';



export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);
    //getting the sign of the transaction amount, either negative or positive
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        //if amount is less than 0, display negative sign or else positive sign

        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>x</button>
        </li>
    )
}