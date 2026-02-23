import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constant/Colors';

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      android_ripple={{ color: Colors.primary200 }}
    >
      <Ionicons name={icon} size={size} color={color ?? Colors.surface} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.8,
  },
});