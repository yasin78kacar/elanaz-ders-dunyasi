import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useGameification } from '../context/GameificationContext';

export const StatsDisplay = () => {
  const { points, level } = useGameification();
  const { width } = useWindowDimensions();

  const isLarge = width > 700;
  const progress = (points % 500) / 500 * 100;

  return (
    <View style={[styles.card, isLarge && styles.cardLarge]}>
      <View style={styles.row}>
        <View style={styles.stat}>
          <Text style={styles.label}>Level</Text>
          <Text style={styles.levelText}>{level}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.label}>Points</Text>
          <Text style={styles.pointsText}>{points}</Text>
        </View>
      </View>
      
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${progress}%` }
          ]} 
        />
      </View>
      <Text style={styles.progressText}>
        {points % 500} / 500 points to next level
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    padding: 20, 
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    margin: 10
  },
  cardLarge: {
    padding: 30,
    marginHorizontal: 40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  stat: {
    alignItems: 'center'
  },
  label: { 
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  levelText: { 
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50'
  },
  pointsText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3'
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 8
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50'
  },
  progressText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center'
  }
});
