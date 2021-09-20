import './Modal.css';


function Modal ({onClose, largeImage}) {

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    }

    window.addEventListener('keydown', handleKeyDown);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };    

        return (
            <div className="Overlay" onClick={handleBackdropClick}>
                <div className="Modal">
                    <img src={largeImage} alt="123" />
                </div>
            </div>

        )
    
}

export default Modal;
