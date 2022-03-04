import React, {useState} from 'react';
import {
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchAutocomplete from '../../components/SearchAutocomplete';
import ListItem from '../../components/ListItem';
import Loupe from '../../components/Loupe';
import {search} from '../../apis';
import {Picker} from '@react-native-picker/picker';
import {ImagesUrl} from '../../config/ImagesUrl';
import LinearGradient from 'react-native-linear-gradient';
export default function Autocomplete({navigation}) {
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 70,
  });
  const [target, setTarget] = useState('lingala');
  const [source, setSource] = useState('french');
  const [showResult, setShowResult] = useState(false);
  const [listAutocomplete, setListAutocomplete] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {};
  /**
   * render content
   *
   */
  const renderContent = () => {
    if (showResult) {
      return (
        <View style={styles.resultModuleContainer}>
          <FlatList
            data={listAutocomplete}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <ListItem definition={item} onPress={() => console.log({item})} />
            )}
          />
        </View>
      );
    }
    return <Loupe />;
  };
  return (
    <SafeAreaView style={styles.wrapperContainer} edges={['right', 'left']}>
      <KeyboardAvoidingView
        enabled={false}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={offsetKeyboard}
        style={styles.mainContainer}>
        <View style={styles.searchModuleContainer}>
          <View style={styles.containerSearch}>
            {/* onSubmitEditing : validation text par le clavier*/}

            <View style={{flex: 4}}>
              <TextInput
                style={styles.textinput}
                placeholder="Barre de recherche"
                onChangeText={text => this._searchTextInputChanged(text)}
                autoFocus={true}
                onSubmitEditing={() => {
                  onSubmit();
                }}
              />
              <View style={styles.searchSelect}>
                <View style={styles.searchItem}>
                  <Picker
                    selectedValue={source}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                      setSource(itemValue)
                    }>
                    <Picker.Item label="Français" value="french" />
                    <Picker.Item label="Sango" value="sango" />
                    <Picker.Item label="Lingala" value="lingala" />
                  </Picker>
                </View>
                <View style={styles.searchArrow}>
                  <View>
                    <Image source={ImagesUrl.arrow} />
                  </View>
                </View>
                <View style={styles.searchItem}>
                  <Picker
                    selectedValue={target}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                      setTarget(itemValue)
                    }>
                    <Picker.Item label="Français" value="french" />
                    <Picker.Item label="Sango" value="sango" />
                    <Picker.Item label="Lingala" value="lingala" />
                  </Picker>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                onSubmit();
              }}>
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.gradient}>
                <Text style={styles.buttonText}>Chercher</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 6}}>{renderContent()}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
