import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import * as Icon from 'react-bootstrap-icons'

export default class App extends React.Component {
    render() {
        return (
            <Container className="mt-2">
                    <div md={8} className="card row">
                        <div className="d-flex ">
                            <div className="col-xs-6">
                                <p>UPVOTE</p>
                                <p>DOWNVOTE</p>
                            </div>
                            <div className="col-xs-6">
                                <div as="h5" className="text-center card-header">
                                    Post do Dia
                                </div>
                                <div className="d-flex flex-column justify-content-center
                                    align-items-center card-body"
                                    style={{height: '8rem'}}>
                                    <div className="Votacao ">
                                    </div>
                                    AQUI TA A IMAGEM DO POST
                                </div>
                                <ButtonGroup className="d-flex container-fluid card-footer" size="sm">
                                    <Button variant="dark" className="mt-2 " onClick={this.upVote}>
                                        <Icon.ArrowUpCircleFill/>
                                    </Button>
                                    <Button variant="blue" className="w-15 mt-2 ml-88" onClick={this.downVote}>
                                        <Icon.ArrowDownCircleFill/>
                                    </Button>
                                    <Button variant="outline-success" className="w-15 mt-2" onClick={this.upVote}>
                                        <Icon.ArrowUpCircleFill class="color: aqua-blue size-medium"/>   
                                    </Button>
                                    <Button variant="outline-success" className="w-15 mt-2" onClick={this.upVote}
                                    style={{class:"fas fa-chevron-up"}}>
                                        <i class="BsFillAwardFill"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
            </Container>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)