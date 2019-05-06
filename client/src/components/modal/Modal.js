import ReactDOM from 'react-dom';

function Modal(props) {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById('modal')
  );
}
export default Modal;
