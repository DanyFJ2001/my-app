import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Pantalla1screen } from '../screens/Pantalla1screen';
import { Stettings } from '../screens/components/Stettings';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../tin/tin';

const Drawer = createDrawerNavigator();

export const LateralMenuCUstom=()=>{
  return (
    <Drawer.Navigator
    drawerContent={(props)=><MenuInternal{...props}/>}>
      <Drawer.Screen name="Stackj" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="settings"options={{title:'Configuracion'}} component={Stettings} />
    </Drawer.Navigator>
  );
}
const MenuInternal = ({navigation}:DrawerContentComponentProps)=>{


  
  return(
    <DrawerContentScrollView>
<View style={styles.conentmenucustom}>
  <Image source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/020/329/376/small/cat-head-kitten-symbol-gaming-cat-logo-elegant-element-for-brand-abstract-icon-symbols-vector.jpg'} 
  }style={styles.avatar}
  />
</View>
<View style={styles.contentopcion}>
  <TouchableOpacity
  onPress={()=>navigation.navigate('Stackj')}>
    <Text style={styles.text}>Home</Text>
  </TouchableOpacity>
  <TouchableOpacity
   onPress={()=>navigation.navigate('settings')}>
    <Text style={styles.text}>Configuracion</Text>
  </TouchableOpacity>
</View>
    </DrawerContentScrollView>
 
  )
}