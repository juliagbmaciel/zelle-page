import React from 'react'
import headerImg from '../../assets/img/header-img.png'
import './style.css'

function Header() {
  return (
    <div className='header-container'>
      <div className="header-text">
        <p className="header-t title">
          Pense <span>inteligente</span>,<br/>
          crie a sua independência <br/> <span>financeira</span> conosco
        </p>
        <p className="header-s subtitle">
          Cresça, conquiste os seus objetivos.<br/>
          Evolua financeiramente
        </p>
      </div>
      <div className="header-img">
        <img src={headerImg} alt="" />
      </div>

    </div>
  )
}

export default Header