import React, { useEffect, useState } from 'react'
import navLogo from '../../assets/img/nav-logo.png'
import './style.css'

function Navbar() {

    const [scrollY, setScrollY] = useState(0)
    const [close, setClose] = useState(false)

    useEffect(() =>{
        const teste = () => {
            if (window.scrollY > 130){
                setScrollY(window.scrollY)
            }else{
                setScrollY(0)
            }
            console.log(window.scrollY)
        }

        window.addEventListener('scroll', teste);
    },[scrollY]) 


    return (
        <div className="nav-max-container">
        <div className={`nav-container ${scrollY > 130 ? 'border' : ''}`}>
            <div className="nav-logo">
                <img src={navLogo} alt="" />
            </div>
            <div className="nav-infos">
                <ul className='nav-infos-ul'>
                    <li className='nav-infos-ul-li'>Sobre nós</li>
                    <li className='nav-infos-ul-li'>Serviços</li>
                    <li className='nav-infos-ul-li'>Contato</li>
                </ul>
            </div>
            <div className="nav-account">
                <p>Criar conta</p>
                <div className="nav-btn-login">
                    <p>Login</p>
                </div>
            </div>
        </div>
        <div className="responsive-menu">
            <img src={navLogo} alt="" />
            <div className='nav-infos-responsive'>
            <div className="nav-btn-login">
                    <p>Login</p>
                </div>
            <div className={`btn-menu ${close ? 'active': ''}`} onClick={() => setClose(!close)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            </div>

        </div>
        </div>

    )
}

export default Navbar