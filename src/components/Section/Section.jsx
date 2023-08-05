import PropTypes from 'prop-types';
import { Container } from 'components';
import { Title, SectionBox } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
