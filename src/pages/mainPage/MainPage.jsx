import {Description} from "../../components/description/Description";


export function MainPage() {
    const obj2= {title:"Title", description:"description"}
    return (
        <>
            <Description obj={obj2}/>
        </>
    );
}

