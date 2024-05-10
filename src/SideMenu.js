import React from 'react';

const SideMenu = () => {
  return (
    <div className='bg-white w-32 p-4 border-r border-gray-200'>
      <div className='text-lg font-semibold mb-4'>Menu</div>
      <div className='space-y-2'>
        <a href='/' className='block text-gray-800 font-bold hover:cursor-pointer hover:text-blue-700'>Home</a>
        <a href='/flashcard' className='block text-gray-800  hover:text-blue-700 font-bold hover:cursor-pointer '>Flashcard</a>
        <a href='/contact' className='block text-gray-800 font-bold hover:cursor-pointer hover:text-blue-700'>Contact</a>
        <a href='/faq' className='block text-gray-800 font-bold hover:cursor-pointer hover:text-blue-700'>FAQ</a>
      </div>
    </div>
  );
}

export default SideMenu;
