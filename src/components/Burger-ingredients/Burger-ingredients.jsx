import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCard from '../Ingredient-card/Ingredient-card';
import classes from './Burger-ingredients.module.css';

const BurgerIngredients = ({data}) => {
  const [current, setCurrent] = useState()

  const buns = data.filter(item => {
    return item.type === 'bun'
  })

  const sauces = data.filter(item => {
    return item.type === 'sauce'
  })

  const fillings = data.filter(item => {
    return item.type === 'main'
  })

  return (
    <section className={classes.constructor}>
      <h1 className={classes.title}>Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={classes.scrollContaiter}>
        <h2 className={classes.subtitle}>Булки</h2>
        <div className={classes.container}>
          {buns.map(item => {
            return <IngredientCard img={item.image} title={item.name} price={item.price} key={item._id} />
          })}
        </div>
        <h2 className={classes.subtitle}>Соусы</h2>
        <div className={classes.container}>
          {sauces.map(item => {
            return <IngredientCard img={item.image} title={item.name} price={item.price} key={item._id} />
          })}
        </div>
        <h2 className={classes.subtitle}>Начинки</h2>
        <div className={classes.container}>
          {fillings.map(item => {
            return <IngredientCard img={item.image} title={item.name} price={item.price} key={item._id} />
          })}
        </div>
      </div>

    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.array,
}

export default BurgerIngredients;