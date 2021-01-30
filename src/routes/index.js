import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import {SplashScreen,HomeScreen} from '../screens';

import { theme } from '../utils/theme';


function Private({auth, apps}) {
  const SplashStack = createStackNavigator();
  const AuthStack = createStackNavigator();
  const Stack = createStackNavigator();


  if (apps.isFirst) {
    return (
      <NavigationContainer>
        <SplashStack.Navigator
          initialRouteName="SplashScreen"
          headerMode="none">
          <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
        </SplashStack.Navigator>
      </NavigationContainer>
    );
  }

  // if (!auth.token) {
  //   return (
  //     <NavigationContainer>
  //       <AuthStack.Navigator
  //         screenOptions={TransitionPresets.ScaleFromCenterAndroid}
  //         initialRouteName="SplashScreen"
  //         headerMode="none">
  //         <AuthStack.Screen name="Login" component={LoginScreen} />
  //       </AuthStack.Navigator>
  //     </NavigationContainer>
  //   );
  // }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={TransitionPresets.SlideFromRightIOS}
        initialRouteName="Home"
        >
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              headerShown: false,
              title: "Home",
              headerStyle: {
                  backgroundColor: theme.colors.white,
                  elevation: 0, // remove shadow on Android
                  shadowOpacity: 0 // remove shadow on iOS
              },
              headerTintColor: theme.colors.primary
          }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  apps: state.apps,
});

export default connect(mapStateToProps)(Private);
