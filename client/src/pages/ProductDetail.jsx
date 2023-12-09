import React ,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product/Product";
import { useSelector, useDispatch} from 'react-redux';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CiShoppingBasket } from "react-icons/ci";
import { setItemCount } from "../redux/features/auth/cartSlice";

function ProductDetail() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const count = useSelector((state) => state.cart.itemCount);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);        
        const data = await response.json();
        setProduct(data); 
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchProductData();
    console.log(product);

  }, []);

  const handleAddToCart = async () => {
    if(!user){
      //todo - error msg?
      return false;
    }
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user: user, product: product, quantity: 1}),
      });
      console.log(response);
      dispatch(setItemCount({ itemCount: count+1}));
    } catch (e) {
      console.log(e)
    }
  };
  return(
<>
<Header />
<main className="tw-flex tw-flex-col tw-justify-center tw-items-center">
{product ?  (
        <>
            <Product
            id = {id}
            name = {product.product_name}
            type = {product.product_type}
            price = {product.price}
            img = {product.image_url}
            ingredients = {product.clean_ingreds}
            quantity = {product.quantity}
            handleAddToCart = {handleAddToCart}
            />
        </>) :
        (
          <div className="tw-flex tw-h-[calc(100vh-14rem)] tw-items-center tw-justify-center tw--mt-5">
            <CiShoppingBasket className="tw-animate-pulse tw-w-[20rem] tw-h-[20rem]" />
          </div>
        )
        }
         </main>
         <Footer />
</>
  );
}

export default ProductDetail;
