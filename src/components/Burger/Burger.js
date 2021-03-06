import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//transforms an obj of kv pairs into array of ingredients
//where value of obj is important for how many ingredients i need and key is impt for the type of ingredient i need
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { 
                return <BurgerIngredient key={igKey + i} type={igKey} /> 
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el) //flattening the array
        }, [])
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients! </p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger; 