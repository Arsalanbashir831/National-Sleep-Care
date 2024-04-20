import React from 'react'
import ContactResponse from '../component/ContactResponse'
import DSOResponse from '../component/DSOResponse'
import DentalClientResponse from '../component/DentalClientResponse'

const AdminHome = () => {
  return (
   <>
    <ContactResponse/>
    <DSOResponse/>
    <DentalClientResponse/>
   </>
  )
}

export default AdminHome