import React from 'react'
import zelle from '../../assets/img/zelle.png'
import { AiFillApple } from  'react-icons/ai'
import { BiLogoPlayStore } from   'react-icons/bi'
import './style.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className="footer-column">
                    <h1>DÚVIDAS</h1>
                    <ul>
                        <li>Canal de transparência</li>
                        <li>Documentos</li>
                        <li>LGPD</li>
                        <li>ZelleBankSeg LGPD</li>
                    </ul>
                </div>
                <div className="footer-column">
                <h1>Fale conosco</h1>
                    <ul>
                        <li>SAC</li>
                        <li>Atendimento 24hs</li>
                        <li>Relacionamento</li>
                        <li>Ouvidoria</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div>
                    <img src={zelle} alt="" />
                    <ul>
                        <li>Canal de transparência</li>
                        <li>Documentos</li>
                        <li>LGPD</li>
                        <li>ZelleBankSeg LGPD</li>
                    </ul>
                    </div>

                </div>
                <div className="footer-column">
                    <div className="btn-footer">
                        <BiLogoPlayStore color='#fff' size={30}/>
                        <p>Disponível no<br/> <span>Google Play</span></p>
                    </div>
                    <div className="btn-footer">
                        <AiFillApple color='#fff' size={30}/>
                        <p>Disponível na<br/> <span>App Store</span></p>
                    </div>
                </div>
            </div>
            <div className='last-footer'>
            <img src={zelle} alt="" />
            <p>2023 BANCO ZelleBank S.A CNPJ: 10.686.423/0001-60<br/>
            Rua Amoreiras, 275 - PQ dos Pinheiros, Hortolândia, São Paulo - 13184-600</p>
            </div>

        </footer>

    )
}
