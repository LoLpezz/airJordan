import Styled from "styled-components";

const Description = Styled.p`
    background-color: #00AEFF;
    font-size: 16px;
    font-weight: 500;
    height: 60px;
    line-height: 60px;
    text-align: center;
`

const Title = Styled.h2`
    font-size: 24px;
    font-weight: 600;
    height: 60px;
    line-height: 60px;
    text-align: center;
`

function Header(){
    return(
        <div>
            <Description>Ganhe R$ 10,00 de desconto no frete</Description>
            <Title>JordanShoes</Title>
        </div>
    )
}

export default Header;