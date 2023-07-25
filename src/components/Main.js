import Logo from "./img/LionLogo.png"
import globo from "./img/globo.jpg"
import LA from "./img/LL (1).png"
import Microsoft from "./img/microsoft.jpg"
import CBF from "./img/cbf.png"
import ADI from "./img/adidas.jpg"



function Principal() {
    return (
        <main>
            <h1>Loja Virtual</h1>
            <h2>Conheça nossos serviços e produtos</h2>
            <section className="works">
                <h2>Trabalhos</h2>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos ca como Aldus PageMaker.
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos ca como Aldus PageMaker
                </p>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos ca como Aldus PageMaker.</p>
                
            </section>
            <section className="services">
                <h2>Serviços</h2>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos ca como Aldus PageMaker.</p>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos ca como Aldus PageMaker.</p>
            </section>
            <section className="parcerias">
                <h2>Parcerias</h2>
                
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos ca como Aldus PageMaker. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos ca como Aldus PageMaker</p>
                <span className="imagens">
                    <img src={ADI} alt="adidas" height="30px" width="30px"></img>
                    <img src={CBF} alt="adidas" height="30px" width="30px"></img>
                    <img src={Microsoft} alt="adidas" height="30px" width="30px"></img>
                    <img src={LA} alt="adidas" height="30px" width="30px"></img>
                    <img src={globo} alt="adidas" height="30px" width="30px"></img>
                    <img src={Logo} alt="adidas" height="30px"></img> 
                </span>
                
                
                <ul>
                    <li><a href="#">Adidas</a></li>
                    <li><a>CBF</a></li>
                    <li><a>Microsoft</a></li>
                    <li><a>LA</a></li>
                    <li><a>GLOBO</a></li>
                    <li><a>VW Produções</a></li>
                </ul>


            </section>
        </main>
    )
}

export default Principal