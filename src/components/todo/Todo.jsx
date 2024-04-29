import styles from "./todo.module.css"

export function Todo({item}) {
    return (
        <div>
            <p className={styles.items}>{item}</p>
        </div>
    );
}

