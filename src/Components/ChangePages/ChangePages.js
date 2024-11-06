import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ChangePages.css";

const ChangePages = (props) => {

    const nextPage = () => {
        if(props.pageIndex < 30) {
            props.toChangePages(props.pageIndex+1);
        };
    };

    const previousPage = () => {
        if(props.pageIndex > 1) {
            props.toChangePages(props.pageIndex-1);
        };
    };

    return (
        <div className="changePages">
            <ul>
                <li><button onClick={(previousPage)}><FontAwesomeIcon icon={faArrowLeft} /></button></li>
                <li>{props.pageIndex}</li>
            </ul>

            <ul>
                <li>{props.pageIndex+1}</li>
                <li><button onClick={nextPage}><FontAwesomeIcon icon={faArrowRight} /></button></li>
            </ul>
        </div>
    );
};

export default ChangePages;