import React, { useState } from "react";
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  ColorModeScript,
  localStorageManager,
  Container,
  Input,
  IconButton,
  Stack,
  Box,
  Flex,
  Text,
  VStack,
  useColorMode,
  Heading,
  Center
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CheckIcon, EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editTask, setEditTask] = useState(null);

  const { colorMode, toggleColorMode } = useColorMode();

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const newTask = { title: input, completed: false };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const handleEditTask = (taskId) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskId].title = input;
    setTasks(updatedTasks);
    setInput("");
    setEditTask(null);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskId);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskId].completed = !updatedTasks[taskId].completed;
    setTasks(updatedTasks);
  };

  return (
    <Container maxW="xl" p={4}>
      <Center>
        <Heading as='h2' size='xl'>
          TodoList
        </Heading>
      </Center>
      <Stack direction="row" align="center">
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          aria-label="Cambiar modo de color"
        />
        <Input
          placeholder="Nueva tarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton
          icon={<AddIcon />}
          onClick={editTask !== null ? handleEditTask : handleAddTask}
          aria-label={editTask !== null ? "Editar tarea" : "Agregar tarea"}
        />
      </Stack>
      <VStack mt={4} align="start" spacing={2}>
        {tasks.map((task, index) => (
          <Flex key={index} align="center">
            <IconButton
              icon={<CheckIcon />}
              aria-label="Completar tarea"
              onClick={() => handleCompleteTask(index)}
              variant="ghost"
              colorScheme="teal"
            />
            {editTask === index ? (
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onBlur={() => handleEditTask(index)}
              />
            ) : (
              <Text
                flex="1"
                textDecoration={task.completed ? "line-through" : "none"}
                onClick={() => setEditTask(index)}
              >
                {task.title}
              </Text>
            )}
            <IconButton
              icon={<EditIcon />}
              aria-label="Editar tarea"
              onClick={() => setEditTask(index)}
              variant="ghost"
              colorScheme="teal"
            />
            <IconButton
              icon={<DeleteIcon />}
              aria-label="Eliminar tarea"
              onClick={() => handleDeleteTask(index)}
              variant="ghost"
              colorScheme="red"
            />
          </Flex>
        ))}
      </VStack>
    </Container>
  );
}

export default App;
