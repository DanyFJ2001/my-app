import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { LateralMenu } from './src/navigator/LateralMenu';
import { LateralMenuCUstom } from './src/navigator/LateralMenuCUstom';


export const  App=()=> {
  return (
    <NavigationContainer>
      <LateralMenuCUstom/>
      </NavigationContainer>
  );
}
 export default App;

