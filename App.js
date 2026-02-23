
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Button } from 'react-native';
import { Colors } from './constant/Colors';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/ui/IconButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Map from './screens/Map';
const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.surface,
          headerTitleStyle: { fontWeight: '600', fontSize: 18 },
        }}
        >
          <Stack.Screen name="AllPlaces" component={AllPlaces}
         options={({ navigation }) => ({
          title: 'All Places',
          headerRight: () =>
          <IconButton icon="add" size={24} color="white" onPress={() => navigation.navigate('AddPlace')} />
         })}
             />
          <Stack.Screen name="AddPlace" component={AddPlace} options={{ title: 'Add a new Place' }} />
          <Stack.Screen name="Map" component={Map} options={{ title: 'Map' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});


