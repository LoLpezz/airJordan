import AirJordanRetro from "../Imagens/AirJordanRetro.png"
import Styled from "styled-components"
import Typewriter from 'typewriter-effect'

function Banner(){

    const Div = Styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        margin-left: 100px;
    `

    const Title = Styled.h2`
        color: #fff;
        font-size: 48px;
        font-weight: 600;
        line-height: 58.51px;
    `

    const Description = Styled.p`
        color: #fff;
        font-size: 24px;
        font-weight: 500;
        line-height: 38.4px;
        width: 637px;
    `

    return (
        <div style={{
            backgroundImage: `url(${AirJordanRetro})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: '377px',
            
        }}>
            <Div>
                <Title>A melhor loja de Jordan</Title>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString("O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.").start();
                }}
                />
                
                <Description>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</Description>
            </Div>

        </div>
    )
}

export default Banner