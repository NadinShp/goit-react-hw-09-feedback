import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ positivePercentage, ...restProps }) => {
  const keys = Object.keys(restProps);
  return (
    <ul className={styles.statistic__list}>
      {keys.map(key => (
        <li key={key}>
          <p className={styles.static__text}>
            {key}: {restProps[key]}
          </p>
        </li>
      ))}
      <li key={positivePercentage}>
        <p className={styles.static__text}>
          Positive feedback: {positivePercentage}%
        </p>
      </li>
    </ul>
  );
};
Statistics.defaultProps = {
  positivePercentage: 0,
};

Statistics.propTypes = {
  restProps: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
