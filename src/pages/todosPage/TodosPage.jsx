import {Todo} from "../../components/todo/Todo";



export function TodosPage() {
    const arr = ["todo 1", "todo 2", "todo 3"];
    return (
        <div>
            {arr.map((item, index) => (
            <Todo key={index} item={item} />
                ))}
        </div>
    );
}

