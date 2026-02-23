import { View, StyleSheet } from 'react-native';
import PlaceList from '../components/Places/PlaceList';
import { Colors } from '../constant/Colors';

export default function AllPlaces() {
  return (
    <View style={styles.container}>
      <PlaceList places={[]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});