import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from './navigation/NavigationTab';

//ignore warning logs
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
};

export default App;
