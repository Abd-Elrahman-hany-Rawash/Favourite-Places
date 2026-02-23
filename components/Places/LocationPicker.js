import { View, Text, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import OutlineButton from '../ui/OutlineButton';
import { Colors } from '../../constant/Colors';
import { getCurrentPositionAsync ,useForegroundPermissions} from 'expo-location';
import { useNavigation } from '@react-navigation/native';


export default function LocationPicker() {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

 async function verifyPermissions() {
  if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  }
  if (locationPermissionInformation.status === PermissionStatus.DENIED) {
    Alert.alert('Permission denied', 'You need to grant permission to use this feature.');
    return false;
  }
  return true;
}



  function pickOnMapHandler() {
    const navigation = useNavigation();
    navigation.navigate('Map');
  }
  function getLocationHandler() {
    async function handleLocation() {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      const location = await getCurrentPositionAsync();
      console.log(location);
    }
    handleLocation();
    console.log('getLocationHandler');
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapPreview}>
        <Ionicons name="location-outline" size={48} color={Colors.primary200} />
        <Text style={styles.previewText}>No location chosen yet</Text>
        <Text style={styles.previewHint}>Pick on map or use your current location</Text>
      </View>
      <View style={styles.actions}>
        <OutlineButton icon="locate" onPress={getLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  mapPreview: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.primary50,
    borderWidth: 1,
    borderColor: Colors.primary200,
  },
  previewText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray700,
    marginTop: 8,
  },
  previewHint: {
    fontSize: 13,
    color: Colors.gray500,
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
});