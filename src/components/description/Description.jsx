import styles from "./description.module.css"
import {Component} from "react";

export class Description extends Component {
    constructor(props) {
        super(props);

    }
     render(){
          return (
             <div>
                 <h2 className={styles.titles}>{this.props.obj.title}</h2>
                 <p className={styles.descriptions}>{this.props.obj.description}</p>
             </div>
         );
     }

}



