import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Todos } from './components/todos';
import { Button } from './components/button';

export interface ITask {
  task: string;
  status: EStatus;
}

export enum EStatus {
  DONE = 0,
  NOT_DONE,
}

function App() {
  const [currentStatus, setCurrentTab] = useState<EStatus>(EStatus.NOT_DONE);
  const [newTask, SetNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([
    {
      status: EStatus.DONE,
      task: 'Nettoyer les toilettes',
    },
    {
      status: EStatus.NOT_DONE,
      task: 'Se brosser les dents',
    },
  ]);

  const filteredTasks = useCallback(
    (status: EStatus) => tasks.filter((task) => task.status === status),
    [tasks]
  );

  const doneTasks = useMemo(() => filteredTasks(EStatus.DONE), [tasks]);
  const notDoneTasks = useMemo(() => filteredTasks(EStatus.NOT_DONE), [tasks]);

  const addTask = () => {
    setTasks((t) => [...t, { status: currentStatus, task: newTask }]);
    SetNewTask('');
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <Button
          onClick={() => {
            SetNewTask('');
            setCurrentTab(EStatus.NOT_DONE);
          }}
          label="A faire"
          style={`${currentStatus === EStatus.NOT_DONE ? 'bg-gray-900' : ''}`}
        />
        <Button
          onClick={() => {
            SetNewTask('');
            setCurrentTab(EStatus.DONE);
          }}
          label="Fait"
          style={`${currentStatus === EStatus.DONE ? 'bg-gray-900' : ''}`}
        />
      </div>
      {currentStatus === EStatus.NOT_DONE && (
        <Todos
          tasks={notDoneTasks}
          addTask={addTask}
          status={EStatus.NOT_DONE}
        />
      )}
      {currentStatus === EStatus.DONE && (
        <Todos tasks={doneTasks} addTask={addTask} status={EStatus.DONE} />
      )}
      <form
        className="flex"
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            SetNewTask(event.target.value)
          }
          className="bg-gray-900 p-2"
          type="text"
          name="addTodo"
          value={newTask}
          placeholder="Ajouter une tâche"
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default App;
