import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

const AdminCareers = () => {
  return (
    <>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_4fr]">
        <div className="bg-green-100 flex flex-col items-center">
          <AdminSidebar />
        </div>
        <div>Careers</div>
      </div>

      <Footer />
    </>
  )
}

export default AdminCareers