import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constant/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function OutlineButton({ icon, children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
      android_ripple={{ color: Colors.primary100 }}
    >
      <Ionicons name={icon} size={20} color={Colors.primary500} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.primary500,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.8,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: Colors.primary500,
    fontSize: 15,
    fontWeight: '600',
  },
});