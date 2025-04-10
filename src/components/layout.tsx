import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartTab from './cartTab'
import { useSelector } from 'react-redux'
import {RootState} from '../stores/index'

const Layout: React.FC = () => {
  const statusTabCart:boolean = useSelector((store: RootState) => store.cart.statusTab);
  return (
    <div className='bg-orange-200'>
        <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
          ${statusTabCart === false ? "" : "-translate-x-56"}
          `}>
            <Header />
            <Outlet />
        </main>
        <CartTab />
    </div>
  )
}

export default Layout