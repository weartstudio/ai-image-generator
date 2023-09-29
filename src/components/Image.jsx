import React from 'react'

export default function Image({ img }) {
	return (
		<div className='text-center'>
			<img src={ img.img } />
			<p>{ img.title }</p>
		</div>
	)
}
