import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { dark, light } from '../assets/themes';

interface TodoInputProps {
  addTask: (task: string) => void;
  darkTheme: boolean;
}

export function TodoInput({ addTask, darkTheme }: TodoInputProps) {

  const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: darkTheme ? dark.backgroundInput : light.backgroundInput,
      borderRadius: 5,
      marginTop: -25,
      marginHorizontal: 40,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      backgroundColor: darkTheme ? dark.backgroundInput : light.backgroundInput,
      color: darkTheme ? dark.white : light.black,
      paddingLeft: 12,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    inputIOSShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84
    },
    inputAndroidShadow: {
      elevation: 0
    },
    addButton: {
      backgroundColor: darkTheme ? dark.purple : light.green,
      height: 50,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  });

  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task)
    setTask('')
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={ darkTheme ? dark.white : light.gray}
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}