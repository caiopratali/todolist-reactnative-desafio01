import React, { useState } from 'react';
import { View } from 'react-native';
import { dark, light } from '../assets/themes';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { ThemeButton } from '../components/ThemeButton';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle) {
      const newTask: Task = {id: new Date().getTime(), title: newTaskTitle, done:false }
      setTasks(oldState => [...oldState, newTask]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = tasks.map(task =>
      task.id === id
        ? {
            ...task,
            done: !task.done,
          }
        : task
    );

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ));
  }

  function handleEditTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <View style={{ flex: 1, backgroundColor: darkTheme ? dark.black : light.white }}>
      <Header darkTheme={darkTheme} />

      <TodoInput addTask={handleAddTask} darkTheme={darkTheme} />

      <MyTasksList 
        darkTheme={darkTheme}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />

      <ThemeButton editTheme={handleEditTheme} darkTheme={darkTheme} />
    </View>
  )
}