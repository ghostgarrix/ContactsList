import { StyleSheet } from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    marginBottom: 20,
  },
  subcontainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 14,
    marginLeft: 10,
  },
  textInput: {
    textAlign: 'center',
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
