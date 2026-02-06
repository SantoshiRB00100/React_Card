import React from 'react'


const RightCardContent = (props) => {
    
  return ( 
    <div>
      <div className="absolute top-0 left-0 flex flex-col justify-between h-full p-10 w-full ">
        <h2 className='bg-white rounded-full text-2xl font-semibold  h-14 w-14 flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className='text-lg leading-normal text-white mb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae magnam soluta tempora incidunt at provident!</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
            <button><i className="ri-arrow-right-line bg-blue-600 text-white font-medium px-3 py-2 rounded-full"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
