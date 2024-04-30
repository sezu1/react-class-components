import {Description} from "../../components/description/Description";
import styles from "./mainPage.module.css"
import {Component} from "react";

export class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const obj2= {title:"Title", description:"description"}
        return (
            <div className={styles.description}>
                <Description obj={obj2} />
            </div>
        );
    }

}

