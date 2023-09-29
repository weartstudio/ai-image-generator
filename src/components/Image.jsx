import React from 'react'

export default function Image({ img }) {
	return (
		<div className='text-center'>
			<img
				className='mb-4 border-2 border-blue-400 rounded-md shadow-md'
				src={ img.img } />
			<p className='text-xs font-extralight'>{ img.title }</p>
		</div>
	)
}
