import "./style.css";

const List = () => (
  <ul className="list">
    <li className="list__item list__item--currency">
      <label className="list__label">
        <input
          type="radio"
          name="radio"
          value="dollar"
          onClick={() => console.log("Klik USD")}
          checked
        />
        USD - Dolar amerykański
      </label>
    </li>
    <li className="list__item list__item--currency">
      <label>
        <input
          type="radio"
          name="radio"
          value="euro"
          onClick={() => console.log("Klik EUR")}
        />
        EUR - Euro
      </label>
    </li>
    <li className="list__item list__item--currency">
      <label>
        <input
          type="radio"
          name="radio"
          value="pound"
          onClick={() => console.log("Klik GBR")}
        />
        GBR - Funt brytyjski
      </label>
    </li>
    <li className="list__item list__item--currency">
      <label>
        <input
          type="radio"
          name="radio"
          value="frank"
          onClick={() => console.log("Klik CHF")}
        />
        CHF - Frank szwajcarski
      </label>
    </li>
  </ul>
);

export default List;
