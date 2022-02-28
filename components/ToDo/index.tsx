import styles from "../../styles/todo.module.css";

interface ToDoProps {
  date: string;
  toDo:
    | {
        id: number;
        date: string;
        content: string[];
      }
    | undefined;
}

const ToDo = ({ date, toDo }: ToDoProps) => {
  return (
    <div className={styles.container}>
      To Do list for <strong>{date}</strong>
      <ol>
        {toDo &&
          toDo.content.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
      </ol>
    </div>
  );
};

export default ToDo;
