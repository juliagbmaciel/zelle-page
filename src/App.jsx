import { Navbar, Header, Card } from './Components'
import cardCell from '../src/assets/img/card-cell.png'
import cardComponent from '../src/assets/img/cell-component.png'
import zelleTag from '../src/assets/img/zelle-tag.png'
import cardTag from '../src/assets/img/card-tag.png'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Header />
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
    </>
  )
}

export default App
