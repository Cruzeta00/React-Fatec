import React from 'react'

export const Feedback = (props) => {
    return (
        <div className="d-flex justify-content-evenly m-2">
            <button 
                type="button"
                OnClick={props.funcaoOK}
                className="btn btn-outline-primary">
                    {props.textoOK}
            </button>
            <button 
                type="button"
                OnClick={props.funcaoNOK}
                className="btn btn-outline-primary">
                    {props.textoNOK}
            </button>
        </div>
    )
}