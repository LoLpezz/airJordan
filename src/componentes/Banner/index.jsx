import AirJordanRetro from "../Imagens/AirJordanRetro.png"
import { Div, Title} from "./StyledComponents"
import Typewriter from 'typewriter-effect'

function Banner(){
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
            </Div>

        </div>
    )
}

export default Banner