import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../tin/tin';
import { RootStackParams } from '../navigator/StackNavigator';
interface Persona{
  id:number;
  nombre:string;
  email:string;
}

interface Props extends StackScreenProps<RootStackParams,'pantalla1'>{};
export const Pantalla1screen = ({navigation}:Props) => {

  const persona1:Persona={
    id:1,
    nombre:'dany',
    email:'danyjoel345@gmail.com'
  }
  const persona2:Persona={
    id:2,
    nombre:'jhoel',
    email:'danyjoel345@gmail.com'
  }
  return (
    <View style={styles.globalmargin}>
        <Text style={styles.title}>Pantalla 1</Text>
        <Button
         title='ir pagina 2'
         onPress={()=> navigation.navigate('pantalla2')}>


         </Button>
         {/*<Button
         title='ir persona'
         onPress={()=> navigation.navigate('persona')}>
         </Button>*/}
          <View style={styles.content}>
         <TouchableOpacity onPress={()=> navigation.navigate('persona',persona1)}
          style={{...styles.buttonparams
            ,backgroundColor:'red'
          }}>
         
          <Text>dany</Text>
         </TouchableOpacity >
         <TouchableOpacity onPress={()=> navigation.navigate('persona',persona2)}
          style={styles.buttonparams}>
          
          <Text>Jhoel</Text>
         </TouchableOpacity>
         </View>
        
          
    </View>
  )
}
