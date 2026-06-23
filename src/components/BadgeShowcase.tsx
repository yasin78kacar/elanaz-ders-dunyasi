import React, { memo, useCallback, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import { useGameification } from '../context/GameificationContext';

const BADGE_ITEM_HEIGHT = 100;

export const BadgeShowcase = memo(function BadgeShowcase() {
  const { badges } = useGameification();
  const { width } = useWindowDimensions();

  const { numColumns, badgeSize } = useMemo(() => {
    const isLarge = width > 700;
    const cols = isLarge ? 4 : 3;
    return {
      numColumns: cols,
      badgeSize: (width - 40) / cols - 10,
    };
  }, [width]);

  const isLarge = width > 700;

  const keyExtractor = useCallback((item: (typeof badges)[number]) => item.id, []);

  const getItemLayout = useCallback(
    (_: unknown, index: number) => ({
      length: BADGE_ITEM_HEIGHT,
      offset: BADGE_ITEM_HEIGHT * Math.floor(index / numColumns),
      index,
    }),
    [numColumns],
  );

  const renderItem = useCallback(
    ({ item }: { item: (typeof badges)[number] }) => (
      <View
        style={[
          styles.badge,
          {
            width: badgeSize,
            height: badgeSize,
            opacity: item.earned ? 1 : 0.3,
          },
        ]}
      >
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={styles.badgeName}>{item.name}</Text>
      </View>
    ),
    [badgeSize],
  );

  return (
    <View style={[styles.container, isLarge && styles.containerLarge]}>
      <Text style={styles.title}>Badges</Text>
      <FlatList
        data={badges}
        numColumns={numColumns}
        scrollEnabled={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        removeClippedSubviews
        maxToRenderPerBatch={12}
        windowSize={5}
        initialNumToRender={12}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 10,
  },
  containerLarge: {
    padding: 30,
    marginHorizontal: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  listContent: {
    justifyContent: 'space-around',
  },
  badge: {
    margin: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  icon: {
    fontSize: 24,
    marginBottom: 5,
  },
  badgeName: {
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
    fontWeight: '600',
  },
});
