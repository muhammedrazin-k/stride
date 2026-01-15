
import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Outfit_400Regular, Outfit_600SemiBold, Outfit_700Bold, Outfit_900Black } from '@expo-google-fonts/outfit';
import * as SplashScreen from 'expo-splash-screen';
import { LayoutDashboard, History, Lightbulb, MoreHorizontal } from 'lucide-react-native';

import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ResultScreen } from './src/screens/ResultScreen';
import { HistoryScreen } from './src/screens/HistoryScreen';
import { TipsScreen } from './src/screens/TipsScreen';
import { MoreScreen } from './src/screens/MoreScreen';
import { COLORS, FONTS } from './src/theme/theme';
import { Simulator } from './src/components/Simulator';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: '#94A3B8',
      tabBarStyle: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        height: Platform.OS === 'ios' ? 88 : 65,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10,
        paddingTop: 10,
        elevation: 0,
        shadowOpacity: 0,
      },
      tabBarLabelStyle: {
        fontFamily: FONTS.bold,
        fontSize: 12,
      },
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'Dashboard') return <LayoutDashboard size={size} color={color} />;
        if (route.name === 'History') return <History size={size} color={color} />;
        if (route.name['includes']('Tips')) return <Lightbulb size={size} color={color} />;
        if (route.name === 'More') return <MoreHorizontal size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Dashboard" component={HomeScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
    <Tab.Screen name="Tips" component={TipsScreen} />
    <Tab.Screen name="More" component={MoreScreen} />
  </Tab.Navigator>
);

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Simulator>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: COLORS.background }
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </Simulator>
  );
}
