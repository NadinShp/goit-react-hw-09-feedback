import PropTypes from 'prop-types';
import styles from './Section.module.css';
const Section = ({ title, children }) => (
  <div className={styles.section__wrap}>
    <h2 className={styles.section__title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
