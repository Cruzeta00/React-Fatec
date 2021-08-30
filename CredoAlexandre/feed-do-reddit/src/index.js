import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import * as Icon from 'react-bootstrap-icons'

export default class App extends React.Component {
    render() {
        return (
            <Container className="mt-2">
                <Row className="justify-content-left">
                    <Col md={8}>
                        <Card >
                            <Card.Header as="h5" className="text-center">
                                Post do Dia
                            </Card.Header>
                            <Card.Body
                                className="d-flex flex-column justify-content-center
                                align-items-center"
                                style={{height: '8rem'}}>
                                <div className="Votacao ">
                                </div>
                                AQUI TA A IMAGEM DO POST
                            </Card.Body>
                            <Card.Footer className="d-flex flex-row justify-content-center
                                align-items-center"
                                >
                                <Button className="mt-2 " onClick={this.upVote}>
                                    <Icon.ArrowUpCircleFill class=""/>
                                </Button>
                                <Button variant="outline-success" className="w-15 mt-2" onClick={this.downVote}>
                                    <Icon.ArrowUpCircleFill class="aqua-blue size-medium "/>
                                </Button>
                                <Button variant="outline-success" className="w-15 mt-2" onClick={this.upVote}>
                                    <Icon.ArrowUpCircleFill class="color: aqua-blue size-medium"/>   
                                </Button>
                                <Button variant="outline-success" className="w-15 mt-2" onClick={this.upVote}
                                style={{class:"fas fa-chevron-up"}}>
                                    <Icon.ArrowUpCircleFill class="color: aqua-blue size-medium"/>
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)