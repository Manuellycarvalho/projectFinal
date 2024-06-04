import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import SignIn from './pages/signIn/index';
import Home from './pages/home/index';
import Map from './pages/Map/index';
import Salas from './pages/salas/index'; 

const Pilha = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    paddingBottom: 1,
                    paddingTop: 1,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#f0f',
                tabBarInactiveTintColor: '#555'
            }}

        >
            <Tab.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown:false,
                    tabBarStyle: { display: 'none' },
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
             <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="map" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Salas"
                    component={Salas}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}
