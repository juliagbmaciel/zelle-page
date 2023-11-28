import "./style.css";
import { Particle } from "../../components";
import logo from '../../assets/img/big-logo.png'
import { useState } from "react";
import { getToken } from "../../services/api/api";
import { setSigned, setToken } from "../../services/reducers/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



export default function CreateAccount() {
    const [abaClicked, setAbaClicked] = useState('Login')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const login = async () => {
        try {

            if (cpf.length == 0 || password.length == 0) {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Campos não podem ser vazios",
                });
                return
            }
            const response = await getToken(cpf, password)
            dispatch(setToken(response.auth_token))
            dispatch(setSigned(true))
            navigate('/home');
        } catch (error) {

            const errorNew = error.response.data.non_field_errors[0]
            console.log('errpo', errorNew)

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorNew,
            });
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
                                    <input type="text" id="cpf" placeholder="Digite o seu CPF ou CNPJ" onChange={(e) => setCpf(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-input">
                                <p>Senha</p>
                                <div className="custom-input">
                                    <input type="password" id="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)} />
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