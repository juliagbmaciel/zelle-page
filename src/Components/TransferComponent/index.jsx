import React, { useEffect, useState } from 'react'
import './style.css'
import { TbArrowsTransferUp, TbArrowsTransferDown } from "react-icons/tb";




export default function TransferComponent({ props }) {


    console.log('dataaaa', props.item.value)
    const value = parseFloat(props.item.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return (

        <div className='transfer-container'>

            {props.data.account.id === props.item.account_receiver ? (
                <div className='transfer-block'>
                    <TbArrowsTransferUp color='#D3FE57' />
                    <div className='transfer-component'>
                        <h1 className='h1-title'>Transferência recebida</h1>
                        <p>De {props.item.client_sender}</p>
                        <p>{value}</p>
                    </div>

                </div>

            ) : (
                <div className='transfer-block'>
                    <TbArrowsTransferDown color='#D3FE57' />
                    <div className='transfer-component'>
                        <h1 className='h1-title'>Transferência enviada</h1>
                        <p>Para {props.item.client_receiver}</p>
                        <p>{value}</p>

                    </div>


                </div>

            )}

        </div>


    )
}

