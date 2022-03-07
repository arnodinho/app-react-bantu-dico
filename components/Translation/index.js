import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {Parameter} from '../../config/Parameter';
import {ImagesUrl} from '../../config/ImagesUrl';
import Button from '../Button';
export default function Translation(props) {
  const {size, name, style, color} = props;

  return (
    <View style={styles.translationContainer}>
      <View style={styles.resultContainer}>
        <View style={styles.resulLangage}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.tabBarInfoText}>Français</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.tabBarInfoText}>Sango</Text>
          </View>
        </View>

        <View style={styles.resultDefinition}>
          <View
            style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.textDefinition}>Sango</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
           <Image source={ImagesUrl.transfert} />
          </View>
          <View
            style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.textDefinition}>Sango</Text>
          </View>
        </View>

        <View style={styles.resultExample}>
          <Text style={styles.textExemple}>ssssdsds sdsd</Text>
          <Text style={styles.textExemple}>sdsd dsff dfgsfsdf</Text>
        </View>
      </View>
      <Button
        name="Aléatoire"
        style={styles.button}
        styleGradient={styles.gradient}
      />
    </View>
  );
}
