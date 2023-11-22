import React, { useEffect } from "react";
import { LogBox, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StoreProvider } from "@store";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  LogBox.ignoreAllLogs();

  const [fontsLoaded] = useFonts({
    "Syne-Regular": require("@fonts/Syne-Regular.ttf"),
    "Syne-Medium": require("@fonts/Syne-Medium.ttf"),
    "Syne-SemiBold": require("@fonts/Syne-SemiBold.ttf"),
    "Syne-Bold": require("@fonts/Syne-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    StatusBar.setBarStyle("dark-content");

    return () => {};
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StoreProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          headerTitle: "",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="list" />
        <Stack.Screen name="business" />
      </Stack>
    </StoreProvider>
  );
};

export default RootLayout;
