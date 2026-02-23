import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const initialRegion = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

export default function Map() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, []);

    if (!isReady) {
        return <View style={[styles.container, styles.placeholder]} />;
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={initialRegion}>
                <Marker coordinate={initialRegion} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
    },
    placeholder: {
        backgroundColor: '#e0e0e0',
    },
});
