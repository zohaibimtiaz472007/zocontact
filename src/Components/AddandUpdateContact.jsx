import React from "react";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup';


const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Incorrect Email").required("Email is Required")
});


const AddandUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
    const addContact = async (contact)=>{
        try {
            const contactRef = collection(db, 'contacts');
            await addDoc(contactRef, contact)
            toast.success("Contact Added Sucessfully")
            onClose()
        } catch (error) {
            console.log(error)
            
        }
    }
    const updateContact = async (contact, id)=>{
      try {
          const contactRef = doc(db, 'contacts', id);
          await updateDoc(contactRef, contact)
          toast.success("Contact Updated Sucessfully")
          onClose()
      } catch (error) {
          console.log(error)
          
      }
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactSchemaValidation}
        initialValues={
          isUpdate
           ? {name: contact.name,
             email: contact.email
            }
            :
            {
            name:'',
            email:'',
        }}
        onSubmit={(values)=>{
            console.log(values);
            isUpdate ? 
            updateContact(values, contact.id):
            addContact(values)
        }}>
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className = "border h-10 " />
              <div className=" text-red-500 text-xs  ">
                <ErrorMessage name="name"/>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className = "border h-10 " />
              <div className=" text-red-500 text-xs  ">
                <ErrorMessage name="email"/>
              </div>
            </div>
            <button className="bg-orange border self-end py-1.5  px-3 ">{isUpdate ? "Update" : "Add"} Form</button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddandUpdateContact;