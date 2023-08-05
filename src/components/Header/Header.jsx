import PropTypes from 'prop-types';
import { Container } from 'components';

export const Header = ({ children }) => {
  return (
    <header>
      <Container>{children}</Container>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.element,
};
