import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoMatchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NoMatch = () => {
  return (
    <NoMatchWrapper>
      <h2>Nothing to see here</h2>
      <Link to="/">Go to the home page</Link>
    </NoMatchWrapper>
  );
};

export default NoMatch;
