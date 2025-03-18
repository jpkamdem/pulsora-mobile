import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="articles" options={{ headerShown: false }}/>
      <Stack.Screen name="equipes" options={{ headerShown: false }}/>
      <Stack.Screen name="saison" options={{ headerShown: false }}/>
    </Stack>
  );
}
