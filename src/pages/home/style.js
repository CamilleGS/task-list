import styled from "styled-components"


export const Container = styled.div`
background: linear-gradient(180deg, #045A8F 1.92%, #1FACC2 100%);
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;

`
export const ContainerItems = styled.div`
display: flex;
flex-direction: column;
`

export const Img = styled.img`
margin-top: 97px 0 59px 0;
`

export const Input = styled.input`
padding: 19px 240px 18px 15px;
align-items: center;
border-radius: 14px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
background: #4FA7C1;
margin-bottom: 76px;

&::placeholder{
    color: #fff;
    font-size: 18px;
    font-weight: 300;
}


`
export const Button = styled.button`
background: linear-gradient(90deg, #1FACC2 0%, #3DBEB5 100%);
border: none;
height: 68px;
font-size: 17px;
font-weight: 900;
line-height: 2.5px;



&:hover{
    background: linear-gradient(91deg, #42BFB5 44.09%, #A6D8B6 99.5%);}


`
export const H1 = styled.h1`
margin-bottom: 76px;

`


export const P = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 22px;
margin-left: 15px;
margin-bottom: 5px;
`
