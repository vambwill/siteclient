import Logo from "./img/LionLogo.png"


function Nave() {
    return (
        
        
        <nav>
            <img src={Logo} alt="Logo da pag"/>
            <>
                <ul>
                        <li><a href="#">Portifólio</a></li>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Suporte</a></li>
                </ul>
            </>
           

        </nav>

        
    );
}

export default Nave