import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonSearch: {
    position: 'absolute',
    left: 20,
    bottom: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60 / 2,
    backgroundColor: '#DEF9C4',
  },
  description: {
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default styles;
