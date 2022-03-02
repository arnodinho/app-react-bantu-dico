import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,

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

    backgroundColor: '#d0d6d2',
    borderColor: '#214c98',
    borderWidth: 7,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  traduction: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  infoText: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#061646',
    textAlign: 'center',
  },
  infoText2: {
    marginTop: 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#061646',
    textAlign: 'center',
    marginBottom: 9,
  },
  infoTraduction: {
    fontSize: 16,
    color: '#061646',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  tabBarInfo: {
    marginTop: 1,
    fontSize: 14,
    color: '#061646',
  },
  tabBarInfoTitle: {
    marginBottom: 5,
    fontSize: 20,
    color: '#061646',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main: {
    marginRight: 5,
    marginLeft: 5,
    flex: 2,
  },
  containerTradution: {
    flex: 6,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
  },

  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 36,
    borderColor: '#214c98',
    borderWidth: 2,
    paddingLeft: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    color: '#061646',
    fontSize: 15,
    width: '90%',
  },
  loading_container: {
    position: 'absolute', // La définition de la position  absolute  va nous permettre de faire passer le chargement par-dessus notre FlatList.
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
