/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Outlet } from 'react-router-dom'
import './HomeAdmin.css'
import SidebarAdmin from '../../components/componentsAdmin/SidebarAdmin';

export default function HomeAdmin() {
  return (

    <div className='flex conteudoAdmin'>
      <SidebarAdmin/>

      <main className='p-0 flex-1'>
        <Outlet />
      </main>
    </div>
  )
}