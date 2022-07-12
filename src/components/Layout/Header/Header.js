import meals from '../../../assets/imgs/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return (
      <>
        <header className={classes.header}>
          <h1>24hfo.d</h1>
          <HeaderCartButton
            text="My Cart"
            onShowCart={props.onShowCart}
          />
        </header>
        <div className={classes["main-image"]}>
          <img src={meals} alt="meals" />
        </div>
      </>
    );
}

export default Header