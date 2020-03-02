import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons'

const App = () =>
    (
        <View style={styles.container}>
            <Image resizeMode="cover" style={styles.logo} source={require('../../assets/react-icon.png')} />
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </View>
    );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    logo: {
        width: 200,
        height: 200,
    }
});

export default App