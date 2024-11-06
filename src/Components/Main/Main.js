import { useEffect, useState } from "react";
import ChangePages from "../ChangePages/ChangePages";
import ExtraDiv from "../ExtraDiv/ExtraDiv";
import PagesDiv from "../PagesDiv/PagesDiv";
import "./Main.css";

const Main = () => {
    const [pageIndex, setPageIndex] = useState(1);

    const showOrHideDivExtraDiv = () => {
        const mainDiv = document.querySelector("main");
        const extraDiv = document.getElementsByClassName("extraDiv")[0];

        const mainWidth = mainDiv.offsetWidth;
        const pagesWidth = document.getElementsByClassName("pages")[0].offsetWidth;

        if (mainWidth - pagesWidth < 250) {
            mainDiv.style.gridTemplateColumns = "auto";
            extraDiv.style.display = "none";
        } else {
            mainDiv.style.gridTemplateColumns = "";
            extraDiv.style.display = "";
        }
    };

    const detectComputerOrCellphoneLayout = () => {
        const mainWidth = document.querySelector("main").offsetWidth;
        const pagesWidth = document.querySelectorAll(".pages img")[0].offsetWidth * 2 + 40;

        if (mainWidth < pagesWidth) {
            document.querySelectorAll(".pages img")[1].style.display = "none";
            document.querySelector("main").style.height = "fit-content";
            document.querySelector("main").style.maxHeight = "calc(100vh - 100px)";
        } else {
            document.querySelectorAll(".pages img")[1].style.display = "";
            document.querySelector("main").style.height = "calc(100vh - 100px)";
            document.querySelector("main").style.maxHeight = "";
        }
    };

    useEffect(() => {
        const handleResize = () => {
            detectComputerOrCellphoneLayout();
            showOrHideDivExtraDiv();
        };

        handleResize(); // Executa a função quando o componente é montado

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize); // Remove o listener ao desmontar o componente
    }, []); // Coloca uma lista de dependências vazia para executar apenas na montagem e desmontagem

    return (
        <main style={{ height: "calc(100vh - 100px)" }}>
            <ChangePages pageIndex={pageIndex} toChangePages={newPageIndex => setPageIndex(newPageIndex)}></ChangePages>
            <PagesDiv pageIndex={pageIndex}></PagesDiv>
            <ExtraDiv></ExtraDiv>
        </main>
    );
};

export default Main;
