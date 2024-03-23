import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useUserContext } from '../contexts/UserProvider';

export default function PageHeader() {
  const {user} = useUserContext();

  return (
    <header className="bg-blue-500 flex justify-between p-4">
      <Link className = "text-neutral-50 hover:text-slate-900" to ="/" >
        E-Commerce Application
      </Link>

      <nav className='flex gap-4'>
        <Link className = "text-neutral-50 hover:text-slate-900" to='/products'>Products</Link>
        {user ? <div>{user.email}<Link className = "text-neutral-50 hover:text-slate-900" to='/logout'>LogOut</Link></div> : <>
        <Link className = "text-neutral-50 hover:text-slate-900" to='/login'>login</Link>
        <Link className = "text-neutral-50 hover:text-slate-900" to='/signup'>signup</Link>
        </> }
      </nav>
    </header>
  )
}
