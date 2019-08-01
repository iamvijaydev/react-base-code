import styled from 'styled-components';

export const Header = styled.header`
border-bottom: 1px solid ${props => props.theme.colors.gray300};
padding: 1rem 1rem 2rem;

  h3 {
    margin: 0;
  }
`;

export const Article = styled.article`
  padding: 5rem;
`;

export const Footer = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.gray300};
  padding: 2rem 1rem 1rem;
  display: flex;
  justify-content: flex-end;
`;
