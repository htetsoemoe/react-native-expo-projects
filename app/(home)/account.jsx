import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function account() {
    return (
        <View style={styles.account}>
            <Text style={{fontWeight: "bold"}}>Account</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    account: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})