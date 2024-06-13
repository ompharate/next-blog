"use client"
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='p-4 flex gap-4 border-b-2 items-center  '>
        <Link className='text-black font-bold' href={"/"}>OpNextBlog</Link>
        <Link className='text-white p-2 rounded-full font-bold bg-black' href={"/add-blog"}>New Blog</Link>
    </nav>
  )
}

export default Header