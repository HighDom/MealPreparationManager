import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import SVIDisplay from '@/components/SVIDisplay';

import { Button } from 'react-native-paper';
import { useColorScheme } from '@/components/useColorScheme';

import CostSuperVeggie from '../CostSuperVeggie'; // Import the CostSuperVeggie component
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Button mode="outlined" onPress={() => {}} style={styles.button}>
        <Text style={styles.title}>The Super Veggie</Text>
      </Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Link href="CostSuperVeggie" asChild>
        <Pressable>
          {({ pressed}) => (
            <FontAwesome
              name="info-circle"
              size={28}
              color={Colors[colorScheme ?? 'light'].text}
              style={{ marginRight: 15, opacity: pressed ? 0.5 :1 }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    marginVertical: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    marginVertical: 10,
    height: 100,
  },
});
