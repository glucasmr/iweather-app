import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import Logo from './assets/Logo.svg';

import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito'; 

export default function App() {
  
  let [fontsLoaded, fontError] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  });

  const [text, onChangeText] = React.useState('');

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/Background.png')} resizeMode="cover" style={styles.image}>
      <Logo style={styles.logo} width={230} />
      <Text
      style={styles.text1}
      >
        Boas vindas ao <Text style={styles.highlight} >TypeWeather</Text>
      </Text>
      <Text
      style={styles.text}
      >
        Escolha um local para ver a previsão do tempo
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Buscar local'
        placeholderTextColor='#7F7F98'
        />
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#1E1E29',
    height: 56,
    width: 311,
    margin: 12,
    padding: 10,
    borderRadius: 8,
    color: '#FAFAFA', 
    fontFamily: 'Nunito_400Regular',

  },
  text: {
   color: '#BFBFD4',
   fontSize: 16,
   fontFamily: 'Nunito_400Regular',
  }
  ,
  text1: {
   color: '#FAFAFA',
   fontSize: 24,
   fontFamily: 'Nunito_700Bold',

  }
  ,
  highlight: {
   color: '#8FB2F5'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 48,
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
});
