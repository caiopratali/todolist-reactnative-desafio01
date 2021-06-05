import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { dark, light } from '../assets/themes';

interface ThemeButtonProps {
  editTheme: () => void;
  darkTheme: boolean;
}

export function ThemeButton({ editTheme, darkTheme }: ThemeButtonProps) {
  return (
    <TouchableOpacity onPress={editTheme} style={{ 
      width: 40, 
      height: 40, 
      backgroundColor: darkTheme ? dark.orange : light.dark, 
      borderRadius: 20, 
      alignSelf: 'flex-end',
      justifyContent: 'center', 
      alignItems:'center',
      margin: 10
    }}>
      <Text style={{ color: '#FFF', fontSize: 10, lineHeight: 20 }} >
        { darkTheme ? "Light" : "Dark" }
      </Text>
    </TouchableOpacity>
  );
}