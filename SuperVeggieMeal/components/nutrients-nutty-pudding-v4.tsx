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
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(22)}]}>432.6 kcal (22%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Total Fat:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(41)}]}>32.2 g (41%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Saturated Fat:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(23)}]}>4.6 g (23%)</Text>
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
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(4)}]}>81.2 mg (4%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Total Carbohydrate:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(12)}]}>34.1 g (12%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Dietary Fiber:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(68)}]}>18.9 g (68%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Total Sugars:</Text>
          <Text style={styles.nutritionValue}>10.8 g</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Added Sugars:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(0)}]}>0 g (0%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Protein:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(17)}]}>8.5 g (17%)</Text>
        </View>
        <Text style={styles.nutritionTitle}>Vitamins and Minerals:</Text>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Vitamin D:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(5)}]}>1.1 mcg (5%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Calcium:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(32)}]}>412.7 mg (32%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Iron:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(33)}]}>5.9 mg (33%)</Text>
        </View>
        <View style={styles.nutritionRow}>
          <Text style={styles.nutritionText}>Potassium:</Text>
          <Text style={[styles.nutritionValue, {color: getColorForPercentage(12)}]}>581.8 mg (12%)</Text>
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
