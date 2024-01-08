import React from 'react'
import './chat.css'
import { useState } from 'react';
const Chat = ({ title, content, onClose }) => {
     const [show, setShow] = useState(true);

     const handleClose = () => {
       setShow(false);
       onClose();
     };
   
     return (
       <>
         {show && (
           <div className="custom-modal">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">{title}</h5>
                 <button type="button" className="close" onClick={handleClose}>
                   <span>&times;</span>
                 </button>
               </div>
               <div className="modal-body">{content}</div>
               <div className="modal-footer">
                 <button type="button" className="btn btn-secondary" onClick={handleClose}>
                   Close
                 </button>
               </div>
             </div>
           </div>
         )}
       </>
     );
}
export default Chat
