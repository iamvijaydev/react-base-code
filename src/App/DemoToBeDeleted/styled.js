import styled from 'styled-components';

const Styled = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30rem;
  background-color: ${props => props.theme.colors.gray100};
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: block;
  padding: 1rem;
  height: 74px;
  height: calc(100% - 112px);
  overflow: auto;
`;

export const ListItem = styled.li`
  padding: 1rem;
  background-color: ${props => props.theme.colors.gray300};
  color: ${props => props.theme.colors.gray900};
`;

export const ListSubItem = styled(ListItem)`
  background-color: ${props => props.theme.colors.gray100};
  border-bottom: ${props => '1px solid' + props.theme.colors.gray300};
  padding: 1.5rem 1rem 1.5rem 3rem;
`;

Styled.List = List;

export default Styled;
