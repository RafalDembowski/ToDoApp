import React from "react";
import agent from "../../api/agent";
import Filters from "../../components/Filters/Filters";
import Task from "../../components/Task/Task";
import TaskTypes from "../../components/TaskTypes/TaskTypes";
import './TaskList.css';

export default function TaskList(){


    async function test (){
        const test = await agent.Tasks.list(new URLSearchParams());
        console.log(test);
    }

    return(
        <React.Fragment>
            <div className="TaskList-container" onClick={test}>
                <TaskTypes />
                <Filters />

                
            </div>
            {
                /*
                tutaj lista zleceń
                */
            }
            <div className="Tasks-container">
                <Task />
            </div>
            
        </React.Fragment>
    )
}