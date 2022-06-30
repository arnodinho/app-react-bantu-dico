/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  Alert,
  Keyboard,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import {BaseStyle} from '../../config/BaseStyle';
import Button from '../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import {createTranslation} from '../../apis';

export default function AddScreen() {
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 70,
  });

  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState('lingala');
  const [source, setSource] = useState('');
  const [translation, setTranslation] = useState('');

  const onSubmit = () => {
    if (target == '' || source == '') {
      Alert.alert(
        'Erreur de saisie!',
        'Veuillez renseigner tous les champs',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
    } else {
      setLoading(true);
      createTranslation(target, source, translation).then(data => {
        console.log(data);
        setLoading(false);
        setSource('');
        setTranslation('');
        Alert.alert(
          'Merci pour votre contribution!',
          "Votre proposition sera traitée par nos équipes. Une fois validée, elle sera disponible sur l'application.",
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: true},
        );
        // Hide that keyboard!
        Keyboard.dismiss();
      });
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
            paddingHorizontal: 5,
          }}>
          <View style={styles.main}>
            <Text style={styles.tabBarInfoTitle}>
              Proposez une nouvelle traduction
            </Text>
            <Text style={styles.infoText}>
              Vous pouvez aussi apporter votre contribution en proposant une
              nouvelle traduction.
            </Text>
            <Text style={styles.infoText2}>
              Une fois validée par nos équipes elle sera disponible sur
              l'application.
            </Text>
          </View>

          <View style={styles.containerTradution}>
            <View style={styles.traduction}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.infoTraduction}>Français :</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <TextInput
                  style={styles.textinput}
                  value={source}
                  placeholder="Taper votre mot en français"
                  onChangeText={text => setSource(text)}
                />
                {/*Quand vous créez une fonction fléchée, celle-ci est automatiquement bindée avec le contexte qui l'englobe*/}
              </View>
            </View>

            <View style={styles.traduction}>
              <View>
                <RNPickerSelect
                  onValueChange={itemValue => setTarget(itemValue)}
                  placeholder={{}}
                  items={[
                    {label: 'Lingala', value: 'lingala'},
                    {label: 'Sango', value: 'sango'},
                  ]}
                  Icon={() => {
                    return (
                      <Icon
                        name="caret-down"
                        size={25}
                        color={'#061646'}
                        style={{paddingVertical: 12}}
                      />
                    );
                  }}
                  style={pickerSelectStyles}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <TextInput
                  style={styles.textinput}
                  value={translation}
                  placeholder="Traduction"
                  onChangeText={text => setTranslation(text)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{marginBottom: 60, paddingHorizontal: 2}}>
          <Button
            loading={loading}
            style={styles.button}
            name="Ajouter"
            onPress={() => {
              onSubmit();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: 'gray',
    fontWeight: 'bold',
    borderRadius: 4,
    color: '#061646',
    paddingRight: 39, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: '#061646',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
