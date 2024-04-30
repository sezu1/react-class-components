import {Todo} from "../../components/todo/Todo";
import styles from "./todosPage.module.css"


export function TodosPage() {
    const arr = ["todo 1", "todo 2", "todo 3"];
    return (
        <div className={styles.description}>
            {arr.map((item, index) => (
            <Todo key={index} item={item} />
                ))}
        </div>
    );
}

