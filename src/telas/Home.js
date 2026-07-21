import React from 'react';
import {View, Text, StyleSheet, Flatlist, TouchableOpacity} from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.tela}>
      <Text> olá </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});