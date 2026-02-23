import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { Colors } from '../../constant/Colors';
import { useState } from 'react';
import OutlineButton from '../ui/OutlineButton';
import {
    launchImageLibraryAsync,
    launchCameraAsync,
    requestCameraPermissionsAsync,
    requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';

const pickerOptions = {
    allowsEditing: true,
    aspect: [16, 9],
    quality: 0.5,
};

export default function ImagePicker() {
    const [pickedImage, setPickedImage] = useState(null);
    async function pickImageHandler() {
        const { status } = await requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permission needed',
                'Please allow access to your photo library to pick an image.'
            );
            return;
        }
        const result = await launchImageLibraryAsync(pickerOptions);
        if (!result.canceled) {
            console.log(result.assets[0].uri);
            setPickedImage(result.assets[0].uri);
        }
    }

    async function takePhotoHandler() {
        const { status } = await requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permission needed',
                'Please allow camera access to take a photo.'
            );
            return;
        }
        const result = await launchCameraAsync(pickerOptions);
        if (!result.canceled) {
            console.log(result.assets[0].uri);
            setPickedImage(result.assets[0].uri);
        }
    }

    function chooseImageHandler() {
        Alert.alert('Add image', 'Take a photo or choose from your library', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Take Photo', onPress: takePhotoHandler },
            { text: 'Choose from Library', onPress: pickImageHandler },
        ]);
    }


  return (
    <View style={styles.imageContainer}>
      {pickedImage ? (
        <Image source={{ uri: pickedImage }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No image chosen</Text>
        </View>
      )}
      <OutlineButton icon="camera" onPress={chooseImageHandler}>
        {pickedImage ? 'Change Photo' : 'Take Photo'}
      </OutlineButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: Colors.gray100,
  },
  placeholder: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: Colors.primary50,
    borderWidth: 1,
    borderColor: Colors.primary200,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 14,
    color: Colors.gray500,
  },
});         