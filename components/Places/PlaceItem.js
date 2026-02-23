import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../constant/Colors';

export default function PlaceItem({ place, onSelect }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.placeItem, pressed && styles.pressed]}
      onPress={onSelect}
      android_ripple={{ color: Colors.primary100 }}
    >
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{place.title}</Text>
        <Text style={styles.address} numberOfLines={2}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  placeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: Colors.gray100,
  },
  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.gray900,
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: Colors.gray500,
  },
});