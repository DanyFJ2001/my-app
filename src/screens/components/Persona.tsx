import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../tin/tin'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams,'persona'>{};

export const Persona = ({route}:Props) => {
    //console.log(route.params);
    //almacenar los parametros de naegacion
    const params =route.params;
    
  return (
    <View style={styles.globalmargin}>
        <Text style={styles.globalmargin}>{JSON.stringify(params,null,2)}</Text>
        
    </View>
  )
}
