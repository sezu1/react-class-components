import {Description} from "../../components/description/Description";
import styles from "./aboutPage.module.css"
import {Component} from "react";

export class AboutPage extends Component {
    render(){
        const obj1= {title:"Title 2", description:"description 2"}
        return (
            <div className={styles.description}>
                <Description obj={obj1}/>
            </div>
        );
    }

}

