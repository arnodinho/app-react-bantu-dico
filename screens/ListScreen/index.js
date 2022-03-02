/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import ShareButton from '../../components/ShareButton';
import Button from '../../components/Button';
import Lingala from '../../components/Lingala';
import Sango from '../../components/Sango';
export default function ListScreen() {
  const [language, setLanguage] = useState('lingala');
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <View style={styles.resulButtons}>
        <View style={{flex: 1, alignItems: 'flex-end', marginRight: 5}}>
          <Button
            name="Sango"
            onPress={() => {
              setLanguage('sango');
            }}
          />
        </View>
        <View style={{flex: 1, alignItems: 'flex-start', marginLeft: 5}}>
          <Button
            name="Lingala"
            onPress={() => {
              setLanguage('lingala');
            }}
          />
        </View>
      </View>

      <View style={{flex: 12}}>
        <ScrollView style={{marginTop: 15}}>
          {language === 'lingala' ? <Lingala /> : <Sango />}
        </ScrollView>
        <ShareButton name={'share-alt'} size={25} color={'#FFFFFF'} />
      </View>
    </SafeAreaView>
  );
}
