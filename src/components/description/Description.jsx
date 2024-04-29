import styles from "./description.module.css"

export function Description ({obj}) {
    return (
        <div>
            <h2 className={styles.titles}>{obj.title}</h2>
            <p className={styles.descriptions}>{obj.description}</p>
        </div>
    );
}



