import React from "react";
import { ListItem, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

const Task = ({ task, onEdit, onDelete, onComplete }) => {
    return (
        <ListItem>
            <HStack>
                <IconButton
                    icon={<FaCheck />}
                    colorScheme="green"
                    onClick={() => onComplete(task)}
                    aria-label="Complete Task"
                />
                <Text className={task.completed ? "complete" : ""} flex="1" mr={4}>
                    {task.title}
                </Text>
                <IconButton
                    icon={<FaEdit />}
                    onClick={() => onEdit(task)}
                    aria-label="Edit Task"
                />
                <IconButton
                    icon={<FaTrash />}
                    colorScheme="red"
                    onClick={() => onDelete(task)}
                    aria-label="Delete Task"
                />
            </HStack>
        </ListItem>
    );
};

export default Task;