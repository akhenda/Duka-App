import { StyleSheet } from 'react-native';

import { colors } from 'src/theme';

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary.lighter,
  },
  headerTitle: {
    color: colors.secondary.text,
  },
  titleStyle: {
    color: 'white',
  },
  homeNavBar: {},
});

export default styles;
