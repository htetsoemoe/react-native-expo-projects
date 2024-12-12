import { Stack } from "expo-router"
import { StyleSheet, Text, View } from 'react-native'

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen 
                name="(home)"
                options={{
                    headerShown: false,
                    title: "Home",
                }}
            />
            <Stack.Screen 
                name="about"
                options={{
                    title: "About",
                }}
            />
        </Stack>
    )
}

const styles = StyleSheet.create({})