import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import juegoScreen from '../screens/juegoScreen';
import ScoreScreen from '../screens/ScoreScreen';  
import GameOverScreen from '../screens/GameOverScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';

const Stack = createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Registro" component={RegistroScreen}/>
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();
function MyDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Welcome" component={juegoScreen}/>
            <Drawer.Screen name="GameOver" component={GameOverScreen}/>
            <Drawer.Screen name="Score" component={ScoreScreen}/>
        </Drawer.Navigator>
    )
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    )
}