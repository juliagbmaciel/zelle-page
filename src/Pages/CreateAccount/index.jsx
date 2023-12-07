// Importa o estilo CSS associado a este componente
import "./style.css";

// Importa o componente Particle do diretório "../../components"
import { Particle } from "../../components";

// Importa a imagem do logo do diretório "../../assets/img"
import logo from '../../assets/img/big-logo.png'

// Importa o hook useState do React para gerenciar estados no componente funcional
import { useState } from "react";

// Importa funções da API relacionadas a autenticação
import { getToken } from "../../services/api/api";

// Importa ações relacionadas ao Redux para gerenciar o estado global
import { setSigned, setToken } from "../../services/reducers/actions";

// Importa o hook useDispatch do React-Redux para despachar ações para a store
import { useDispatch } from "react-redux";

// Importa o hook useNavigate do React-Router-Dom para navegar entre páginas
import { useNavigate } from "react-router-dom";

// Importa a biblioteca SweetAlert2 para exibir alertas personalizados
import Swal from 'sweetalert2'

// Declaração do componente funcional CreateAccount
export default function CreateAccount() {
    // Define estados iniciais para controle de abas, CPF e senha
    const [abaClicked, setAbaClicked] = useState('Login')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    // Obtém a função de navegação da rota
    const navigate = useNavigate();

    // Obtém a função dispatch para despachar ações Redux
    const dispatch = useDispatch()

    // Função de login assíncrona
    const login = async () => {
        try {
            // Verifica se os campos de CPF e senha não estão vazios
            if (cpf.length === 0 || password.length === 0) {
                // Exibe um alerta se os campos estiverem vazios
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Campos não podem ser vazios",
                });
                return;
            }

            // Obtém o token de autenticação da API
            const response = await getToken(cpf, password)

            // Despacha a ação para atualizar o token no estado global
            dispatch(setToken(response.auth_token))

            // Despacha a ação para marcar o usuário como autenticado
            dispatch(setSigned(true))

            // Navega para a página home após o login bem-sucedido
            navigate('/home');
        } catch (error) {
            // Captura e lida com erros durante o processo de login

            // Obtém a mensagem de erro da resposta da API
            const errorNew = error.response.data.non_field_errors[0]

            // Exibe um alerta de erro com a mensagem adequada
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorNew,
            });
        }
    }

    // Renderiza o componente
    return (
        <>
            {/* Renderiza o componente Particle para efeitos visuais */}
            <Particle />

            {/* Renderiza o formulário de login/criação de conta */}
            <div className="form-container">
                <div className="form-box">
                    <img src={logo} alt="" />
                    <div className="form-content">
                        <div className="form-content-aba">
                            {/* Abas para alternar entre login e criação de conta */}
                            <div className={`aba-column ${abaClicked === 'Login' && 'clicked'}`} onClick={() => setAbaClicked('Login')}>
                                <p>Fazer Login</p>
                            </div>
                            <div className={`aba-column ${abaClicked === 'Account' && 'clicked'}`} onClick={() => setAbaClicked('Account')}>
                                <p>Abrir Conta</p>
                            </div>
                        </div>
                        <div className="form-content-inputs">
                            {/* Campos de entrada para CPF/CNPJ e senha */}
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
                        {/* Botão de confirmação para realizar o login */}
                        <button className="btn-confirm" onClick={login}>
                            <p>Confirmar</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
