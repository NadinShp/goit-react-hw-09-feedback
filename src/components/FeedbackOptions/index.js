import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.btn__list}>
    {Object.keys(options).map(option => (
      <li key={option}>
        <button
          className={styles.statistics__btn}
          type="button"
          data-value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    option: PropTypes.string,
  }),
};

export default FeedbackOptions;
