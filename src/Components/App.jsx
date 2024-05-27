import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "../Style/App"
import Foote from "./Footer"
import Mainn from "./Main"
import Login from "./Login"
import Sobre from "./Sobre"
import Header from "./Header"

const App = () => {

    return(
            <BrowserRouter>
                <Container>
                <Header/>
                <Routes>
                    <Route path="/" element={<Mainn/>}/>
                    <Route path="sobre" element={<Sobre/>} />
                    <Route path="login" element={<Login/>} />
                </Routes>
                <Foote/>
                </Container>
            </BrowserRouter>
    )
}
export default App;