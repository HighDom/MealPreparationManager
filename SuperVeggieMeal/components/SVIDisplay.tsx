import { StyleSheet } from 'react-native';
import { Text, View } from '/Users/dominiquebuob/Documents/GitHub/BJPreparation/SuperVeggieMeal/components/Themed';

export default function SPIDisplay() {
    return (
      <View style={styles.container}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(1,1,1,0.9)" />
        <Text style={styles.ingredient}>Black lentils, 45 g</Text>
        <Text style={styles.ingredient}>Broccoli , 250 g</Text>
        <Text style={styles.ingredient}>Cauliflower, 150 g</Text>
        <Text style={styles.ingredient}>Shiitake/Maitake Mushrooms, 50 g</Text>
        <Text style={styles.ingredient}>Garlic, 1 piece</Text>
        <Text style={styles.ingredient}>Ginger, 3 g</Text>
        <Text style={styles.ingredient}>Lime, 1</Text>
        <Text style={styles.ingredient}>Cumin, 1 Tbsp</Text>
        <Text style={styles.ingredient}>Apple Cider Vinegar, 1 Tbsp</Text>
        <Text style={styles.ingredient}>Hemp Seeds, 1 Tbsp</Text>
        <Text style={styles.ingredient}>Olive Oil, 1 Tbsp</Text>
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