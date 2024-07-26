import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Ingredients_Nutty_Pudding_V4 from '@/components/Ingredients-Nutty-Pudding-V4'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Nutty Pudding</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Ingredients_Nutty_Pudding_V4/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
