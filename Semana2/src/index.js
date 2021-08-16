import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
    return(
        <div className="container border rounded mt-2">
            <div className="row justify-content-center border-bottom m-2">
                <h1 className="display-5 text-center">Seus Pedidos</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                    <div className="card">
                        <div className="card-header text-muted">22/04/2021</div>
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-hdd fa-2x"></i>
                            </div>
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">SSD</h4>
                                <p className="text-center">SSD Kingston A400 - Sata</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                    <div className="card">
                        <div className="card-header text-muted">20/04/2021</div>
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-book fa-2x"></i>
                            </div>
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Livro</h4>
                                <p className="text-center">Concrete Mathematics - Donald Knuth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                    <div className="card">
                        <div className="card-header text-muted">21/04/2021</div>
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-laptop fa-2x"></i>
                            </div>
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Notebook</h4>
                                <p className="text-center">Notebook Dell - 8Gb - i5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)