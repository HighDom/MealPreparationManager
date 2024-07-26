import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const getColorForPercentage = (percentage: number) => {
    const red = Math.min(255, 255 - (percentage * 2.55));
    const green = Math.min(255, percentage * 2.55);
    return `rgb(${red},${green},0)`;
  };

const NutritionFacts = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nutrition Facts: (DV%)</Text>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Calories:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(19)}]}  >378.2 kcal (19%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Total Fat:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(11)}]}>6.8 g (11%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Saturated Fat:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(4)}]}>0.8 g (4%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Trans Fat:</Text>
          <Text style={styles.nutritionValue}>0 g</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Cholesterol:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(0)}]}>0 mg (0%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Sodium:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(7)}]}>170.8 mg (7%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Total Carbohydrate:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(21)}]}>64 g (21%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Dietary Fiber:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(109)}]}>27.3 g (109%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Sugars:</Text>
          <Text style={styles.nutritionValue}>7.8 g</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Protein:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(51)}]}>25.5 g (51%)</Text>
        </View>
        <Text style={styles.nutritionTitle}>Vitamins and Minerals:</Text>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Vitamin A:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(33)}]}>(33%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Vitamin C:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(437)}]}>(437%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Calcium:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(19)}]}>(19%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Iron:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(45)}]}>(45%)</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'baseline',
    justifyContent: 'center',
    marginVertical: 10,
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
    marginVertical: 10,
  },
  nutritionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  nutritionText: {
    fontSize: 16,
    marginVertical: 4,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  nutritionValue: {
    color: 'black',
    fontSize: 16,
    marginVertical: 4,
  },
});

export default NutritionFacts;
