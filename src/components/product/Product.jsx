import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAllProducts, useWishlistInventory } from "../app/Hook";
import StarGeneration from "./StarGeneration";


function Product({ product }) {
    // Custom Hook
    const { setAllProducts } = useAllProducts();
    const { setWishlistInventory } = useWishlistInventory()

    // use to naviage to the product page while keeping the button nature color
    const redirect = useNavigate();

    // Status used to manage the button
    const [wishlistStatus, setWishlistStatus] = useState(product.wishlist)

    // Handled the onClick of the button to add to wishlist
    function handleAddToWishlist() {
        if (wishlistStatus) {
            // Remove it from wishlist
            setWishlistInventory((prevWishlist => prevWishlist.filter(prevProduct => prevProduct.name !== product.name)))

            setAllProducts(prevProducts => prevProducts.map(prevProduct => (
                prevProduct.name === product.name ? { ...prevProduct, wishlist: false } : prevProduct
            )));

            setWishlistStatus(false)
        } else {
            // Adding to wishlist
            setWishlistInventory(prev => [...prev, {
                // Only added the products required information
                timeadded: prev.length,
                name: product.name,
                price: product.price,
                section: product.section,
                image: product.image,
                description: product.description,
                rating: product.rating,
                review: product.review,
                size: "Not Selected",
                color: "Not Selected"
            }]);

            setAllProducts(prevProducts => prevProducts.map(prevProduct => (
                prevProduct.name === product.name ? { ...prevProduct, wishlist: true } : prevProduct
            )));

            setWishlistStatus(true)
        }
    }

    // Handle the button press to add to cart
    function handleAddToCartButton() {
        // redirect to product page
        redirect(`/product/${product.name.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`)
    }

    return (
        <div className="product-card" >
            {/* Product img */}
            {/* Link to product page */}
            <Link
                to={`/product/${product.name.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`}
                className="product-card__img-container"
            >
                <img
                    className="product-card__img"
                    src={`./productimage/${product.section}/${product.image}`}
                    alt={product.image} />
            </Link>
            <button
                className="product-card__wishlist-button"
                onClick={() => { handleAddToWishlist() }}
                data-status={wishlistStatus}
            />
            {/* Product information */}
            <div className="product-card__content-container">
                <Link
                    to={`/product/${product.name.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`}
                    className="product-card__name"
                >{product.name}</Link>
                <p className="product-card__description">{product.description}</p>
                <p className="product-card__price">{`$${product.price}`}</p>
                <div className="product-card__rating-container">
                    <StarGeneration product={product} />
                    <button
                        className="product-card__button"
                        onClick={() => {handleAddToCartButton()}}
                    >Add to Cart</button>
                </div>

            </div>

        </div>
    )
}

export default Product
