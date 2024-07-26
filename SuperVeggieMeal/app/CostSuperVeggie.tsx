import React, { useState } from 'react';

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
        package_cost: 0,
        package_amount: 45,
        shop: 'Grocery Store',
        meal_ingredient_weight: 45,
        meal_ingredient_cost: 0
    },
    {
        name: 'Broccoli',
        package_cost: 0,
        package_amount: 250,
        shop: 'Grocery Store',
        meal_ingredient_weight: 250,
        meal_ingredient_cost: 0
    },
    {
        name: 'Cauliflower',
        package_cost: 0,
        package_amount: 150,
        shop: 'Grocery Store',
        meal_ingredient_weight: 150,
        meal_ingredient_cost: 0
    },
    {
        name: 'Shiitake/Maitake Mushrooms',
        package_cost: 0,
        package_amount: 50,
        shop: 'Grocery Store',
        meal_ingredient_weight: 50,
        meal_ingredient_cost: 0
    },
    {
        name: 'Garlic',
        package_cost: 0,
        package_amount: 1,
        shop: 'Grocery Store',
        meal_ingredient_weight: 1,
        meal_ingredient_cost: 0
    },
    {
        name: 'Ginger',
        package_cost: 0,
        package_amount: 3,
        shop: 'Grocery Store',
        meal_ingredient_weight: 3,
        meal_ingredient_cost: 0
    },
    {
        name: 'Lime',
        package_cost: 0,
        package_amount: 1,
        shop: 'Grocery Store',
        meal_ingredient_weight: 1,
        meal_ingredient_cost: 0
    },
    {
        name: 'Cumin',
        package_cost: 0,
        package_amount: 1,
        shop: 'Grocery Store',
        meal_ingredient_weight: 1,
        meal_ingredient_cost: 0
    },
    {
        name: 'Apple Cider Vinegar',
        package_cost: 0,
        package_amount: 1,
        shop: 'Grocery Store',
        meal_ingredient_weight: 1,
        meal_ingredient_cost: 0
    },
    {
        name: 'Hemp Seeds',
        package_cost: 0,
        package_amount: 1,
        shop: 'Grocery Store',
        meal_ingredient_weight: 1,
        meal_ingredient_cost: 0
    },
    {
        name: 'Olive Oil',
        package_cost: 0,
        package_amount: 1,
        shop: 'Grocery Store',
        meal_ingredient_weight: 1,
        meal_ingredient_cost: 0
    },
];

const CostSuperVeggie: React.FC = () => {
    const [mealCost, setMealCost] = useState(0);

    const calculateTotalCost = () => {
        let totalCost = 0;
        ingredients.forEach((ingredient) => {
            totalCost += ingredient.meal_ingredient_cost;
        });
        setMealCost(totalCost);
    };

    return (
        <div>
            <h1>Super Veggie Meal</h1>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name} - Cost: ${ingredient.meal_ingredient_cost.toFixed(2)} - Amount: {ingredient.package_amount} - Shop: {ingredient.shop}
                    </li>
                ))}
            </ul>
            <button onClick={calculateTotalCost}>Calculate Total Cost</button>
            <p>Total Cost per Meal: ${mealCost.toFixed(2)}</p>
        </div>
    );
};

export default CostSuperVeggie;