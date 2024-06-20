import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Tabs from './Tabs'

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <View style={styles.container}>
        {children}
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Layout;
