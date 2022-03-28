import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';

import SearchItem from '../SearchItem';
import Button from '../Button';
export default function MultipleTranslations(props) {
  const {source, target, datas, onPress} = props;
  console.log('entrée dans le composant MultipleTranslations');
  return (
    <View style={styles.MultiResultContainer}>
      <Text style={styles.infoTextResult}>
        Cette définition comporte plusieurs traductions en {target}
      </Text>
      {/*Index de la FlatList - la propriété key du keyExtractor doit être une chaîne de caractères*/}
      <FlatList
        data={datas}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <SearchItem
            definition={item}
            source={source}
            target={target}
            onPress={onPress}
          />
        )}
      />
    </View>
  );
}
