import { Navbar, Header, Card, CardEnterprise, SectionFloat } from '../../Components'
import cardCell from '../../assets/img/card-cell.png'
import cardComponent from '../../assets/img/cell-component.png'
import zelleTag from '../../assets/img/zelle-tag.png'
import cardTag from '../../assets/img/card-tag.png'
import zelleInvest from '../../assets/img/zelleInvest.png'
import './style.css'
import React from 'react'

export default function Home() {
    return (

        <>
            <Navbar />
            <Header />
            <main className='home-main'>
                <div className="gap">
                    <Card props={{
                        title: 'Faça transferências, solicite empréstimos, deposite seu dinheiro e +',
                        subOne: 'Você pode baixar o aplicativo disponível nas lojas',
                        subTwo: 'para usá-lo como quiser',
                        imgOne: cardCell,
                        imgTwo: cardComponent
                    }} />
                    <Card props={{
                        title: 'Faça transferências, solicite empréstimos, deposite seu dinheiro e +',
                        subOne: 'Você pode baixar o aplicativo disponível nas lojas',
                        subTwo: 'para usá-lo como quiser',
                        imgOne: cardTag,
                        imgTwo: zelleTag,
                        color: 'green',
                        fixPosition: true
                    }} />
                </div>
                <section className='section-cards' >
                    <h1 className="home-title">Um banco completo para você e sua
                        empresa</h1>
                    <div className="cards-entpr-container">
                        <CardEnterprise props={{ first: true, title: "Para você", text: "Conta completa, com cartão e investimentos no Brasil e no exterior" }} />
                        <CardEnterprise props={{ second: true, title: "Para empresas", text: "Conta ágil e descomplicada, com cartão, maquininha e Pix grátis" }} />
                        <CardEnterprise props={{ third: true, title: "Para MEI", text: "Conta completa com Pix grátis e soluções para o seu negócio." }} />
                    </div>
                    <div className="home-btn-account">
                        <p>Abrir minha conta</p>
                    </div>
                </section>
                <section className="float-cards">
                    <div className="float-header">
                        <img src={zelleInvest} alt="" />
                        <h1>Invista no Brasil e lá fora <br /> pelo mesmo app da sua conta</h1>
                    </div>
                    <SectionFloat/>

                </section>


            </main>


        </>

    )
}
