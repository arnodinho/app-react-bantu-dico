import React, {useState} from 'react';
import {View, Image, Platform, KeyboardAvoidingView} from 'react-native';
import {ImagesUrl} from '../../config/ImagesUrl';
import styles from './styles';
import Search from '../../components/Search';
import Translation from '../../components/Translation';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function HomeScreen({navigation}) {
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 70,
  });

  return (
    <SafeAreaView style={styles.containerHome} edges={['right', 'left']}>
      <KeyboardAvoidingView
        enabled={false}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={offsetKeyboard}
        style={styles.container}>
        <View style={styles.containerHeaderLogo}>
          <Image style={{height: 92}} source={ImagesUrl.header} />
        </View>
        <View style={styles.containerMain}>
          <Search navigation={navigation} />
          <Translation />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
