import Styled from "styled-components"
import ListaImagens from "./CardsImg.js"

function Cards(props){

    console.log(ListaImagens.map((el) => {
     console.log(el.image)   
    }) 
        
    )

    const Title = Styled.h3`
        font-size: 32px;
        font-weight: 600;
        line-height: 39.01px;
        text-align: center;
        padding-bottom: 10px;
    `

    const Description = Styled.p`
        font-size: 20px;
        font-weight: 500;
        line-height: 24.38px;
        text-align: center;
        padding-top: 10px;
    `
    const Div = Styled.div`
        padding: 50px;
    `

    return(
        <div>
            <Div>
                <Title>Destaques</Title>
                <Description>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </Description>
            </Div>
            <div>
                {
                    ListaImagens.map((element, index) => {
                        
                        return(
                            <div>
                                <img key={index} src={element.image} alt={props.alt}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards