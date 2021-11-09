import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Homescreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'steelblue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}

            />
        </Tab.Navigator>
    );
}