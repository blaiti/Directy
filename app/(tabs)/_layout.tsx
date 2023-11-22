import { Tabs } from "expo-router";
import { SvgXml } from "react-native-svg";

import ICONS from "@icons";
import { COLORS } from "@styles";

function TabBarIcon(props: { name: string }) {
  return <SvgXml xml={props.name} width={24} height={24} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: COLORS.WHITE,
        tabBarInactiveBackgroundColor: COLORS.WHITE,
        tabBarStyle: {
          borderTopWidth: 0.3,
          borderTopColor: COLORS.GRAY_LIGHT,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={
                focused ? ICONS.BOTTOM_TABS.homeActive : ICONS.BOTTOM_TABS.home
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={
                focused ? ICONS.BOTTOM_TABS.mapActive : ICONS.BOTTOM_TABS.map
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
