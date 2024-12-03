import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="/" options={{ title: "search" }} />
            <Stack.Screen name="image" options={{ title: "image" }} />
        </Stack>
    );
}
