import Page from "../Page/Page";
import "./PagesDiv.css";

const PagesDiv = (props) => {
    return (
        <div className="pages">
            <Page pageIndex={Number(props.pageIndex)}></Page>
            <Page pageIndex={Number(props.pageIndex+1)}></Page>
        </div>
    );
};

export default PagesDiv;