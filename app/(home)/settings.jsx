import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function settings() {
    return (
        <View style={styles.settings}>
            <Text style={{ fontWeight: "bold" }}>settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    settings: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})