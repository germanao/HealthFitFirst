import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import NewItem from '../components/NewItem'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#1E3BA1'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{headerShown: false}}/>
                <Stack.Screen 
                    name="NewItem" 
                    component={NewItem} 
                    options={{title: "Novo Item"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes
