import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constant/Colors';

export default function PlaceList({ places }) {
  if (places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Ionicons name="location-outline" size={64} color={Colors.primary200} style={styles.fallbackIcon} />
        <Text style={styles.fallbackTitle}>No places yet</Text>
        <Text style={styles.fallbackText}>Tap + to add your first favourite place</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={places}
      renderItem={({ item }) => <PlaceItem place={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  fallbackIcon: {
    marginBottom: 16,
  },
  fallbackTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.gray700,
    marginBottom: 8,
    textAlign: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.gray500,
    textAlign: 'center',
  },
});