import React from 'react';
import { View, Text, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import { useGameification } from '../context/GameificationContext';

export const BadgeShowcase = () => {
  const { badges } = useGameification();
  const { width } = useWindowDimensions();

  const isLarge = width > 700;
  const numColumns = isLarge ? 4 : 3;
  const badgeSize = (width - 40) / numColumns - 10;

  return (
    <View style={[styles.container, isLarge && styles.containerLarge]}>
      <Text style={styles.title}>Badges</Text>
      <FlatList
        data={badges}
        numColumns={numColumns}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View 
            style={[
              styles.badge, 
              { 
                width: badgeSize, 
                height: badgeSize,
                opacity: item.earned ? 1 : 0.3 
              }
            ]}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.badgeName}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 10
  },
  containerLarge: {
    padding: 30,
    marginHorizontal: 40
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333'
  },
  listContent: {
    justifyContent: 'space-around'
  },
  badge: {
    margin: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  icon: {
    fontSize: 24,
    marginBottom: 5
  },
  badgeName: {
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
    fontWeight: '600'
  }
});
