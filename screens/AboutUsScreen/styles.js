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
  tabBarInfoText: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#061646',
    textAlign: 'center',
    marginBottom: 10,
  },
  tabBarInfo: {
    marginTop: 1,
    fontSize: 14,
    color: '#061646',
  },
  tabBarInfoTitle: {
    marginTop: 5,
    marginRight: 9,
    fontSize: 17,
    color: '#061646',
    fontWeight: 'bold',
  },
  main: {
    marginRight: 2,
    marginLeft: 2,
    marginTop: 10,
  },
  credits: {
    marginLeft: 2,
    marginTop: 30,
    marginBottom: 10,
  },
  button: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
});
