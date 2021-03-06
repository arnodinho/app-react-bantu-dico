import React from 'react';
import {View, Text} from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from './styles';

export default function Sango() {
  return (
    <View>
      <View style={styles.resulLangage}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.tabBarInfoText}>Français</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.tabBarInfoText}>Sango</Text>
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
            <Text style={styles.optionText}>Balaô</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Salut !</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Balaô</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Au revoir</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Gué nzôni</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Comment ça va ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Töngana nye ?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Je vais bien</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mbï yeke sêngê</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Quel est ton nom ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Ïrï tî mo nye ?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mon nom est ...</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Ïrï tî mbï ...</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Le prénom</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>ïrï tî nzapä</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Le nom de famille</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>ïrï tî ködörö</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Bonne nuit</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Nzoni lakwi</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Bonne fêtes</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Nzoni matanga</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Joyeux anniversaire</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Nzoni matanga ti dungö</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Merci (beaucoup)</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Singîla (mingi)</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.optionSection}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTextSection}>Expressions usuelles</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>La pluie menace!</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Ngû-nzapä yeke löndö!</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Tu veux, ou tu ne veux pas ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mo yê, wala mo yê äpëe ?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Qu'est-ce que c'est ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Nye laâ ? / Sô nye laâ ?</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Venez vite !</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>(Ala) Gä hîo, sï</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Qu'avez-vous acheté ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Nye lâ sï ala vö nye ?</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Quand est-il arrivé ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Lâwa sï lo gä ?</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>À quel endroit ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Na ndo wa ?</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Qui est-ce ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Zo wa lâ ?</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Qui c'est qui est venu ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Zo wa lâ sï agä sô ?</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Pourquoi n'est-il pas venu ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              Lo gä pëpë (sô) ngbanga tî nye ?
            </Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Va-t-en! Allez-vous-en!</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mo/âla hön kâ !</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>J'aime beaucoup cette musique</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mbï yê mozoko so mîngi</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Allons-nous-en!</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Ë hön !</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Quelle est ton ethnie ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Marâ tî mô nye ?</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              Tu es ressortissant de quel pays ?
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mo yeke zo tî ködörö wa ?</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Quel est le nom de ton pays ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              Iri ti Ködörö tî mo a yéké nye ?
            </Text>
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
            <Text style={styles.optionText}>Mon amour</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>kamba ti bê ti mbi</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Je t'aime</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mbi yé mö</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>C'est mon mari, mon copain</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Koli ti mbi la</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>C'est ma femme, ma copine</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Wali ti mbi la</Text>
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
            <Text style={styles.optionText}>mô yèkè pendèrè mingi</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              Je te trouve (très) beau/belle
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              Mö yéké pendèrè (mingi) na lè ti mbi
            </Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>c’est fini entre toi et moi</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Ti mbi na mô a hûnzi awè</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>J'ai envie de toi</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Nzara ti mö a sara mbi</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Tu me plais</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>mô nzèrè la lè ti mbi</Text>
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Qu'est ce que tu me caches ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mö hondè na mbi nyè ?</Text>
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
            <Text style={styles.optionText}>Bon-appetit</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>kobè a nzèrè na yanga ti ala</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>le petit-déjeuner</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>kôbe tî ndäpêlêlê</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>le déjeuner</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>kôbe tî bêkombïte</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>le dîner, souper</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>kôbe tî lâkûi</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>la faim, affamé</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>nzara, zo tî nzara</Text>
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
            <Text style={styles.optionText}>
              J’ai besoin de voir un médecin
            </Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Mbi yé ti ba wa nganga</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Je suis malade</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Tere ti mbi a sô</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Où est l’hôpital ?</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              Da nganga ni a yéké na ndo wa ?
            </Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Appelez un médecin !</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>iri wa nganga !</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>J'ai mal ici</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>A yéké sö mbi na mbagé ndo so</Text>
          </View>
        </View>
      </Touchable>
      <Touchable style={styles.option}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Je ne me sens pas très bien</Text>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Tèrè ti mbi a sara nzoni a pè</Text>
          </View>
        </View>
      </Touchable>
    </View>
  );
}
