import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../tin/tin';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Pantalla2screen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.globalmargin}>
      <Text style={styles.title}>Pantalla 2</Text>
      <Button
        title='Ir pagina 3'
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'pantalla3' }))}
      />
    </View>
  );
};

