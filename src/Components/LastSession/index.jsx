import React from 'react'
import mockup from '../../assets/img/mockup-cell.png'
import './style.css'

export default function LastSession() {
    return (
        <div className='last-session-container'>
            <div className="last-session-mockup">
                <img src={mockup} alt="" />
            </div>
            <div className="last-session-texts">
                <div className="last-session-row">
                    <div>
                        <h2>Para pessoas físicas</h2>
                        <p>Tenha acesso às suas finanças na palma da sua mão</p>
                    </div>
                </div>
                <div className="last-session-row">
                    <div>
                        <h2>Para pessoas jurídicas</h2>
                        <p>Acompanhe as transações financeiras do seu negócio quando, com quem, e onde quiser</p>
                    </div>

                    <button className='last-session-btn'>Download app</button>
                </div>
            </div>

        </div>
    )
}
