import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(3)};
  max-width: ${props => props.theme.spacing(80)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  font-weight: 600;
  line-height: 1.5;
  /* outline: 1px solid; */
`;

export const FilterInput = styled.input`
  display: block;
  width: 80%;
  padding: ${props => props.theme.spacing(2)};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.gray};
  &:focus {
    color: initial;
  }
`;
