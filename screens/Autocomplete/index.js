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
  Keyboard,
} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListItem from '../../components/ListItem';
import Loupe from '../../components/Loupe';
import WifiOff from '../../components/WifiOff';
import {search, randomId} from '../../apis';
import {Picker} from '@react-native-picker/picker';
import {ImagesUrl} from '../../config/ImagesUrl';
import LinearGradient from 'react-native-linear-gradient';
import LoadingScreen from '../LoadingScreen';
import {useNetInfo} from '@react-native-community/netinfo';
export default function Autocomplete({navigation, route}) {
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 70,
  });
  const netInfo = useNetInfo();
  const [source, setSource] = useState(route.params.source);
  const [target, setTarget] = useState(route.params.target);
  const [definition, setDefinition] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [listAutocomplete, setListAutocomplete] = useState('');
  const [loading, setLoading] = useState(false);

  const getNetworkInfo = () => {
    return netInfo.isConnected.toString();
  };

  const onSubmit = () => {
    if (definition == '' || !netInfo.isConnected) {
      console.log('empty definition or wifi off: nothing to do ');
    } else {
      setLoading(true);
      navigation.navigate('Home', {
        source: source,
        target: target,
        definition: definition,
        key: randomId(),
      });
    }
  };
  const autocomplete = text => {
    setDefinition(text);
    if (text.length > 2 && netInfo.isConnected) {
      setLoading(true);
      search(text, source).then(data => {
        setListAutocomplete(data);
        setLoading(false);
        setShowResult(true);
      });
    }
  };

  /**
   * render content
   *
   */
  const renderContent = () => {
    if (!netInfo.isConnected) {
      return <WifiOff />;
    }

    if (loading) {
      return (
        <View style={styles.resultModuleContainer}>
          <LoadingScreen />
        </View>
      );
    } else if (showResult && listAutocomplete?.length > 0) {
      console.log('nombre de results ' + listAutocomplete.length);
      console.log('resultats autocomplete disponible');
      return (
        <View style={styles.resultModuleContainer}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <FlatList
              data={listAutocomplete}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <ListItem
                  definition={item}
                  onPress={() =>
                    navigation.navigate('Home', {
                      id: item.id,
                      source: source,
                      target: target,
                      definition: item.word,
                    })
                  }
                />
              )}
            />
          )}
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
                onChangeText={text => autocomplete(text)}
                autoFocus={true}
                onSubmitEditing={() => onSubmit()}
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
                    <Picker.Item label="Lingala" value="lingala" />
                    <Picker.Item label="Sango" value="sango" />
                    <Picker.Item label="Français" value="french" />
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
