import './modal.scss';
import Portal from './Portal';


function Modal({ isOpen = false, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className='wrapper'>
                <div className='overlay'></div>
                <div className='body'>{children}</div>
            </div>
        </Portal>
    );
}

export default Modal;
