import { Link } from 'react-router-dom';
import css from './NoMatch.module.scss';

const NoMatch = () => {
  return (
    <div className={css.noMatch}>
      <div className={css.noMatchContent}>
        <h1 className={css.noMatchTitle}>Aw jeez.</h1>
        <p className={css.noMatchText}>That page has gone missing.</p>
        <Link to="/" className={css.noMatchLink}>
          Hitch a ride to back home.
        </Link>
      </div>
      <div className={css.noMatchFixed}>
        <p className={css.noMatchFixedTitle}>404</p>
      </div>
    </div>
  );
};

export default NoMatch;
