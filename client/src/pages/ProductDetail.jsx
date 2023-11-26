import React ,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product/Product";
import { useSelector, useDispatch} from 'react-redux';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CiShoppingBasket } from "react-icons/ci";

function ProductDetail() {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState();
  const { id } = useParams();
  const user = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // setLoading(true);
        const response = await fetch(`/api/products/${id}`);        
        const data = await response.json();
        setProduct(data); 
        // setTimeout(() => {
        //   setLoading(false);
        // }, 900); 
        console.log("XXX")       
        console.log(data)
        console.log(product);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchProductData();
    console.log(product);

  }, []);

  const handleAddToCart = async () => {
    console.log(id)
    console.log(user)
    if(!user){
      //todo - error msg?
      return false;
    }
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user: user, product: products, quantity: 1}),
      });
      console.log(response);
    } catch (e) {
      console.log(e)
    }
  };
  console.log("XXX-1")
  console.log(product);
  return(
<>
<Header />
<main className="tw-h-[calc(100vh-3.5rem)]">
{product ?  (
          <Product
          id = {id}
          name = {product.product_name}
          type = {product.product_type}
          price = {product.price}
          img = {product.image_url}
          quantity = {quantity}
          handleAddToCart = {handleAddToCart}
        />) :
        (
          <div className="tw-flex tw-h-[calc(100vh-14rem)] tw-items-center tw-justify-center tw--mt-5">
            <CiShoppingBasket className="tw-animate-pulse tw-w-[20rem] tw-h-[20rem]" />
          </div>
        )
        }
         <Footer />
         </main>
</>
  );
}

export default ProductDetail;
