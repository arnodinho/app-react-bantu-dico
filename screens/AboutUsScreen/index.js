import React from 'react';
import {ImagesUrl} from '../../config/ImagesUrl';
import ProfileDescription from '../../components/ProfileDescription';
import Button from '../../components/Button';
import {ScrollView, View, Text} from 'react-native';
import styles from './styles';
import ShareButton from '../../components/ShareButton';
const ourTeam = [
  {
    id: '1',
    screen: 'Profile1',
    image: ImagesUrl.profil1,
    subName: 'Développeur',
    name: 'Arnaud YANGA-ESSO',
  },
  {
    id: '2',
    screen: 'Profile2',
    image: ImagesUrl.profil1,
    subName: 'Communication',
    name: 'Audrey YANGA-ESSO',
  },
];

export default function AboutUsScreen({navigation}) {
  const onpressButton = () => {
    console.log('button pressed');
    console.log(navigation);
  };

  /* Go ahead and delete ExpoConfigView and replace it with your
   * content, we just wanted to give you a quick view of your config */
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.tabBarInfoText}>
          Cette application est destinée à la promotion des langues Lingala et
          Sango. Par cet outil, nous souhaitons rendre disponible à tous et
          gratuitement la connaissance de ces belles langues, très souvent
          méconnues auprès de la jeune génération.
        </Text>

        <Text style={styles.tabBarInfoText}>
          Nous souhaions de tout coeur que cette application contribuera à la
          promotion des langues bantoues et de l'Afrique centrale.
        </Text>
      </View>
      <View style={styles.credits}>
        <ShareButton name={'share-alt'} size={25} color={'#FFFFFF'} />
        <Text style={styles.tabBarInfoTitle}>Notre équipe</Text>
      </View>
      <View style={{paddingHorizontal: 20}}>
        {ourTeam.map((item, index) => {
          return (
            <ProfileDescription
              key={'service' + index}
              image={item.image}
              name={item.name}
              subName={item.subName}
              description={item.description}
              style={{marginBottom: 10}}
            />
          );
        })}
      </View>
      <Button
        style={styles.button}
        name="Nous contacter"
        onPress={() => {
          navigation.navigate('ContactUs');
        }}
      />
    </ScrollView>
  );
}
