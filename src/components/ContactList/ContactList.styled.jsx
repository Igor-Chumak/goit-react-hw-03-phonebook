import styled from 'styled-components';

export const ContactListBox = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(3)};
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};

  max-width: ${props => props.theme.spacing(140)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${props => props.theme.spacing(2)};

  font-weight: 600;
  line-height: 1.2;
  /* outline: 1px solid; */
`;
