import React from 'react'


const ProductComponent = ({title, price, description, img, rating}) => {
  return (
    <>
    <div className='space-y-4 p-5 bg-[#2C2C2C]'>
        <img src={img} alt=""  className='h-96 w-[98%] bg-slate-50 mx-auto'/>
        <div className='space-y-4'>
            <h2 className='text-white text-xl mb-4 font-semibold'>{title}</h2>
            <span className='text-[#FFA500] font-bold'>Price: {price}</span> <br />
            <span className='text-[#FFA500] font-bold'>Rating: {rating}</span>
            <p className='text-white'>{description}</p>
            <button type='button' className='bg-white hover:bg-yellow-400 transition-colors duration-150 text-black text-xl rounded-[10px]   py-2 px-4  '> Add to cart</button>
        </div>
    </div>
    
    
    </>
  )
}

export default ProductComponent
