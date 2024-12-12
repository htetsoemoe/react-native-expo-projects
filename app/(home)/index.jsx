import { StyleSheet, Text, View } from 'react-native'
import { router } from "expo-router"
import React from 'react'

export default function index() {
    return (
        <View style={styles.banner}>
            <Text
                style={styles.link}
                onPress={() => {
                    router.navigate("/about")
                }}
            >
                About Us
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        borderRadius: 10,
        backgroundColor: "#ddd",
        margin: 20,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        color: "#58F",
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
})