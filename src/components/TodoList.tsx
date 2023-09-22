import { useFetchTodo } from "../hooks/useFetchTodo";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { todos } = useFetchTodo();
  return (
    <div className={styles.wrapper}>
      <h2>TodoList</h2>
      <div>
        {todos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </div>
    </div>
  );
};

export default TodoList;
