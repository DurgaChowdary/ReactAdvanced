import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

// If we are trying to do image.url if there is no image in one of the objects in the array, it will throw an error
const Product = ({image, name, price}) => {
  return <article className='product'>
    <h4>{name}</h4>
    <img src={image ? image.url : defaultImage} alt="" />
    <h5>${price || 3.99}</h5>
  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
// Product.defaultProps = {
//   name: 'Default Name',
//   image: {url : defaultImage},
//   price: 3.99
// }
export default Product;
