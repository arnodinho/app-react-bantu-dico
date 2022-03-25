import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImagesUrl} from '../../config/ImagesUrl';
import Button from '../Button';
import {createSong} from '../../apis';
export default function Translation(props) {
  const {source, target, data, navigation, onPress} = props;
  const [songSource, setSongSource] = useState(createSong(data.source.url));
  const [songTarget, setSongTarget] = useState(createSong(data.target.url));


  // On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage.

  const playSoundSource = () => {
    try {
      songSource.play(success => {
        console.log('Sound source is playing ' + success);
      });
    } catch (e) {
      console.log(`cannot play the sound source file`, e);
    }
  };

  const playSoundTarget = () => {
    try {
      songTarget.play(success => {
        console.log('Sound source is playing ' + success);
      });
    } catch (e) {
      console.log(`cannot play the sound source file`, e);
    }
  };
  const renderAudio = () => {
    if (data.target?.url && data.target?.url) {
      return (
        <View style={styles.resultShare}>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={playSoundSource}>
            <Icon name="volume-up" size={30} color={'#061646'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}  onPress={playSoundTarget}>
            <Icon name="volume-up" size={30} color={'#061646'} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return <View />;
    }
  };

  const renderTranstion = () => {
    return (
      <View style={styles.translationContainer}>
        <View style={styles.resultContainer}>
          <View style={styles.resulLangage}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.tabBarInfoTextMain}>
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
          {renderAudio()}
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

  const renderMaintenance = () => {
    return (
      <View style={styles.translationContainer}>
        <View style={styles.resultContainer}>
          <View style={styles.frown}>
            <View style={{justifyContent: 'center'}}>
              <Icon name="gears" size={100} color="#214c98" />
            </View>
            <View style={{justifyContent: 'center', marginTop: 20}}>
              <Text style={[styles.tabBarInfoText, {fontStyle: 'italic'}]}>
                Application en cours de maintenance. Veuillez réessayer plus
                tard
              </Text>
            </View>
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
  if (
    data.code == 500 &&
    (data.message == 'French Lingala  translation not found' ||
      data.message == 'French Sango  translation not found')
  ) {
    return renderTranstionNotFound();
  } else if (data.code == 500) {
    return renderMaintenance();
  } else {
    return renderTranstion();
  }
}
