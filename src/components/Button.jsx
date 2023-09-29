import React from 'react'

export default function Button({set, children}) {
	return (
		<button onClick={()=>set()}
			className='rounded-md py-3 px-4 uppercase text-black hover:bg-blue-100 mx-3'>
				{children}
		</button>
	)
}
