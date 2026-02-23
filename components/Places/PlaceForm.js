import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import ImagePicker from './ImagePicker';
import { Colors } from '../../constant/Colors';
import { useState } from 'react';
import LocationPicker from './LocationPicker';

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState('');

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={styles.form} contentContainerStyle={styles.formContent} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={enteredTitle}
          onChangeText={changeTitleHandler}
          placeholder="Name your favourite place"
          placeholderTextColor={Colors.gray500}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Photo</Text>
        <ImagePicker />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <LocationPicker />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  formContent: {
    padding: 24,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 28,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.gray700,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.gray700,
    marginBottom: 12,
  },
  input: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.primary200,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.gray900,
  },
});
