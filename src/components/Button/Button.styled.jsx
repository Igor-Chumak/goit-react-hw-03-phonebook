import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin-left: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(2)};
  min-width: ${props => props.theme.spacing(5)};
  color: initial;
  font-weight: bold;
  line-height: 1;
  font-size: ${props => props.theme.fontSizes.smallest};
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Delete = styled(Button)`
  box-shadow: ${props => props.theme.shadows.small};
`;

export const Clear = styled(Button)`
  position: absolute;
  top: 32px;
  left: 180px;
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-top: ${props => props.theme.spacing(1)};
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: 6px;
`;

export const OkButton = styled(Button)`
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-top: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(4)};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.2;
  transform: scale(1.1);
`;
