import React, { useState } from 'react'; //importing react and destructuring state
import Results from './Results';

const ToDo = props => {
    const { task, setTask, allTasks, setAllTasks } = props;

    const handleInput = e => {
        setTask(e.target.value);
    }

    const handleSubmit = e => {
        //first prevent default as React refreshes the page
        if (task.length === 0) {
            return;
        }

        e.preventDefault();
        const newTask = {
            task: task,
            complete: false

        };

        setAllTasks([...allTasks, newTask]);

        setTask('');

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <input type="text" onChange={handleInput} value={task} />
                </div>

                <input type="submit" value="Add" />
            </form>
        </div>

    )
}

export default ToDo;