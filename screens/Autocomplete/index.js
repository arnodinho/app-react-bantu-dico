import React, {useState} from 'react';
import {
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ImagesUrl} from '../../config/ImagesUrl';
import styles from './styles';
import Search from '../../components/Search';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Touchable from 'react-native-platform-touchable';
export default function Autocomplete({navigation}) {
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 70,
  });

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <KeyboardAvoidingView
        enabled={false}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={offsetKeyboard}>

        <View style={styles.containerMain}>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
