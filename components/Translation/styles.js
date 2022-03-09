import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  translationContainer: {
    flex: 4,
    marginTop: 10,
  },
  resultContainer: {
    flex: 4,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#d0d6d2',
    borderColor: '#214c98',
    borderWidth: 7,
    marginLeft: 5,
    marginRight: 5,
  },
  tabBarInfoText: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    color: '#061646',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  frown: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textDefinition: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#061646',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    flexWrap: 'wrap', //  flexWrap: 'wrap'  permet à notre texte de passer à la ligne si celui-ci est trop long
  },
  textExemple: {
    flex: 1,
    fontSize: 15,
    color: '#061646',
    textAlign: 'center',
    alignItems: 'center',
    marginRight: 2,
    marginLeft: 2,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  resultShare: {
    flex: 1,
    marginTop: 1,
    flexDirection: 'row',
  },
  resulLangage: {
    flex: 1,
    flexDirection: 'row',
  },
  resultDefinition: {
    flex: 3,
    flexDirection: 'row',
  },
  resultExample: {
    flex: 2,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 75,
    paddingRight: 75,
  },
  gradient: {
    paddingTop: 5,
    paddingBottom: 5,
  },

  buttonAdd: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 75,
    paddingRight: 75,
  },
  textAdd: {
    fontSize: 15,
  },
});
