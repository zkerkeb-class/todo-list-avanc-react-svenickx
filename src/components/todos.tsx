import { EStatus, ITask } from '../App';

interface IProps {
  tasks: ITask[];
  addTask: Function;
  status: EStatus;
}

export function Todos(props: IProps) {
  return (
    <ul className="list-disc ml-4">
      {props.tasks.map((todo: ITask, i: number) => (
        <li key={i}>{todo.task}</li>
      ))}
    </ul>
  );
}
