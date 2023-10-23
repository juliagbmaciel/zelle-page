import React from 'react'
import navLogo from '../../assets/img/nav-logo.png'
import './style.css'

function Navbar() {
  return (
    <div className='nav-container'>
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
  )
}

export default Navbar