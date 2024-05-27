import { Main, H2, Pmain, Img , Span, Linha} from "../Style/Main"
import jack from '../img/jack.png'

const Mainn = () => {
    return(
            <Main>
                <Img src={jack}/>
           
                <Linha></Linha>
                
                <Span>
                <H2>Jack Frost: O Guardião do Inverno e da Diversão</H2>
                <Pmain>Jack Frost é uma figura mítica que personifica o inverno e o frio, sendo muitas vezes representado como um espírito travesso ou uma entidade que traz o gelo e a neve. Ele é conhecido por suas brincadeiras geladas, como criar padrões de geada nas janelas e transformar paisagens em verdadeiras obras de arte congeladas. A origem exata de Jack Frost é incerta, mas ele aparece em diversas tradições folclóricas e culturais, especialmente nas regiões frias da Europa e América do Norte. Seu papel varia de uma figura benigna que apenas brinca com o frio, a um ser mais sinistro que traz o rigor do inverno.</Pmain>
                <Pmain>No folclore britânico e escandinavo, Jack Frost é frequentemente visto como um espírito do inverno que adora brincar com o frio. Ele é descrito como um jovem brincalhão que tem o poder de congelar tudo o que toca, criando belas paisagens de gelo e neve. Suas travessuras geladas, como os padrões de geada nas janelas e as pistas escorregadias de gelo, são vistas com admiração e, às vezes, com temor, pelos que vivenciam os invernos rigorosos dessas regiões.</Pmain>
                <Pmain>Na literatura e cultura popular, Jack Frost também foi retratado de várias maneiras. Em alguns contos, ele é um herói que usa seus poderes para proteger as pessoas do mal, enquanto em outros, ele é mais uma figura solitária que prefere a companhia do inverno à interação com os humanos. Obras literárias como "Jack Frost: The End Becomes the Beginning" de William Joyce exploram sua origem e seus poderes de maneira profunda, atribuindo-lhe uma personalidade rica e multifacetada.</Pmain>
                </Span>
            </Main>
    )
}
export default Mainn