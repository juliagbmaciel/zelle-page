import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAccount, getTransactions } from '../../services/api/api'
import { useSelector } from 'react-redux'
import './style.css'
import { BiTrendingUp } from 'react-icons/bi'
import zelle from '../../assets/img/nav-logo.png'
import TransferComponent from '../../Components/TransferComponent'
import { useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

function LoggedHome() {

    const [loading, setLoading] = useState(BiTrendingUp)
    const [data, setData] = useState({})
    const [balance, setBalance] = useState('')
    const [transfers, setTransfers] = useState([])
    const navigation = useNavigate()

    const fetchData = async () => {
        try {
            const accountData = await getAccount(localStorage.getItem('token'))


            setTimeout(() => {
                setLoading(false);
                setData(accountData);
            }, 1500);
            const balance = accountData.account.balance
            const balanceFormatted = balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            setBalance(balanceFormatted)
        } catch (err) {
            console.error(err)
        }
    }
    const fetchTransfers = async () => {
        try {
            const transfers = await getTransactions(localStorage.getItem('token'), 'all')
            setTransfers(transfers)
        
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
        fetchTransfers()
    }, [])


    const logoutFunc = () => {
        console.log('clear')
        localStorage.clear()
        navigation('/')
    }

    return (
        loading ?
            (<div className='logged-container'>
                <RotatingLines
                    strokeColor="#D3FE57"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="50"
                    visible={true}
                />
            </div>)
            :
            (<div className='logged-container'>
                <div className="logged-menu">
                    <div className='top-header-menu'>
                        {data.client.client.picture && (
                            <img className='picture' src={`http://10.109.71.5:8000/${data.client.client.picture}`} alt="" />
                        )}

                        <img src={zelle} alt="" />
                        <div className='account-infos'>
                            <p>Agência {data.account.agency}</p>
                            <p>Conta {data.account.number}</p>
                            <p>Zelle Pagamentos LTDA</p>
                        </div>
                    </div>

                    <button className='logout-btn' onClick={logoutFunc}>Logout</button>
                </div>
                <div className="logged-main">

                    <div className="container-infos">
                        <h1 className='logged-title'>Olá, {data.client.client.name}</h1>
                        <h1 className='logged-title'>Saldo atual</h1>
                        <div className="balance-div">

                            <p>{balance}</p>
                        </div>

                        <div className="transfer-div">
                            <h1 className='logged-title'>Últimas transferências</h1>
                            <div className="transfers-section">
                                {transfers.map((item, index) => (
                                    <TransferComponent key={index} props={{ item: item, data: data }} />
                                ))}
                            </div>
                            

                        </div>
                    </div>

                </div>
            </div>)
    )
}

export default LoggedHome