import React from 'react';
import {View, Text} from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from './styles';

export default function Lingala() {
  return (
    <View>
      <View style={styles.resulLangage}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.tabBarInfoText}>Français</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.tabBarInfoText}>Lingala</Text>
        </View>
      </View>

      {/* Go ahead and delete ExpoLinksView and replace it with your
       * content, we just wanted to provide you with some helpful links */}
      <Touchable style={styles.optionSection}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTextSection}>Présentations</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Bonjour</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>mbote</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>bienvenue</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>boyei bolamu</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>comment ça va ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>boni nzoto ?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>toyambi bapaya</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>nous avons de la visite</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>tu vas bien?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>ozali malamu?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>quelles sont les nouvelles?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>sango nini?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>pas de nouvelles ! / ça va !</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>sango te!</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>je vais bien</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>naza(li) malamu</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>je ne vais pas bien</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>naza(li) malamu te</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              viens on s’en va, allons-nous en
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>yaka tokende</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>je vous dis au revoir</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>natiki bino</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>bon retour, bonne route</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>bokende bolamu</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>bonne journée !</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>mokolo molamu !</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>joyeux anniversaire</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>mbotama elamu</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>bonne nuit</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>butu elamu</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.optionSection}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTextSection}>Le couple</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              c’est mon (ma) compagnon (compagne)
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>azalaka molongani na ngai</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>mon amour, mon(ma) chéri(e)</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>bolingo na ngai</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              prends soin de ton amoureux(se)
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>lengela bolingo na yo</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              tu es très beau (belle, jolie)
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>ozali kitoko mingi</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>c’est fini entre toi et moi</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>ya nga na yo esili</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>tu me plais</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>nasepelaka na yo</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>je t’aime</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>na lingi yo</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              nous nous aimerons jusqu’à ce que la mort nous sépare
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              bolingo ya nga na yo suka se lilita
            </Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              ton sourire me rend fou, ton sourire m’envoûte
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>esekeli na yo elangwisi ngai</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>pardonne-moi</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>limbisa ngayi</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              mon cœur bat quand je pense à toi
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              motema ekobeta soki nakanisi yo
            </Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>j’ai le coup de foudre</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>nakueyi ndeke</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              j’aime ta façon de sourire, j’aime ton sourire
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>nalingaka esekeli na yo</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>je t’aime très fort</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>nalingi yo makasi koleka</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>je t’aime pour la vie</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>nalingi yo na bolingo ya seko</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>j’ai envie de toi</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>naza na posa na yo</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>tu es très beau, belle</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>ozali kitoko mingi</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>tu me caches des choses</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>ozo bombela nga makambo</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.optionSection}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTextSection}>Le commerce</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>C’est combien ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Talo boni ?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>C’est très bon marché</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Ezali ya motoya te</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Pouvez-vous baisser le prix ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Talo boni ?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>C’est trop cher !</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Ezali ntalo mingi !</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Je ne fais que regarder</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Nazali ekeka</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Argent</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mbongo</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.optionSection}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTextSection}>La santé</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Je ne me sens pas très bien</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>nazo yoka nzoto malamu te</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              J’ai besoin de voir un médecin
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Esengali ete munganga</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>J’ai mal ici</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Nazoyoka libumu mpasi</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Où est l’hôpital ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Lopitalo ezali wapi ?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Appelez un médecin !</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Benga monganga !</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.optionSection}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTextSection}>La nourriture</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>J’ai faim</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Naza na nzala</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>j’ai soif</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>naza na posa ya komela</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>C’était délicieux !</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Ezali elengi</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>bokomela nini ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>que prendrez vous ?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>bolei bolamu !</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>bon appétit !</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>allons à table</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>tokende na mesa</Text>
          </View>
        </View>
      </Touchable>
    </View>
  );
}
