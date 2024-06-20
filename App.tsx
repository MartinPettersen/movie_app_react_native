import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './Layout';
import Loading from './components/(loading)/Loading';

export default function App() {
  return (
    <Layout >
        <View style={styles.container}>

      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Loading />
    </View>
      </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    
  },
});
