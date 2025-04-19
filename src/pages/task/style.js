import styled from "styled-components"


export const Container = styled.div`
background: linear-gradient(180deg, #10096D 0%, #54529E 100%);
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
    min-height: 100vh;;

`
export const ContainerItems = styled.div`
display: flex;
flex-direction: column;


li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    margin: 20px 0 18px 0;
    padding: 17px 15px 13px 27px;

    Img{
        height: 30px;
        cursor: pointer;
    }
    
    }
`

export const Img = styled.img`
margin-top: 97px 0 59px 0;
`

export const Button = styled.button`
background:rgb(66, 63, 138);
border: none;
width: 342px;
height: 68px;
font-size: 17px;
font-weight: 900;
line-height: 2.5px;



&:hover{
    background:rgb(94, 91, 178) }


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
export const Task = styled.div`
font-size: 18px;
font-weight: 700;
line-height: 22px;
margin-left: 15px;
margin-bottom: 5px;
`
