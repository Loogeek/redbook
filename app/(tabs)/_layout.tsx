import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="welcome"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

// import React from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StatusBar } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from "@react-navigation/stack";

// import Welcome from "@/constants/Welcome";
// // import Login from './src/modules/login/Login';
// // import MainTab from './src/modules/mainTab/MainTab';
// // import ArticleDetail from './src/modules/articleDetail/ArticleDetail';
// // import SearchGoods from './src/modules/searchGoods/SearchGoods';

// const Stack = createStackNavigator();

// function App(): JSX.Element {
//   return (
//     <SafeAreaProvider style={{ width: "100%", height: "100%" }}>
//       <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="Welcome"
//           screenOptions={{
//             cardStyle: { elevation: 1 },
//           }}
//         >
//           <Stack.Screen
//             name="Welcome"
//             component={Welcome}
//             options={{
//               headerShown: false,
//             }}
//           />
//           {/* <Stack.Screen
//             name="Login"
//             component={Login}
//             options={{
//               headerShown: false,
//               ...TransitionPresets.SlideFromRightIOS,
//             }}
//           />
//           <Stack.Screen
//             name="MainTab"
//             component={MainTab}
//             options={{
//               headerShown: false,
//               ...TransitionPresets.SlideFromRightIOS,
//             }}
//           />
//           <Stack.Screen
//             name="ArticleDetail"
//             component={ArticleDetail}
//             options={{
//               headerShown: false,
//               ...TransitionPresets.SlideFromRightIOS,
//             }}
//           />
//           <Stack.Screen
//             name="SearchGoods"
//             component={SearchGoods}
//             options={{
//               headerShown: false,
//               presentation: "transparentModal",
//             }}
//           /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// export default App;
