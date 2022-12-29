import react from 'react'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectedProduct,removeSelectedProduct} from '../actions/productAction'
import { Rating } from 'react-simple-star-rating'

const ProductChosen = ()=>{

	const product = useSelector(state=>state.selectedProduct)
	const allProducts = useSelector(state=>state.allProducts.products)
	let myProduct;
	const dispatch = useDispatch()
	let param = useParams();
	let pdtId = param.productId;

	

	 const findProduct = (id)=>{

		myProduct = allProducts.find(obj=>obj.id===parseInt(id))
		dispatch(selectedProduct(myProduct))
		


	}

	useEffect(() => {
		// getSelected(param.productId);
		console.log('efectrun',allProducts)
		findProduct(pdtId)
		return ()=>{
			dispatch(removeSelectedProduct());
		}

	}, [allProducts])


	return(

			<div className='selectedProduct'>
				<img src={product.image} alt='product image'></img>
				<div className='rightside'>
				<h3 className='title'>{product.title}</h3>
				{/*<img src={product.image} alt='image'/>*/}
				<p>{product.description}</p>
				<strong><em >Price: ${product.price}</em></strong>
				<span>Your Rating :  </span>
				<Rating initialValue={3.5} className='star'allowFraction={true}/>
				
				<button className='cartBtn' >Add to Cart</button>
				<button className='buyBtn'>Buy Now</button>

				</div>
				
			</div>

		);
}

export default ProductChosen;