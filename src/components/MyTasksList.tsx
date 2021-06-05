import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

import { dark, light } from '../assets/themes';

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  darkTheme: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, darkTheme }: MyTasksListProps) {
  
  const styles = StyleSheet.create({
    header: {
      color: darkTheme ? dark.purple : light.black,
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold'
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: darkTheme ? dark.purple : light.black,
      marginRight: 10
    },
    taskText: {
      color: darkTheme ? dark.white : light.black,
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: darkTheme ? dark.lightBlack : light.lightBlue,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: darkTheme ? dark.purple : light.blue,
      marginRight: 10
    },
    taskTextDone: {
      color: darkTheme ? dark.white : light.gray,
      textDecorationLine: 'line-through'
    }
  })

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={!item.done ? styles.taskButton : styles.taskButtonDone}
          >
            <View 
              testID={`marker-${index}`}
              style={!item.done ? styles.taskMarker : styles.taskMarkerDone}

            />
            <Text 
              style={!item.done ? styles.taskText : styles.taskTextDone}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<Text style={styles.header}>Minhas tasks</Text>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}
