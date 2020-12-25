import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <h3>Marble World</h3>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">
                <HomeIcon className="Icons"/>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <StorefrontIcon className="Icons"/>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">

          <ul>

            <li>
              <Link to="/cart">
                 <ShoppingCartIcon className="Icons1" totalNumCartItems={totalNumCartItems}/>
              </Link>
            </li>

            {currentUser && [
              <li key={1}>
                <Link to="/dashboard">
                 <AccountBalanceIcon className="Icons2"/>
                </Link>
              </li>,
              <li key={2}>
                <span onClick={() => signOut()}>
                
                <p className="p">Logout</p>
                </span>
              </li>
            ]}

            {!currentUser && [
              <li key={1}>
                <Link to="/registration">
               
                <p className="p">register</p>
                </Link>
              </li>,
              <li key={2}>
                <Link to="/login">
               
                <p className="p">Login</p>
                </Link>
              </li>
            ]}

          </ul>





        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};

export default Header;
