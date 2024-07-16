import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme';

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
  },
  description: {
    fontSize: 18,
    paddingLeft: 10,
  },
  googleMap:{
    flex: 1,
  },
  markerWrapper:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  markerSize: {
    width: 60,
    height: 60
  },
  markerTooltip : {
    width: 250,
    height: 40,
    backgroundColor: theme.fill_base,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 5,
    opacity: 0.8
  }
});

export default styles;
