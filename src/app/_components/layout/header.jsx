import React from 'react'
import NavLink from '../ui/NavLink'
import ThemeButton from '../ui/ThemeButton';

export default function Header() {
  return (
    <header className=' flex justify-center w-full'>
      <nav className='bg-gray-300 p-4 w-full flex items-center justify-between dark:bg-black'>
        <ul className='flex gap-2'>
          <li>
            <NavLink href='/'> Home </NavLink>
          </li>
          <li>
          <NavLink href='/about'> About </NavLink>
          </li>
          <li>
          <NavLink href='/posts'> Blog </NavLink>
          </li>
        </ul>
        <ThemeButton/>
      </nav>
    </header>
  )
}
