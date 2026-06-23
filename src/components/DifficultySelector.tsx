import React, { useState } from 'react';
import { View, TouchableOpacity, Text, useWindowDimensions, StyleSheet } from 'react-native';

export const DifficultySelector = ({ onSelect }: { onSelect: (d: string) => void }) => {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState('Medium');
  
  const isLarge = width > 700;
  const isMobile = width < 500;

  const handleSelect = (level: string) => {
    setSelected(level);
    onSelect(level);
  };

  return (
    <View style={[styles.container, isLarge && styles.largeContainer]}>
      {['Easy', 'Medium', 'Hard'].map((level) => (
        <TouchableOpacity 
          key={level} 
          onPress={() => handleSelect(level)} 
          style={[
            styles.button,
            selected === level && styles.buttonActive,
            isMobile && styles.buttonSmall
          ]}
        >
          <Text style={[styles.buttonText, selected === level && styles.buttonTextActive]}>
            {level}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 15,
    marginVertical: 10
  },
  largeContainer: { 
    width: '70%', 
    alignSelf: 'center',
    paddingVertical: 20
  },
  button: { 
    padding: 15, 
    backgroundColor: '#f0f0f0', 
    borderRadius: 8,
    minWidth: 70,
    alignItems: 'center'
  },
  buttonSmall: {
    padding: 12,
    minWidth: 60
  },
  buttonActive: { 
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333'
  },
  buttonTextActive: {
    color: '#fff'
  }
});
