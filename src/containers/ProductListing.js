import React from "react";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productsActions";

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });

      // console.log("response", response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductListing;
