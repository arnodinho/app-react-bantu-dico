import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
  expressionsContainer: {
    paddingBottom: 15,
    flex: 1,
    marginBottom: 15,
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
  resulButtons: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  share_touchable_floatingactionbutton: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 30,
    bottom:15,
    elevation: 4,
    zIndex: 2,
    borderRadius: 30,
    backgroundColor: '#214c98',
    justifyContent: 'center',
    alignItems: 'center',
  },
  share_image: {
    width: 30,
  },
});
