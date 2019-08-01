import styled from 'styled-components';

const Styled = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30rem;
  background: ${props => props.theme.colors.gray100};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: block;
`;

export const ListItem = styled.li`
  padding: 1rem 2rem;
  border-bottom: ${props => '1px solid' + props.theme.colors.gray300};
  color: ${props => props.theme.colors.gray900};
`;

export const ListSubItem = styled(ListItem)`
  padding-left: 4rem;
`;

Styled.List = List;

export default Styled;
