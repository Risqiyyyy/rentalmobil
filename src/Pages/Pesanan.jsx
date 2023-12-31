import React from 'react'
import { NavbarDashboard, Sidebar, TableUsers, Tables } from '../components'
import '../styles/PesananStyles/style.css'

const Pesanan = () => {
  return (
    <div className="container-pesanan">
      <Sidebar />
      <div className="content">
        <NavbarDashboard />
        <h1 className="content-title">Pesanan</h1>
        <div className="main-content">
          {/* <TableUsers/> */}
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Pesanan