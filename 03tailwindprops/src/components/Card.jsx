import React from 'react'

const Card = ({username ,btnText="visit me"}) => {
    console.log("username",username);  //{username}=props.username  destructure
    
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
    <img
      src="https://images.pexels.com/photos/28207360/pexels-photo-28207360/free-photo-of-a-woman-is-standing-in-the-rain-holding-an-umbrella.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
    {username}
      </span>
      <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
    </div>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet
    </p>
    <button className='mt-2 inline-flex cursor-pointer items-center text-sm text-white' >{btnText} </button>
  </div>
  )
}

export default Card