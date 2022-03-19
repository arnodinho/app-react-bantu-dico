import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImagesUrl} from '../../config/ImagesUrl';
import Button from '../Button';
export default function Translation(props) {
  const {source, target, data, navigation, onPress} = props;

  const renderTranstion = () => {
    return (
      <View style={styles.translationContainer}>
        <View style={styles.resultContainer}>
          <View style={styles.resulLangage}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.tabBarInfoText}>
                {source === 'french' ? 'Français' : source}
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.tabBarInfoText}>{target}</Text>
            </View>
          </View>

          <View style={styles.resultDefinition}>
            <View
              style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.textDefinition}>{data.source.word}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Image source={ImagesUrl.transfert} />
            </View>
            <View
              style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.textDefinition}>{data.target.word}</Text>
            </View>
          </View>

          <View style={styles.resultExample}>
            <Text style={styles.textExemple}>{data.description_source}</Text>
            <Text style={styles.textExemple}>{data.description_target}</Text>
          </View>
        </View>
        <Button
          name="Aléatoire"
          style={styles.button}
          styleGradient={styles.gradient}
          onPress={onPress}
        />
      </View>
    );
  };
  const renderTranstionNotFound = () => {
    return (
      <View style={styles.translationContainer}>
        <View style={styles.resultContainer}>
          <View style={styles.frown}>
            <View style={{justifyContent: 'center', marginBottom: 15}}>
              <Text style={styles.tabBarInfoText}>Mot non Trouvé</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Icon name="frown-o" size={100} color="#214c98" />
            </View>
            <View style={{justifyContent: 'center', marginBottom: 10}}>
              <Text style={[styles.tabBarInfoText, {fontStyle: 'italic'}]}>
                Vous connaissez peut être cette traduction et souhaitez nous le
                faire savoir ?
              </Text>
            </View>
            <Button
              name="Proposer une traduction"
              style={styles.buttonAdd}
              styleText={styles.textAdd}
              onPress={() => {
                navigation.navigate('Add');
              }}
            />
          </View>
        </View>
        <Button
          name="Aléatoire"
          style={styles.button}
          styleGradient={styles.gradient}
          onPress={onPress}
        />
      </View>
    );
  };

  if (data.code) {
    return renderTranstionNotFound();
  } else {
    return renderTranstion();
  }
}
