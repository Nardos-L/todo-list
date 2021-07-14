import React from 'react'

const Results = (props) => {
    //destructure props
    const { allTasks, setAllTasks, task } = props;

    const taskClasses = ["bold", "italic"];


    console.log("here they are", allTasks);

    const handleSubmit = ((e, i) => {
        e.preventDefault();
        const filteredTasks = allTasks.filter((_task, idx) => { //_ to tell react you are not using that variable
            return idx != i;
        });

        setAllTasks(filteredTasks);
    });

    const handleToggleComplete = (e, i) => {
        const updatedTasks = allTasks.map((task, idx) => {
            if (i === idx) {
                task.complete = !task.complete;
            }
            return task;
        })
        setAllTasks(updatedTasks)

    };

    allTasks.map((task, idx) => {
        if (task.complete) {
            taskClasses.push("line-through");
            console.log(`${task.complete} ${task.task}`);
            console.log('working');
        };
    });


    return (
        <div >
            {
                allTasks.map((task, i) => {
                    return (
                        <div key={i}>
                            <form >
                                <label>
                                    <span className={taskClasses.join(" ")}> {task.task}</span> <input type="checkbox" checked={task.complete} onChange={e => { handleToggleComplete(e, i) }} />
                                </label>
                                <input type="submit" value="Delete" onClick={e => {
                                    handleSubmit(e, i)
                                }} />
                            </form>
                        </div>
                    )
                })
            }
        </div>
    );

}


export default Results;
