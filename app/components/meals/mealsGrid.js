import React from 'react';
import classes from './mealsGrid.module.css';

import MealItem from './mealItem'; // Make sure you have a MealItem component

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;