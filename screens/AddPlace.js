import { View, StyleSheet } from 'react-native';
import PlaceForm from '../components/Places/PlaceForm';
import { Colors } from '../constant/Colors';

export default function AddPlace() {
  return (
    <View style={styles.container}>
      <PlaceForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});