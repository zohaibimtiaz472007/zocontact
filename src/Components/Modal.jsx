import React from "react";
import { ImCross } from "react-icons/im";
import {createPortal} from 'react-dom'

const Modal = ({ onClose, isOpen, children }) => {
  return  createPortal(
    <div>
      {isOpen && (
        <>
          <div className=" relative m-auto z-50 p-4 min-h-[200px] max-w-[80%] bg-white">
            <div className="flex justify-end">
              <ImCross onClick={onClose} className=" text-2xl " />
            </div>
            {children}
          </div>
          <div onClick={onClose} className=" h-screen w-screen absolute  backdrop-blur top-0   z-40 " />
        </>
      )}
    </div>
  ,document.getElementById("modal-root"));
};

export default Modal;
