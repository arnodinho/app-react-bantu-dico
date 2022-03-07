import React, {useState} from 'react';
import {
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ImagesUrl} from '../../config/ImagesUrl';
import styles from './styles';
import Search from '../../components/Search';
import Translation from '../../components/Translation';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function HomeScreen({route, navigation}) {
  const [loading, setLoading] = useState(false);
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
        style={styles.containerKeyboard}>
        <View style={styles.containerHeaderLogo}>
          <Image style={{height: 92}} source={ImagesUrl.header} />
        </View>
        <View style={styles.containerMain}>
          <Search navigation={navigation} params={route.params}/>
          <Translation />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
