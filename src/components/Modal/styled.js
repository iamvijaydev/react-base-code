import styled from 'styled-components';

const Base = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  height: 100vh;
`;

const Mask = styled(Base)`
  background: ${props =>
    props.theme.backgroudColor === '#fff'
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(255, 255, 255, 0.5)'};
  z-index: ${props => props.theme.zindex.modalMask};
`;

const ModalWrap = styled(Base)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${props => props.theme.zindex.modal};
`;

const Modal = styled.div`
  margin: 3rem;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.gray900};
  border-radius: 4px;
  padding: 3rem 1rem;
  position: relative;
  box-shadow: 0 40px 77px rgba(0, 0, 0, 0.22), 0 27px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  overflow-y: auto;

  @media (min-width: 768px) {
    max-height: 80%;
    max-width: 80%;
    width: 600px;
    margin: 0;
  }
`;
Modal.Close = styled.span`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;
Modal.Content = styled.div`
  text-align: center;
`;

export default {
  Mask,
  ModalWrap,
  Modal
};
