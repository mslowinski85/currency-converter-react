import "./style.css";   

const List = () => (
    <ul className="list">
          <li className="list__item list__item--currency">
            <label className="list__label">
              <input
                className=""
                type="radio"
                name="radio"
                value="dollar"
                checked
              />
              USD - Dolar amerykański
            </label>
          </li>
          <li className="list__item list__item--currency">
            <label>
              <input className="" type="radio" name="radio" value="euro" />
              EUR - Euro
            </label>
          </li>
          <li className="list__item list__item--currency">
            <label>
              <input className="" type="radio" name="radio" value="pound" />
              GBR - Funt brytyjski
            </label>
          </li>
          <li className="list__item list__item--currency">
            <label>
              <input className="" type="radio" name="radio" value="frank" />
              CHF - Frank szwajcarski
            </label>
          </li>
        </ul>
);

export default List;