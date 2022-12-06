import React from 'react';

const Additionalnfo = ({ sizes }) => {
	return (
		<div>
			<div className='div'>
				{sizes.length > 0 ? (
					<div className='sizes'>
						<span className='titleOfInfo'>Available Sizes</span>
						{sizes?.map((size) => (
							<span className='sizeName'>{size}</span>
						))}
					</div>
				) : (
					<h1 style={{ textAlign: 'center', margin: '20px 0px' }}>
						No additional information...!
					</h1>
				)}
			</div>
		</div>
	);
};

export default Additionalnfo;
