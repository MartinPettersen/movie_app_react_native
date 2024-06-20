import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './Layout';
import Loading from './components/(loading)/Loading';
import { usefetchMovieDBData } from './hooks/useGetMovieDBData';

export default function App() {

  usefetchMovieDBData()

  return (
    <Layout >
      <Loading />

      <StatusBar style="auto" />
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
