import React from 'react'
import { IoMdContact } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Config/Firebase';
import AddandUpdateContact from './AddandUpdateContact';
import { toast } from 'react-toastify';

const ContactCard = ({contact}) => {
    const [isOpen, setOpen] = useState(false)
    
  const onOpen = () => {
    setOpen(true);
  }
  const onClose = () =>{
    setOpen(false);
  }

  const deleteContact = async (id) =>{
    try {
        await deleteDoc(doc (db, "contacts", id))
        toast.error("Contact Deleted")
    } catch (error) {
        console.log(error)
        
    }
  }
  

  return (
    <>
      <div key={contact.id} className=" bg-white flex justify-between p-2 rounded-lg items-center " >
              <div className="flex gap-2">
              <IoMdContact className=" text-4xl " />
              <div className="">
                <h2 className=" font-medium ">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
              </div>
              <div className="flex text-3xl" >
              <FaRegEdit onClick={onOpen} className=" cursor-pointer "  />
              <MdDelete onClick={()=> deleteContact(contact.id)} className="cursor-pointer" />
              </div>
            </div>
            <AddandUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default ContactCard
