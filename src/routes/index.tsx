import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import ItemMaintenance from '../components/ItemMaintenance'
import { Colors } from '../helpers/constants'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primary
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
                    component={ItemMaintenance} 
                    options={{title: "Novo Item"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes
