import React from 'react'

export default function Button({set, children}) {
	return (
		<button onClick={()=>set()}
			className='px-4 py-3 mx-3 text-black uppercase rounded-md hover:bg-blue-100 max-h-12'>
				{children}
		</button>
	)
}
