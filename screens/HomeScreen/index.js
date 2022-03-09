import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import {ImagesUrl} from '../../config/ImagesUrl';
import styles from './styles';
import Translation from '../../components/Translation';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {searchTraduction} from '../../apis';
import LoadingScreen from '../LoadingScreen';
import SearchItem from '../../components/SearchItem';
export default function HomeScreen({route, navigation}) {
  const [loading, setLoading] = useState(false);
  const [translations, setTranslations] = useState('');
  const [source, setSource] = useState('french');
  const [target, setTarget] = useState('lingala');
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 70,
  });
  console.log('entrée dans le composant HomeScreen');
  useEffect(() => {
    if (route.params) {
      setLoading(true);
      setSource(route.params.source);
      setTarget(route.params.target);
      searchTraduction(
        route.params.definition,
        route.params.source,
        route.params.target,
      ).then(data => {
        setTranslations(data);
        setLoading(false);
        //console.log(data);
      });
    }
  }, [route.params?.definition, route.params?.source, route.params?.target]);

  const handleTranslations = () => {
    if (translations) {
      // si une seule translation
      if (translations.length === 1) {
        return (
          <Translation
            data={translations[0]}
            source={route.params.source}
            target={route.params.target}
            navigation={navigation}
          />
        );
      }
      if (translations.length > 1) {
        console.log('multiples resultats');
        return (
          <View style={styles.MultiResultContainer}>
            <Text style={styles.infoTextResult}>
              Cette définition comporte plusieurs traductions en {target}
            </Text>
            {/*Index de la FlatList - la propriété key du keyExtractor doit être une chaîne de caractères*/}
            <FlatList
              data={translations}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <SearchItem
                  definition={item}
                  onPress={() => {
                    setTranslations([item]);
                  }}
                />
              )}
            />
          </View>
        );
      }
    }
  };

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
          <View style={styles.searchModuleContainer}>
            <View style={styles.containerTitle}>
              <Text style={styles.infoText}>Le Dictionnaire pratique</Text>
              <Text style={styles.infoTitle}>Français - Lingala - Sango</Text>
            </View>
            <TouchableOpacity
              style={styles.containerSearch}
              onPress={() => {
                console.log(
                  navigation.navigate('Autocomplete', {
                    source: source,
                    target: target,
                  }),
                );
              }}>
              {/* onSubmitEditing : validation text par le clavier*/}

              <View style={{flex: 4}}>
                <Text
                  style={[
                    styles.textinput,
                    route.params ? styles.textinputSetted : null,
                  ]}>
                  {route.params
                    ? route.params.definition
                    : 'Barre de recherche'}
                </Text>
                <View style={styles.searchSelect}>
                  <View style={styles.searchItem}>
                    <Text style={styles.translationText}>
                      {source === 'french' ? 'Français' : source}
                    </Text>
                    <Icon name="caret-down" size={25} />
                  </View>
                  <View style={styles.searchArrow}>
                    <View>
                      <Image source={ImagesUrl.arrow} />
                    </View>
                  </View>
                  <View style={styles.searchItem}>
                    <Text style={styles.translationText}>
                      {target === 'french' ? 'Français' : target}
                    </Text>
                    <Icon name="caret-down" size={25} />
                  </View>
                </View>
              </View>
              <View>
                <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.gradient}>
                  <Text style={styles.buttonText}>Chercher</Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>
          </View>
          {loading ? (
            <LoadingScreen style={styles.loadingScreenHome} />
          ) : (
            handleTranslations()
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
