import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
	return ReactDOM.createPortal(
		/* prettier-ignore */
		<div className="modalStyle">
      {children}
      </div>,
		document.getElementById('modal')
	);
}

export { Modal };
