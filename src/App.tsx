import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { ITask } from "./interfaces"

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([])

  // function calls

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const handleSubmit = (): void => {
    setTodoList([...todoList, {taskName:task}])
    setTask("")

  }
  const deleteTask = (taskToDelete: string): void => {
    console.log(taskToDelete, "task")
    setTodoList(todoList.filter((each) => {
      return each.taskName !== taskToDelete
    }))
  }

  return (
    <div className="App">
      <div className='header'>
        <div>
          <input type="text" value={task} placeholder="Enter the Task" onChange={handleChange} ></input>
          <button onClick={handleSubmit}>Add Task </button>
        </div>
      </div>
      <div className='todoContainer' >
        <table className="table">
          <thead>
            <tr>
              <th scope="col">sl.no</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          {
            todoList.map((each: ITask, index: number) => {

              return (<>

                <tbody>
                  <tr className="table-light">
                    <th scope="row">{index+1}</th>
                    <td key={index}>{each.taskName}</td>
                    <td> <button onClick={() => deleteTask(each.taskName)}>Delete</button></td>
                  </tr>

                </tbody>


              </>
              )
            })
          }
        </table>
      </div>
    </div>
  );
}

export default App;