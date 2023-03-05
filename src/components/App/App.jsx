import React from 'react';
import AppHeader from '../App-header/App-header';
import BurgerIngredients from '../Burger-ingredients/Burger-ingredients';
import BurgerConstructor from '../Burger-constructor/Burger-constructor';
import data from '../../utils/data.js'
import classes from './app.module.css';

const App = () => {

  return (
    <div className={classes.app}>
      <AppHeader />
      <main className={classes.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor />
      </main>
    </div>
  );
};

export default App;