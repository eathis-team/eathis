import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 2
  },
  form: {
    flex: 3,
    padding: 10
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 5
  },
  item: {
    marginTop: 5,
    marginBottom: 5
  }
});

export default style;
