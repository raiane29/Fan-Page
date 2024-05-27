import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
    cursor: pointer;
    margin-left:20px;
    border-radius:5px;
    padding: 5px;
    background-color:#e5dfee;
    border:none;
    ;

    `

export const H1 = styled.h1`
padding-left: 200px;
color: #e5dfee; 
font-size: 30px;
text-shadow: 0 0 0.2em hsl(213, 56%, 80%), 0 0 0.2em #F87;
`

export const Nav =  styled.nav`
display: flex;
position: fixed;
left: 0;
right: 0;
justify-content: space-between;
padding: 20px;
background-color:#2669b9;
align-items:center
`

export const Ul = styled.ul`
text-decoration: none;
list-style-type:none;
display: flex;
padding-right: 50px;
`

export const LI = styled.li`
padding-left:40px;`

export const LinkStyled = styled(Link)`
    font-size: 18px;
    text-decoration: none;
    padding: 8px 12px;
    color: #e5dfee;
    background-color:#F97300 ;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    
`