import { RiExchangeDollarFill } from "react-icons/ri";
import styles from "./ExchangeForm.module.css";
import { exchangeCurrency } from "service/exchangeAPI";

export const ExchangeForm = () => {
  const handleForm = (evt) => {
    evt.preventDefault();
    const formData = evt.currentTarget.elements.currency.value;
    const [amount, from, , to] = formData.split(" ");
    exchangeCurrency({ amount, from, to });
  };
  return (
    <form className={styles.form} onSubmit={handleForm}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        className={styles.input}
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        name="currency"
        required
      />
    </form>
  );
};
