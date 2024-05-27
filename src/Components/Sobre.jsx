import { CaixaSobre, H1, P, Img, Span, H2, Linha} from "../Style/Sobre"
import power1 from '../img/power1.gif'
import power2 from '../img/Power2.gif'

const Sobre = () => {
    return(
        <CaixaSobre>
            <H1>Os Poderes Encantadores de Jack Frost: Mestre do Gelo e do Vento</H1>
            
                <H2>Toque Congelante</H2>
            <Span>
                <Img src={power1}/>
                <P>Um dos poderes mais marcantes de Jack Frost é a capacidade de criar gelo e neve com um simples toque. Ele pode transformar uma paisagem comum em um verdadeiro paraíso invernal, cobrindo árvores, ruas e edifícios com uma camada brilhante de gelo. Esse poder não apenas encanta pela beleza que traz, mas também pelo impacto que tem no ambiente, tornando-o gelado e desafiador. Jack usa essa habilidade para fazer travessuras, como criar pistas escorregadias ou esculpir padrões intricados de geada nas janelas. Sua capacidade de controlar o gelo e a neve é tanto uma forma de expressão artística quanto uma maneira de influenciar o mundo ao seu redor.</P>
            </Span>

                <Linha></Linha>
             
                <H2>Sopro Invernal</H2>
            <Span>
                <P>Outro poder significativo de Jack Frost é o controle sobre o vento frio e as tempestades de neve. Ele pode convocar ventos gelados para varrer uma área, trazendo consigo a sensação cortante do inverno. Este poder é muitas vezes usado para criar tempestades de neve intensas, que podem paralisar cidades inteiras e transformar paisagens em mundos brancos e desolados. O controle do vento frio permite a Jack Frost se mover rapidamente e de forma quase invisível, aproveitando as correntes de ar para viajar grandes distâncias em pouco tempo. Esse domínio sobre os elementos climáticos faz de Jack uma figura poderosa e imprevisível, capaz de mudar o tempo e criar cenários de inverno com um simples aceno.</P>
                <Img src={power2}/>
            </Span>
        </CaixaSobre>
    )
}

export default Sobre