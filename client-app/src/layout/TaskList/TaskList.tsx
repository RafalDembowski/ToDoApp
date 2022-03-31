import React from "react";
import Filters from "../../components/Filters/Filters";
import Task from "../../components/Task/Task";
import TaskTypes from "../../components/TaskTypes/TaskTypes";
import './TaskList.css';

export default function TaskList(){
    return(
        <React.Fragment>
            <div className="TaskList-container">
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