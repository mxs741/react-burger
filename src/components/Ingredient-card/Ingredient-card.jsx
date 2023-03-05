import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './Ingredient-card.module.css';

const IngredientCard = (props) => {
  return (
    <div className={classes.card}>
      <Counter count={1} size="default" />
      <img className={classes.img} src={props.img} alt={props.title} />
      <p className={classes.price}>
        {props.price}
        <CurrencyIcon type="primary" />
      </p>
      <p className={classes.text}>{props.title}</p>
    </div>
  )
}

export default IngredientCard;