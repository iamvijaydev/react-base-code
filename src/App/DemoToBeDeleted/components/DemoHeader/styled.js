import styled from 'styled-components';

const Styled = styled.header`
  background: ${props => props.theme.colors.red500};
  padding: 2rem;
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.white};
  margin: 0 0 2rem 0;
`;

const Link = styled.a`
  color: ${props => props.theme.colors.white};

  &:visited {
    color: ${props => props.theme.colors.white};
  }

  &:active,
  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;

Styled.Heading = Heading;
Styled.Link = Link;

export default Styled;
