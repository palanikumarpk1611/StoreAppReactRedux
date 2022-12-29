import React from 'react'
import {useSelector}from 'react-redux'
import {Link} from 'react-router-dom'




const ProductsPage = ()=>{

	// let allProducts=null;// 
	let allProducts= useSelector(state=>state.allProducts.products)
	


	const renderedItems = allProducts.map( (pdt)=>(

					<Link key={pdt.id} to={'/product/'+pdt.id}>
						 <div key={pdt.id} className='singleProduct'> 
						 <img src={pdt.image} alt='product image'></img>
						 <h5>{pdt.title.split(' ').slice(0,6).join(' ')}</h5> 
						 <em> Price: ${pdt.price}</em>
						 </div>
					</Link>

				))

	return (
		<div className='produtsPage'>

			<h2>Our Products </h2>
				
				{renderedItems
				}



		</div>



		);
}

export default ProductsPage;