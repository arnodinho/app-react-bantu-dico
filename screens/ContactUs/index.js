/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import styles from './styles';
import {BaseStyle} from '../../config/BaseStyle';
import Button from '../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ContactUs({navigation}) {
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 70,
  });

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState({
    firstname: true,
    lastname: true,
    name: true,
    email: true,
    message: true,
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if (lastname == '' || firstname == '' || message == '') {
      setSuccess({
        ...success,
        lastname: lastname != '' ? true : false,
        firstname: firstname != '' ? true : false,
        message: message != '' ? true : false,
      });
    } else {
      fetch(
        'https://sortir-a-bangui-default-rtdb.europe-west1.firebasedatabase.app/contact.json',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lastname: lastname,
            firstname: firstname,
            message: message,
          }),
        },
      ).then(response => response.json());

      setLoading(true);
      setTimeout(() => {
        setLoading(true);
        navigation.goBack();
      }, 500);
    }
  };

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'left']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={offsetKeyboard}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}>
          <View style={{height: 50}}>
            <Text style={styles.tabBarInfoText}>
              Vous avez des remarques, suggestions à nous faire ? Ecrivez-nous !
            </Text>
          </View>
          <TextInput
            onChangeText={text => setLastname(text)}
            placeholder="Nom"
            success={success.lastname}
            value={lastname}
            style={styles.textinput}
          />
          <TextInput
            onChangeText={text => setFirstname(text)}
            placeholder="Prénom"
            success={success.firstname}
            value={firstname}
            style={styles.textinput}
          />
          <TextInput
            style={styles.textinputMessage}
            onChangeText={text => setMessage(text)}
            textAlignVertical="top"
            multiline={true}
            placeholder="Message"
            success={success.message}
            value={message}
          />
        </ScrollView>
        <View style={{paddingVertical: 15, paddingHorizontal: 20}}>
          <Button
            loading={loading}
            style={styles.button}
            name="Envoyer"
            onPress={() => {
              onSubmit();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
