import styles from "./todo.module.css"
import {Component} from "react";

export class Todo extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        return (
            <div>
                <p className={styles.items}>{this.props.item}</p>
            </div>
        );
    }

}

