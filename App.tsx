import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './Layout';
import Loading from './components/(loading)/Loading';
import { usefetchMovieDBData } from './hooks/useGetMovieDBData';
import HomeScreen from './screens/HomeScreen';

export default function App() {

  // usefetchMovieDBData()

  return (
    <Layout >
      <HomeScreen />

      <StatusBar style="auto" />
      </Layout>
  );
}

const styles = StyleSheet.create({
  
});
