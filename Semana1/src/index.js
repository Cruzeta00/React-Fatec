import React from 'react'
import ReactDOM from 'react-dom'
import './estilo.css'
import imagens from './images/pexels-karolina-grabowska-8538937.jpg'

/*function CarregarImagens() {
    const { src } = useImage({
        srcList: 'https://www.pexels.com/pt-br/foto/verificacao-inspecao-checagem-quimica-8538941/',
        srcList: 'https://www.pexels.com/pt-br/foto/quimico-quimica-dentro-de-casa-interior-8538937/',
        srcList: 'https://www.pexels.com/pt-br/foto/homem-com-camisa-de-botoes-azul-deitado-na-cama-6303573/'
    })
    return <img src={src} />
}*/

const ProfSaude = () => {
    const medico1 = 'José da Silva';
    const medico2 = 'Maria da Silva';
    const medico3 = 'Jaqueline Mendes';
    const estilosFora = { border: 'solid', borderRadius: 8, backgroundColor: '#EEE', paddingTop: 8, textAlign: 'center', width: '70%' };
    return (
        <div style={estilosFora}>
            Profissionais de Saúde
            <div style={{
                border: 'solid', borderRadius: 8, backgroundColor: '#EEE', paddingTop: 8, textAlign: 'center', width: '85%',
                marginleft: '7%', display: 'inline-block'
            }}>
                <div id='borda_externa'>
                    <img src={imagens} style={{ display: "inline-grid", border: 'solid', borderRadius: 1, backgroundColor: '#EEE', width: '150px', height: '150px' }} />
                    <br />
                    {medico1}
                </div>
                <div id='borda_externa'>
                    <img src={process.env.PUBLIC_URL + '/Maria.jpg'}
                        style={{ display: "inline-grid", border: 'solid', borderRadius: 1, backgroundColor: '#EEE', width: '150px', height: '150px' }} />
                    <br />
                    {medico2}

                </div>
                <div id='borda_externa'>
                    < img src="https://images.pexels.com/photos/6303573/pexels-photo-6303573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/"
                        style={{ display: "inline-grid", border: 'solid', borderRadius: 1, backgroundColor: '#EEE', width: '150px', height: '150px' }} />
                    <br/>
                    {medico3}
                </div>

            </div>
        </div>
    )
}

ReactDOM.render(
    <ProfSaude/>,
    document.querySelector("#root")
)