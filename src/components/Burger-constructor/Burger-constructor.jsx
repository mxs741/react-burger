import classes from './Burger-constructor.module.css'
import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import cratorBun from '../../images/bun-02.png'
import mineralRings from '../../images/mineral rings.png'
import galacticSauce from '../../images/sauce-03.png'
import subtract from '../../images/Subtract.png'
import meat from '../../images/meat-02.png'

const BurgerConstructor = () => {
  return (
    <section className={classes.container}>
      <div className={classes.lockElement}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={cratorBun}
        />
      </div>
      <div className={classes.scrollContaiter}>
        <div className={classes.moveElement}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Соус традиционный галактический"
            price={30}
            thumbnail={galacticSauce}
          />
        </div>
        <div className={classes.moveElement}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Мясо бессмертных моллюсков Protostomia"
            price={300}
            thumbnail={meat}
          />
        </div>
        <div className={classes.moveElement}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Плоды Фалленианского дерева"
            price={80}
            thumbnail={cratorBun}
          />
        </div>
        <div className={classes.moveElement}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={mineralRings}
          />
        </div>
        <div className={classes.moveElement}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={mineralRings}
          />
        </div>
        <div className={classes.moveElement}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={mineralRings}
          />
        </div>
        <div className={classes.moveElement}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={mineralRings}
          />
        </div>
        <div className={classes.moveElement}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={mineralRings}
          />
        </div>
      </div>

      <div className={classes.lockElement}>
        <ConstructorElement
          className={classes.lockElement}
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={cratorBun}
        />
      </div>

      <div className={classes.ordering}>
        <p className={classes.price}>610</p>
        <img className={classes.orderingIcon} src={subtract} alt="subtract" />
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor