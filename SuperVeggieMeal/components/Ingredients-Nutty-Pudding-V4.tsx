import { StyleSheet } from 'react-native';
import { Text, View } from '/Users/dominiquebuob/Documents/GitHub/BJPreparation/SuperVeggieMeal/components/Themed';

export default function Ingredients_Nutty_Pudding_V4() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(1,1,1,0.9)" />
      <Text style={styles.ingredient}>Macadamia Nut Milk, 100 mL</Text>
      <Text style={styles.ingredient}>Ground Macadamia Nuts, 3 Tbsp</Text>
      <Text style={styles.ingredient}>Ground Walnuts, 2 tsp</Text>
      <Text style={styles.ingredient}>Chia Seeds, 2 Tbsp</Text>
      <Text style={styles.ingredient}>Flaxseed, 1 tsp</Text>
      <Text style={styles.ingredient}>Blueprint Cocoa, 6 grams</Text>
      <Text style={styles.ingredient}>Sunflower Lecithin, 1 tsp</Text>
      <Text style={styles.ingredient}>Ceylon Cinnamon, 1/2 tsp</Text>
      <Text style={styles.ingredient}>Berries, 1/2 cup</Text>
      <Text style={styles.ingredient}>Cherries, 3</Text>
      <Text style={styles.ingredient}>Pomegranate Juice, 2 oz</Text>
      <Text style={styles.note}>(All organic)</Text>
    </View>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      marginVertical: 10,
      height: 10,
      width: '50%',
    },
    ingredient: {
      fontSize: 16,
      marginVertical: 3,
    },
    note: {
      marginTop: 50,
      fontSize: 14,
      fontStyle: 'italic',
      textAlign: 'center',
    },
  });