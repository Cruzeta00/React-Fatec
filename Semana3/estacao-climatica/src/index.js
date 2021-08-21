import ReactDOM from 'react-dom'
import React from 'react'

const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        (position) => {console.log(position)}
    );
    return(
        <div>
            Meu App
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)