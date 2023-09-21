import { Title, Description, Div, DivCard, CardsItems, Img} from "./StyledComponents.js"

import Imagem1 from "../Imagens/Icones/airJordan1.png"
import Imagem2 from "../Imagens/Icones/airJordan2.png"
import Imagem3 from "../Imagens/Icones/airJordan3.png"
import Imagem4 from "../Imagens/Icones/airJordan4.png"
import Imagem5 from "../Imagens/Icones/airJordan5.png"
import Imagem6 from "../Imagens/Icones/airJordan6.png"
import Imagem7 from "../Imagens/Icones/airJordan7.png"
import Imagem8 from "../Imagens/Icones/airJordan8.png"

function Cards(props){

    return(
        <div>
            <Div>
                <Title>Destaques</Title>
                <Description>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </Description>
            </Div>
            <DivCard>
                <CardsItems>
                    <Img src={Imagem1} alt={props.alt}></Img>
                </CardsItems>
                <CardsItems>
                    <Img src={Imagem2} alt={props.alt}></Img>
                </CardsItems>
                <CardsItems>
                    <Img src={Imagem3} alt={props.alt}></Img>
                </CardsItems>
                <CardsItems>
                    <Img src={Imagem4} alt={props.alt}></Img>
                </CardsItems>
                <CardsItems>
                    <Img src={Imagem5} alt={props.alt}></Img>
                </CardsItems>
                <CardsItems>
                    <Img src={Imagem6} alt={props.alt}></Img>
                </CardsItems>
                <CardsItems>
                    <Img src={Imagem7} alt={props.alt}></Img>
                </CardsItems>
                <CardsItems>
                    <Img src={Imagem8} alt={props.alt}></Img>
                </CardsItems>
            </DivCard>
        </div>
    )
}

export default Cards