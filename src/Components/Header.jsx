import {Nav, Ul, LI, LinkStyled, H1} from '../Style/Header'


const Header = () => {
    return(
        <Nav>
            <H1>Jack Frost</H1>
            <Ul>
                <LI><LinkStyled to='/'>Home</LinkStyled></LI>
                <LI><LinkStyled to='sobre'>Sobre</LinkStyled></LI>
                <LI><LinkStyled to='login'>Login</LinkStyled></LI>
            </Ul>
        </Nav>
    )
}

export default Header