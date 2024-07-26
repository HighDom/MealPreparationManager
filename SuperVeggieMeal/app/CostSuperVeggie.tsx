import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

interface Ingredient {
    name: string;
    package_cost: number;
    package_amount: number;
    shop: string;
    meal_ingredient_weight: number;
    meal_ingredient_cost: number;
}

const ingredients: Ingredient[] = [
    {
        name: 'Black lentils',
        package_cost: 4.2,
        package_amount: 500,
        shop: 'Migros',
        meal_ingredient_weight: 45,
        meal_ingredient_cost: 0
    },
    {
        name: 'Broccoli',
        package_cost: 4.70,
        package_amount: 750,
        shop: 'Migros - Frozen',
        meal_ingredient_weight: 250,
        meal_ingredient_cost: 0
    },
    {
        name: 'Cauliflower',
        package_cost: 4.95,
        package_amount: 750,
        shop: 'Migros - Frozen',
        meal_ingredient_weight: 150,
        meal_ingredient_cost: 0
    },
    {
        name: 'Shiitake/Maitake Mushrooms',
        package_cost: 0,
        package_amount: 50,
        shop: 'not found',
        meal_ingredient_weight: 50,
        meal_ingredient_cost: 0
    },
    {
        name: 'Garlic',
        package_cost: 0.50,
        package_amount: 10,
        shop: 'Migros',
        meal_ingredient_weight: 1,
        meal_ingredient_cost: 0
    },
    {
        name: 'Ginger',
        package_cost: 1.50,
        package_amount: 200,
        shop: 'Migros',
        meal_ingredient_weight: 3,
        meal_ingredient_cost: 0
    },
    {
        name: 'Lime',
        package_cost: 2.50,
        package_amount: 5,
        shop: 'Migros',
        meal_ingredient_weight: 1,
        meal_ingredient_cost: 0
    },
    {
        name: 'Cumin',
        package_cost: 1.60,
        package_amount: 51,
        shop: 'Migros',
        meal_ingredient_weight: 4,
        meal_ingredient_cost: 0
    },
    {
        name: 'Apple Cider Vinegar',
        package_cost: 1.45,
        package_amount: 1000,
        shop: 'Migros',
        meal_ingredient_weight: 20,
        meal_ingredient_cost: 0
    },
    {
        name: 'Hemp Seeds',
        package_cost: 5.50,
        package_amount: 200,
        shop: 'Migros',
        meal_ingredient_weight: 4,
        meal_ingredient_cost: 0
    },
    {
        name: 'Olive Oil',
        package_cost: 10,
        package_amount: 1000,
        shop: 'Grocery Store',
        meal_ingredient_weight: 20,
        meal_ingredient_cost: 0
    },
];

const CostSuperVeggie: React.FC = () => {
    const [mealCost, setMealCost] = useState(0);

    const calculateTotalCost = () => {
        let totalCost = 0;
        ingredients.forEach((ingredient) => {
            ingredient.meal_ingredient_cost = (ingredient.package_cost / ingredient.package_amount) * ingredient.meal_ingredient_weight;
            totalCost += ingredient.meal_ingredient_cost;
        });
        setMealCost(totalCost);
    };
    
    useEffect(() => {
        calculateTotalCost();
    }, []);

    return (
        <View>
            <Text style={styles.header}>Super Veggie Meal</Text>
            <Text>Total Cost per Meal: ${mealCost}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default CostSuperVeggie;