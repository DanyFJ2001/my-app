import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Pantalla1screen } from '../screens/Pantalla1screen';
import { Stettings } from '../screens/components/Stettings';

const Drawer = createDrawerNavigator();

export const LateralMenu=()=>{
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen name="Stackj" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="settings"options={{title:'Configuracion'}} component={Stettings} />
    </Drawer.Navigator>
  );
}