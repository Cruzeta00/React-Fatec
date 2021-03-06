import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {
    const textoOK = "Chegou"
    const textoNOK = "Não chegou"
    const funcaoOK = () => alert ("Obrigado pelo Feedback")
    const funcaoNOK = () => alert ("Verificaremos o que houve")
    const feedbackComponent = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
    return(
        <div className="container border rounded mt-2">
            <div className="row justify-content-center border-bottom m-2">
                <h1 className="display-5 text-center">Seus Pedidos</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao cabecalho="22/04/2021">
                        <Pedido
                            icone="fas fa-hdd fa-2x"
                            titulo="SSD"
                            descricao="SSD Kingston"
                        />
                        <Feedback
                            textoOK={TextoOK}
                            textoNOK={textoNOK}
                            funcaoOK={funcaoOK}
                            funcaoNOK={funcaoNOK}
                        />
                    </Cartao>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao cabecalho="22/04/2021">
                        <Pedido
                            icone="fas fa-book fa-2x"
                            titulo="Livro"
                            descricao="Nome do Vento"
                        />
                        <Feedback
                            textoOK={TextoOK}
                            textoNOK={textoNOK}
                            funcaoOK={funcaoOK}
                            funcaoNOK={funcaoNOK}
                        />
                    </Cartao>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao cabecalho="20/04/2021">
                        <Pedido
                            icone="fas fa-laptop fa-2x"
                            titulo="Notebook Dell"
                            descricao="8GB de RAM, 500GB SSD, Ryzen 5"
                        />
                        <Feedback
                            textoOK={TextoOK}
                            textoNOK={textoNOK}
                            funcaoOK={funcaoOK}
                            funcaoNOK={funcaoNOK}
                        />
                    </Cartao>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)