import "./style.css";
import { Particle } from "../../components";
import logo from '../../assets/img/big-logo.png'
import { useState } from "react";
import { getToken } from "../../services/api/api";


export default function CreateAccount() {
    const [abaClicked, setAbaClicked] = useState('Login')
    const [cpf, setCpf] = useState('')
    const [password, setPassword ] = useState('')

    const login = async () => {
        try{
            const response = await getToken(cpf, password)
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }



    return (
        <>
            <Particle />
            <div className="form-container">
                <div className="form-box">
                    <img src={logo} alt="" />
                    <div className="form-content">
                        <div className="form-content-aba">
                            <div className={`aba-column ${abaClicked === 'Login' && 'clicked'}`} onClick={() => setAbaClicked('Login')}>
                                <p>Fazer Login</p>
                            </div>
                            <div className={`aba-column ${abaClicked === 'Account' && 'clicked'}`} onClick={() => setAbaClicked('Account')}>
                                <p>Abrir Conta</p>
                            </div>
                        </div>
                        <div className="form-content-inputs">
                            <div className="form-input">
                                <p>CPF/CNPJ</p>
                                <div className="custom-input">
                                    <input type="text" id="cpf" placeholder="Digite o seu CPF ou CNPJ" onChange={(e) => setCpf(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-input">
                                <p>Senha</p>
                                <div className="custom-input">
                                    <input type="password" id="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <button className="btn-confirm" onClick={login}>
                            <p>Confirmar</p>
                        </button>
                    </div>

                </div>


            </div>

        </>

    );
}