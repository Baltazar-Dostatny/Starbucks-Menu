import "./ExtraDiv.css";

const ExtraDiv = () => {

    const biggerPage = () => {
        const div = document.querySelector("main");
        const currentPageHeightStyle = div.style.height;
        const value = parseInt(currentPageHeightStyle.match(/(-?\d+)px/)[0]);    

        const newHeightValue = value + 25;
        div.style.height = `calc(${newHeightValue}px + 100vh)`;
    };

    const smallerPage = () => {
        const div = document.querySelector("main");
        const currentPageHeightStyle = div.style.height;
        const value = parseInt(currentPageHeightStyle.match(/(-?\d+)px/)[0]);

        if(value > -100) {
            const newHeightValue = value - 25;
            div.style.height = `calc(${newHeightValue}px + 100vh)`;
        };
    };

    return (
        <div className="extraDiv">
            <h2>MENU STARBUCKS</h2>

            <ul>
                <li><button onClick={biggerPage}>Aumentar Página</button></li>
                <li><button onClick={smallerPage}>Diminuir Página</button></li>
            </ul>

            <img alt="Cofee" src="Folhas/111.png"></img>
        </div>
    );
};

export default ExtraDiv;