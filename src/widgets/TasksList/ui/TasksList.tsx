'use client'
import React, {useState} from 'react';
import {InitialData, initialData} from "../initialData";
import Column from './Column';
import {DragDropContext, DropResult} from "react-beautiful-dnd";

const TasksList = () => {
    const [state, setState] = useState<InitialData>(initialData)
    const onDragEnd = (result: DropResult) => {
        const {
            destination,
            source,
            draggableId
        } = result;

        if (!destination) {
            console.log('dest')
            return
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            console.log('both')
            return;
        }

        const column = state.columns[source.droppableId];
        const newTasksIds = Array.from(column.taskIds);
        newTasksIds.splice(source.index, 1);
        newTasksIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTasksIds
        }

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn
            }
        }

        console.log(newState.columns)

        setState(newState);
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {state.columnsOrder.map((colId, index) => {
                const column = state.columns[colId];
                const tasks = column.taskIds.map(taskId => state.tasks[taskId])
                return (<Column droppableId={colId} tasks={tasks} column={column} key={column.id}/>)
            })
            }
        </DragDropContext>
    );
};

export default TasksList;