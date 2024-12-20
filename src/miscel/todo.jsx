import React, {useState} from "react"

function TodoApp(){
    const [tasks, setTasks] = useState(["Go to School", "Do your home work", "Finish your house chores"])
    const [newTask, setNewTask] = useState("")

    function handleChange(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.length > 0){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function handleDelete(index){
        let updatedTasks = tasks.filter((el, i) => i !== index)
        setTasks(updatedTasks)
    }

    function handleUpmove(index){
        if(index > 0){
            [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]]
            let moveUpdatedTasks = [...tasks]
            setTasks(moveUpdatedTasks)
        }
    }

    function handleDownmove(index){
        if(index < (tasks.length - 1)){
            [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]]
            let moveUpdatedTasks = [...tasks]
            setTasks(moveUpdatedTasks)
        }
    }


    // function handleUpmove(index) {
    //     if (index > 0) {
    //         let moveUpdatedTasks = [...tasks]; // Create a copy of tasks array
    //         console.log(moveUpdatedTasks);
            
    //         // Swap the element at index with the one before it
    //         [moveUpdatedTasks[index], moveUpdatedTasks[index - 1]] = 
    //         [moveUpdatedTasks[index - 1], moveUpdatedTasks[index]];
            
    //         setTasks(moveUpdatedTasks); // Update the tasks with the new order
    //     }
    // }
    

    return(
        <div className="todo-wrapper">
            <div className="todo-container">
                <h3>TODO APP</h3>
                <div className="create-todo-div">
                    <input value = {newTask} onChange = {handleChange} type = "text" placeholder="Type in your todo"/>
                    <button onClick={addTask}>Create</button>
                </div>

                <ul className="todo-ul">
                    { 
                        tasks.map((task, index) => (
                            <li className="todo-list" key = {index}>
                                <span className="todo-list-text">{task}</span>
                                <div className="todo-list-btn-div">
                                    <button onClick={() => handleDelete(index)} className= "delete-btn">Delete</button>
                                    <button onClick={() => handleUpmove(index)} className= "up-btn">👆</button>
                                    <button onClick={() => handleDownmove(index)} className= "down-btn">👇</button>
                                </div>
                            </li>
                        ) )
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoApp