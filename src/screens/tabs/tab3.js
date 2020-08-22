import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TabThree extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tab Three</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default TabThree;