import "./style.css";

const Header = () => (
  <header className="header">
    <h1 className="header__symbol">Kalkulator walutowy by MSlowins</h1>
    <nav className="navigation">
      <ul className="list">
        <li className="list__item list__item--currentRatesSymbol">
          Aktualne kursy walut:
        </li>
        <li className="list__item list__item--dolarSymbol">
          1 USD: <span className="list__span">4.9569 </span>zł
        </li>
        <li className="list__item list__item--euroSymbol">
          1 EUR: <span className="list__span">4.8330 </span>zł
        </li>
        <li className="list__item list__item--poundSymbol">
          1 GBP: <span className="list__span">5.5886 </span>zł
        </li>
        <li className="list__item list__item--frankSymbol">
          1 CHF: <span className="list__span">4.9526 </span>zł
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
