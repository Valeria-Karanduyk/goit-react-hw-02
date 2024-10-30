import s from "./Feedback.module.css";

const Feedback = ({ clicks, total }) => {
  return (
    <div className={s.box}>
      <ul className={s.list}>
        <li className={s.item}>
          Good: <span className={s.count}>{clicks.good}</span>
        </li>
        <li className={s.item}>
          Neutral: <span className={s.count}>{clicks.neutral}</span>
        </li>
        <li className={s.item}>
          Bad: <span className={s.count}>{clicks.bad}</span>
        </li>
        <li className={s.item}>
          Total: <span className={s.count}>{total}</span>
        </li>
        <li className={s.item}>
          Positive:{" "}
          <span className={s.count}>
            {Math.round(((clicks.good + clicks.neutral) / total) * 100)}%
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
