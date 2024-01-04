import React, {FC} from 'react';
import styled from "styled-components";
import {initialData} from "@/widgets/TasksList/initialData";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {StrictModeDroppable} from "@/shared/ui/Droppable/StrictModeDroppable";

const Container = styled.div`
  margin: 8px;
  border: 1px solid black;
  border-radius: 5px;
`;
const Title = styled.h1`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Task = styled.div`
  padding: 8px;
  border: 1px black solid;
  background-color: aliceblue;
  margin-bottom: 8px;
`

interface ColumnProps {
    column: {
        id: string,
        title: string,
        taskIds: Array<string>,
    },
    tasks: Array<{id: string, content: string}>
    droppableId: string
}

const Column: FC<ColumnProps> = (props) => {
    return (
        <Container>
            <Title>{props.column.title}</Title>
            <StrictModeDroppable droppableId={props.droppableId}>
                {(provided, snapshot) =>
                    <TaskList
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {props.tasks.map((task, index) =>
                            <Draggable draggableId={task.id} index={index} key={task.id}>
                                {
                                    (provided, snapshot) =>
                                        <Task
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            {task.content}
                                        </Task>
                                }
                            </Draggable>
                        )}
                        {provided.placeholder}
                    </TaskList>
                }

            </StrictModeDroppable>
        </Container>
    );
};

export default Column;