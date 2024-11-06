import "./Page.css";

const Page = (props) => {
    return (
        <img alt={`folha ${props.pageIndex}`} src={`Folhas/${props.pageIndex}.png`}></img>
    );
};

export default Page;