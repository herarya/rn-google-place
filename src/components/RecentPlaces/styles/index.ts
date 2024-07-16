import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../../utils/theme';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    height: 80,
    backgroundColor: theme.fill_body,
  },
  recentItem: {
    marginVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: theme.border_color_base,
    backgroundColor: theme.fill_grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    width: width / 1.2,
    flexDirection: 'row',
  },
  recentItemText: {
    marginLeft: 5,
  },
  recentLabel: {
    paddingLeft: 10,
    color: theme.color_text_disabled,
  },
});

export default styles;
