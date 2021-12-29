import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="./products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

/*
Puvodne jsme to meli takhle:
 <a href="./products">Products</a>
Jenze tak se nam pri kliknuti na jednotlive odkazy naloaduje nova stranka a nejde tedy o multi-page single-page-app.
Ztratili bychom takhle vsechny states, ktere jsme meli na te strance. Protoze se naloaduje stranka nova. 
Proto pouzijeme Link misto <a href=''></a>

Pak jsme pouzili Link:
<Link to="/welcome">Welcome</Link>
Ale takhle se nam v headeru nezvyrazni ten aktivni odkaz.

Proto pouzijeme NavLink, kteray nam umoznuje pouzit activeClassName
Pak ty css classes vypadaji takhle:
.header a:hover,
  .header a:active, // tohle je kdyz to zmackneme
  .header a.active { // tohle je kdyz je ten odkaz aktivni. proto tam je a.active (tecka misto dvojtecky)
    color: #95bcf0;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid #95bcf0;
  }
*/