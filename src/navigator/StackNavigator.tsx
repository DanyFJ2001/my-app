import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1screen } from '../screens/Pantalla1screen';
import { Pantalla2screen } from '../screens/Pantalla2screen';
import { Pantalla3 } from '../screens/Pantalla3';
import { Persona } from '../screens/components/Persona';
//definir rutas y parametros de navegacion
export type RootStackParams ={
  pantalla1 :undefined,
  pantalla2 :undefined,
  pantalla3 :undefined,
  persona:{id:number, nombre: string ,email:string }


}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator=()=> {
    
  return (
    <Stack.Navigator  
    //initialRouteName=''
    screenOptions={{
      //headerShown: false,ocultar cabecera
      cardStyle:{
        backgroundColor:'white'
      }
    }}>
      
      <Stack.Screen name="pantalla1"options={{title:'home'}} component={Pantalla1screen} />
      <Stack.Screen name="pantalla2" component={Pantalla2screen} />
      <Stack.Screen name="pantalla3" component={Pantalla3} />
      <Stack.Screen name="persona" component={Persona} />
    
    </Stack.Navigator>
  );
}