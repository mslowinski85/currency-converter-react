import { useState } from "react";
import List from "../List";
import "./style.css";

const Form = () => {
  const [sum, setSum] = useState("");
  return (
    <form className="form">
      <fieldset>
        <p>
          <label>
            <span className="form__labelTextRequired">Pole wymagane*</span>
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">Wpisz kwotę*: </span>
            <input
              className="form__input"
              value={sum}
              onChange={(event => setSum(event.target.value))}
              name="inputSum"
              placeholder="Minimalna kwota to 0.01!"
              type="number"
              min="0.01"
              step="0.01"
              autofocus
              required
            />
          </label>
        </p>
        <label>
          <span className="form__labelText"> Wybierz walutę:</span>
        </label>
        <List />
        <p>
          <label>
            <span className="form__labelText">
             Automatyczne przeliczenie na:
            </span>
            <input
              className="form__input"
              name="pln"
              value="PLN - Polski złoty"
              disabled
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Aktualny kurs wybranej waluty:
            </span>
          </label>
          <input value={currentRate} className="form__input" name="currentRate" readonly />
        </p>
        <label>
          <span className="form__labelText">
            <strong className="form__sumLabel">Kwota po przeliczeniu:</strong>
          </span>
          <input
            className="form__input form__input--finallySum"
            name="endSum"
            readonly
          />
        </label>
      </fieldset>
    </form>
  );
};

export default Form;
