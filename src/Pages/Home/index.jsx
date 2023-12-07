// Importa os componentes necessários do diretório '../../components'
import { Navbar, Header, Card, CardEnterprise, SectionFloat, LastSession, Footer } from '../../components'

// Importa as imagens necessárias do diretório '../../assets/img'
import cardCell from '../../assets/img/card-cell.png'
import cardComponent from '../../assets/img/cell-component.png'
import zelleTag from '../../assets/img/zelle-tag.png'
import cardTag from '../../assets/img/card-tag.png'
import zelleInvest from '../../assets/img/zelleInvest.png'

// Importa o arquivo de estilos './style.css'
import './style.css'

// Importa a biblioteca React
import React from 'react'

// Declaração do componente funcional Home
export default function Home() {
    return (
        <>
            {/* Renderiza o componente Navbar */}
            <Navbar />

            {/* Renderiza o componente Header */}
            <Header />

            {/* Início da seção principal */}
            <main className='home-main'>
                {/* Cria um espaço entre os componentes */}
                <div className="gap">
                    {/* Renderiza o componente Card com props específicas */}
                    <Card props={{
                        title: 'Faça transferências, solicite empréstimos, deposite seu dinheiro e +',
                        subOne: 'Você pode baixar o aplicativo disponível nas lojas',
                        subTwo: 'para usá-lo como quiser',
                        imgOne: cardCell,
                        imgTwo: cardComponent
                    }} />

                    {/* Renderiza outro componente Card com props específicas */}
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

                {/* Renderiza a seção de cards com informações sobre diferentes tipos de contas */}
                <section className='section-cards'>
                    <h1 className="home-title">Um banco completo para você e sua empresa</h1>

                    {/* Renderiza três componentes CardEnterprise com props específicas */}
                    <div className="cards-entpr-container">
                        <CardEnterprise props={{ first: true, title: "Para você", text: "Conta completa, com cartão e investimentos no Brasil e no exterior" }} />
                        <CardEnterprise props={{ second: true, title: "Para empresas", text: "Conta ágil e descomplicada, com cartão, maquininha e Pix grátis" }} />
                        <CardEnterprise props={{ third: true, title: "Para MEI", text: "Conta completa com Pix grátis e soluções para o seu negócio." }} />
                    </div>

                    {/* Renderiza um botão para abrir uma conta */}
                    <div className="home-btn-account">
                        <p>Abrir minha conta</p>
                    </div>
                </section>

                {/* Renderiza a seção float-cards com informações sobre investimentos */}
                <section className="float-cards">
                    <div className="float-header">
                        <img src={zelleInvest} alt="" />
                        <h1>Invista no Brasil e lá fora <br /> pelo mesmo app da sua conta</h1>
                    </div>

                    {/* Renderiza o componente SectionFloat */}
                    <SectionFloat />
                </section>

                {/* Renderiza a seção last-session com informações sobre baixar o aplicativo */}
                <section className="last-session">
                    <div className="last-session-header">
                        <h1>Gostou? Baixe o <br /> nosso APP! </h1>
                    </div>

                    {/* Renderiza o componente LastSession */}
                    <LastSession />
                </section>

                {/* Renderiza o componente Footer */}
                <Footer />
            </main>
        </>
    )
}
