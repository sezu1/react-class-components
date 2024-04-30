import {Description} from "../../components/description/Description";
import styles from "./mainPage.module.css"

export function MainPage() {
    const obj2= {title:"Title", description:"description"}
    return (
        <div className={styles.description}>
            <Description obj={obj2} />
        </div>
    );
}

