import React from "react";
import { List } from "@chakra-ui/react";
import Task from "./Task";

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
    return (
        <List mt={4}>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onComplete={onComplete}
                />
            ))}
        </List>
    );
};