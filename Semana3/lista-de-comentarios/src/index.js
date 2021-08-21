import ReactDOM from 'react-dom'
import React from 'react'
import faker from 'faker'
import 'bootstrap/dist/css/bootstrap.min.css'
import Comentario from './Comentario'
import Cartao from './Cartao'
import Feedback from './Feedback'
import ListaComentarios from './ListaComentarios'

export const App = () => {
    const textoOK = "Aprovar"
    const textoNOK = "Recusar"
    const funcaoOK = () => alert("Ok, aprovado")
    const funcaoNOK = () => alert("Ok, não aprovado")
    const feedbackComponent = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
    return(
        <ListaComentarios>
            <div className="row">
                <div className="col-md-6">
                    <Cartao>
                        <Comentario
                            foto={faker.image.avatar()}
                            nome={faker.name.findName()}
                            texto={faker.lorem.words(10)}
                            data={faker.date.soon().toLocaleDateString()}
                        />
                        {feedbackComponent}
                    </Cartao>
                </div>
                <div className="col-md-6">
                    <Cartao>
                        <Comentario
                            foto={faker.image.avatar()}
                            nome={faker.name.findName()}
                            texto={faker.lorem.words(10)}
                            data={faker.date.soon().toLocaleDateString()}
                        />
                        {feedbackComponent}
                    </Cartao>
                </div>
                <div className="col-md-6">
                    <Cartao>
                        <Comentario
                            foto={faker.image.avatar()}
                            nome={faker.name.findName()}
                            texto={faker.lorem.words(10)}
                            data={faker.date.soon().toLocaleDateString()}
                        />
                        {feedbackComponent}
                    </Cartao>
                </div>
            </div>
        </ListaComentarios>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)