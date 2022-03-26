import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  Text,
  FlatList,
} from 'react-native';
import {ImagesUrl} from '../../config/ImagesUrl';
import styles from './styles';
import Translation from '../../components/Translation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {searchTraduction, randomTranslation} from '../../apis';
import LoadingScreen from '../LoadingScreen';
import SearchItem from '../../components/SearchItem';
import Search from '../../components/Search';
export default function HomeScreen({route, navigation}) {
  const [source, setSource] = useState('french');
  const [target, setTarget] = useState('lingala');
  const [loading, setLoading] = useState(false);
  const [translations, setTranslations] = useState(
    randomTranslation('lingala'),
  );

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 70,
  });
  console.log('entrée dans le composant HomeScreen');
  console.log(route?.params);
  useEffect(() => {
    if (route.params) {
      console.log('on rentre dans le use Effect ' + route.params?.key);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    route.params?.definition,
    route.params?.source,
    route.params?.target,
    route.params?.key,
  ]); // N’exécute l’effet que si route.params a changé

  const handleTranslations = () => {
    console.log('longueur  ' + translations.length);
    if (translations) {
      // si une seule translation
      if (translations.length === 1) {
        return (
          <Translation
            data={translations[0]}
            source={source}
            target={target}
            navigation={navigation}
            onPress={() => {
              handleRandomTranslations();
            }}
          />
        );
      }
      if (translations.length > 1) {
        console.log('multiples resultats');
        return (
          <View style={styles.MultiResultContainer}>
            <Text style={styles.infoTextResult}>
              Cette définition comporte plusieurs traductions en  {source === 'sango' || source === 'lingala' ? 'français' : target}
            </Text>
            {/*Index de la FlatList - la propriété key du keyExtractor doit être une chaîne de caractères*/}
            <FlatList
              data={translations}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <SearchItem
                  source={source}
                  target={target}
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

  const handleRandomTranslations = () => {
    setTranslations(randomTranslation(target));
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
          <Search
            source={source}
            target={target}
            navigation={navigation}
            route={route}
          />
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
