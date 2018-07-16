import styled from 'styled-components';

const getColor = ({ status, theme }) => {
  let color = theme.neutralColor;

  if (status === 'error') {
    color = theme.errorColor;
  } else if (status === 'success') {
    color = theme.successColor;
  }

  return color;
};

const Styled = styled.div`
  margin: ${props => (props.inline ? '0' : '2rem')};
  width: 100%;
`;
const Message = styled.div`
  padding: ${props => (props.inline ? '0' : '2rem')};
  width: 100%;
  font-size: 1.8rem;
  line-height: 3rem;
  text-align: center;
  color: ${props => getColor(props)}
  box-sizing: border-box;
`;
const ActionBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Action = styled.div`
  margin: 0 1rem;
`;

Styled.Message = Message;
Styled.ActionBlock = ActionBlock;
Styled.Action = Action;

export { Styled as default };
