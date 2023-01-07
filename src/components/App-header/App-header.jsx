import { useState } from 'react';
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import classes from './app-header.module.css';

const AppHeader = () => {
  const [activeClass, setActiveClass] = useState('constructor');

  const onClick = (evt) => {
    setActiveClass(evt.target.value);
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <button
            className={`${classes.button} ${activeClass === 'constructor' ? classes.active : ''}`}
            value='constructor'
            onClick={onClick}
          >
            <BurgerIcon type={activeClass === 'constructor' ? 'primary' : 'secondary'} />Конструктор
          </button>
          <button
            className={`${classes.button} ${activeClass === 'order feed' ? classes.active : ''}`}
            value='order feed'
            onClick={onClick}
          >
            <ListIcon type={activeClass === 'order feed' ? 'primary' : 'secondary'} />Лента заказов
          </button>
        </nav>

        <div className={classes.logo}><Logo /></div>
        <button
          className={`${classes.button} ${activeClass === 'personal account' ? classes.active : ''}`}
          value='personal account'
          onClick={onClick}
        >
          <ProfileIcon type={activeClass === 'personal account' ? 'primary' : 'secondary'} />Личный кабинет
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
