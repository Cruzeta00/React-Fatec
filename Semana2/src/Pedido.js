import React from 'react';
//vou só definir isso para aplicar na index. é pra guardar um proc?

//pegando a definiçãodo que é pedido e colocando aqui
const Pedido = (props) => {
    return(
        <div className="d-flex">
            <div className="d-flex align-items-center">
                <i className={props.icone}></i>
            </div>

            <div className="w-100 ms-2 border rounded">
                <h4 className="text-center">{props.titulo}</h4>
                <p className="text-center">{props.descricao}</p>
            </div>

        </div>
    )
}

export default Pedido