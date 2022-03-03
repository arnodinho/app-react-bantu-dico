import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {ImagesUrl} from '../../config/ImagesUrl';
import styles from './styles';
import Search from '../../components/Search';
import Translation from '../../components/Translation';

export default function ListScreen() {
  const [language, setLanguage] = useState('lingala');
  return (
    <View style={styles.containerHome}>
      <View style={styles.containerHeaderLogo}>
        <Image style={{height: 92}} source={ImagesUrl.header} />
      </View>
      <View style={styles.containerMain}>
        <Search />
        <Translation />
      </View>
    </View>
  );
}
