import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./Header.css";

const Header = () => {

    const cellphoneMorePages = () => {
        if(document.getElementsByClassName("morePages")[0].style.display !== "flex") {
            document.getElementsByClassName("morePages")[0].style="width: fit-content; height: 100%; display: flex; flex-direction: column; justify-content: start ;position: absolute; top: 0; left: 0;background-color: #FFF; padding: 40px"
            document.querySelectorAll(".morePages ul")[0].style="height: min-content; flex-direction: column";
            document.querySelectorAll(".morePages ul")[1].style="flex-direction: column";
        } else {
            document.getElementsByClassName("morePages")[0].style=""
            document.querySelectorAll(".morePages ul")[0].style="";
            document.querySelectorAll(".morePages ul")[1].style="";
        };
    };

    return (
        <header>
            <a href="/"><img alt="Starbucks Logo" src="Logos/main.png"></img></a>

            <div className="morePages">
                <ul>
                    <li><a href="https://www.starbucks.com.br/menu-list">Menu</a></li>
                    <li><a href="https://www.starbucks.com.br/cafe">Nosso café</a></li>
                    <li><a href="https://www.starbucks.com.br/responsabilidade">Impacto social</a></li>
                </ul>

                <ul>
                    <li><a href="https://historias.starbucks.com/br/">Histórias</a></li>
                    <li><a href="https://www.starbucks.com.br/lojas">Encontre uma loja</a></li>
                </ul>
            </div>

            <button onClick={cellphoneMorePages}><FontAwesomeIcon icon={faBars} className='buttonIcon' /></button>
        </header>
    );
};

export default Header;