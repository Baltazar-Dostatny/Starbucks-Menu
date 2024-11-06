import { useEffect } from "react";
import "./FooterInfos.css";

const FooterInfos = () => {

    const verifyWidthApplyBestLayout = () => {
        const pageWidth = document.body.offsetWidth;
        const infos = document.querySelectorAll(".infos details")

        if(pageWidth > 1000) {
            infos.forEach(info => {info.setAttribute("open", "")});
        } else {
            infos.forEach(info => {info.removeAttribute("open", "")});
        };
    };
    
    useEffect(() => {
        verifyWidthApplyBestLayout();
        window.addEventListener("resize", verifyWidthApplyBestLayout);
    });

    return (
        <div className="infos">
            <details>
                <summary>Sobre nós</summary>

                <ul>
                    <li><a href="https://www.starbucks.com.br/sobre">Nossa Empresa</a></li>
                    <li><a href="https://www.starbucks.com.br/cafe">Nosso café</a></li>
                    <li><a href="https://www.starbucks.com.br/sobre/atendimento">Atendimento ao cliente</a></li>
                    <li><a href="https://www.starbucks.com.br/sobre/compliance-e-privacidade">Compliance e Privacidade</a></li>
                    <li><a href="https://manyplaces-p.s3-sa-east-1.amazonaws.com/starbucks/site/Co%CC%81digo_de_E%CC%81tica_e_Conduta_SR.pdf">Código de Ética e Conduta SouthRock</a></li>
                </ul>
            </details>

            <details>
                <summary>Carreira</summary>

                <ul>
                    <li><a href="https://www.starbucks.com.br/sobre/carreiras">Central de carreiras</a></li>
                </ul>
            </details>

            <details>
                <summary>Impacto Social</summary>

                <ul>
                    <li><a href="https://www.starbucks.com.br/responsabilidade/comunidade">Comunidade</a></li>
                    <li><a href="https://www.starbucks.com.br/responsabilidade/meioambiente">Meio Ambiente</a></li>
                    <li><a href="https://www.starbucks.com.br/responsabilidade/fornecimento">Fornecimento ético</a></li>
                    <li><a href="https://historias.starbucks.com/br/">Histórias Starbucks</a></li>
                </ul>
            </details>

            <details>
                <summary>Starbucks Rewards</summary>

                <ul>
                    <li><a href="https://www.starbucks.com.br/rewards/termoscard">Termos & Condições do Starbucks Card</a></li>
                    <li><a href="https://www.starbucks.com.br/rewards/termos">Termos & Condições do Starbucks Rewards</a></li>
                    <li><a href="https://www.starbucks.com.br/rewards/termos-gift-card">Termos & Condições do Gift Card</a></li>
                    <li><a href="https://www.starbucks.com.br/termos/promocoes">Termos & Condições de Promoções Starbucks</a></li>
                    <li><a href="https://www.starbucks.com.br/termos/mop">Termos & Condições Peça e Pague pelo Celular e Retire na Loja</a></li>
                </ul>
            </details>

            <details>
                <summary><a href="https://historias.starbucks.com/br/">Histórias</a></summary>
            </details>
        </div>
    );
};

export default FooterInfos;
