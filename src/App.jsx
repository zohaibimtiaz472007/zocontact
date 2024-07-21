import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar"
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from './Config/Firebase'

import Modal from "./Components/Modal";
import AddandUpdateContact from "./Components/AddandUpdateContact";
import ContactCard from "./Components/ContactCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const App = () => {
  const [contact, setContact] = useState([])
  const [isOpen, setOpen] = useState(false)
  const onOpen = () => {
    setOpen(true);
  }
  const onClose = () =>{
    setOpen(false);
  }

  useEffect (()=>{
    const getContacts = async ()=>{
      try {
        const contactsRef = collection(db, "contacts")
        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc)=> {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setContact(contactList);
          return contactList
        })
      } catch (error) {
        
      }
    }
    getContacts();
  },[])

 const filterContacts = (e) => {
  const value = e.target.value;

  const contactsRef = collection(db, 'contacts')

  onSnapshot(contactsRef, (snapshot)=>{
    const contactList = snapshot.docs.map((doc)=>{
      return{
        id: doc.id,
        ...doc.data(),
      };
    });
    const filteredContacts = contactList.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()));
    setContact(filteredContacts);
    return filteredContacts;
  });

 }

  return (
    <>
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar/>
      <div className="flex gap-2">
      <div className="flex items-center relative flex-grow">
         <CiSearch className="text-white ml-3 text-3xl absolute" />
        <input onChange={filterContacts}  type="text" className="h-10 my-5 text-white pl-11 flex-grow rounded-md border border-transparent border-white bg-transparent" />
      </div>
      <FaPlus onClick={onOpen} className="text-4xl text-white cursor-pointer mt-5 "/>     
      </div>
      <div className="  mt-1 flex gap-3 flex-col" >
        {
          contact.map((contact)=>(
            <ContactCard key={contact.id} contact={contact}/>            
          ))
        }
      </div>
    </div>
    <AddandUpdateContact  onClose={onClose} isOpen={isOpen}/>
    <ToastContainer position="bottom-center" />
    </>
  )
}

export default App;
