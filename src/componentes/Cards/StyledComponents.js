import Styled from "styled-components"

export const Title = Styled.h3`
font-size: 32px;
font-weight: 600;
line-height: 39.01px;
text-align: center;
padding-bottom: 10px;
`

export const Description = Styled.p`
font-size: 20px;
font-weight: 500;
line-height: 24.38px;
text-align: center;
padding-top: 10px;
`
export const Div = Styled.div`
margin-top: 60px;
`

export const DivCard = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 60px;
`

export const CardsItems = Styled.div`
align-items: center;
background-color: #EBE9EA;
cursor: pointer;
display: flex;
height: 300px;
justify-content: center;
margin: 0 0 40px 15px;
width: 300px;
`

export const Img = Styled.img`
    transition: all .4s ease;
    &:hover{
        transform: scale(1.1);
    }
`