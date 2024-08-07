import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../tin/tin';
import { RootStackParams } from '../navigator/StackNavigator';
interface Props extends StackScreenProps<RootStackParams,'pantalla3'>{};



export const Pantalla3 = ({ navigation }:Props) => { 
  return ( 
    <View> 
        <Text style={styles.title}>Patalla 3</Text> 
        <Button
        title='Regresar'
        onPress={()=>navigation.pop()}/> 
        <Button
        title='Ir home'
        onPress={()=>navigation.popToTop()}
        />
    </View> 
  ) 
}
