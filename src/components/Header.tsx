import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { dark, light } from '../assets/themes';

interface HeaderProps {
  darkTheme: boolean;
}

export function Header({ darkTheme }: HeaderProps) {
  const styles = StyleSheet.create({
    header: {
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 44,
      backgroundColor: darkTheme ? dark.blue : light.blue,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    headerText: {
      fontSize: 24,
      color: darkTheme ? dark.white : light.white,
      fontFamily: 'Poppins-Regular',
    }
  });

  
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

