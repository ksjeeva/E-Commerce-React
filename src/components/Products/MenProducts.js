import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './products.css'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'White Trendy Shirt',
    description: 'New Model Dress Party Wear Mens Fashion Shirts ',
    price: '450.00',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2021/7/KA/NE/HL/133782081/product-jpeg.jpeg',
  },
  {
    id: 2,
    name: 'Party Wear',
    description: 'Lymio Men Stylish | (Beach-Floral-Bsy)',
    price: '700.00',
    image: 'https://m.media-amazon.com/images/I/71EZZ1usYnL._AC_UY1100_.jpg',
  },
  {
    id: 3,
    name: 'Dark Grey Formal ',
    description: 'This is a short description of Product 3.',
    price: '550.00',
    image: 'https://rukminim2.flixcart.com/image/300/300/cms-rpd-img/2f49b0f0947c434c8a0edf48480d5f18_18d7dceb945_SHTFZFTGHH54YXQU1.jpeg?q=90',
  },
  {
    id: 1,
    name: 'Black Shirt',
    description: 'Double pocket and Long sleeved solid slim fit ',
    price: '650.00',
    image: 'https://thesparkshop.in/wp-content/uploads/2022/10/new-spring-double-pocket-mens-fashion-shirt-brand-men-long-sleeved-solid-shirts-slim-fit-casual-men-shirt-social-extra-image-2.jpg',
  },
  {
    id: 2,
    name: 'Lycra Shirt',
    description: ' THE HELL DRIVER PLAIN PREMIUM LYCRA SHIRTS',
    price: '860.00',
    image: 'https://www.jiomart.com/images/product/original/rv0ycsza1w/the-hell-driver-plain-premium-lycra-shirts-exclusive-premium-lycra-fabric-100-cotton-shirts-exclusive-winter-collection-heavy-wash-pure-cotton-blue-color-shirt-for-men-product-images-rv0ycsza1w-5-202209052130.jpg?im=Resize=(500,630)',
  },
  {
    id: 3,
    name: 'Printed Shirt',
    description: 'Leaves Printed Mens Casual Shirt',
    price: '1000.00',
    image: 'https://i.pinimg.com/736x/8c/a8/fd/8ca8fdd6987409d3ecca6fffbe4f8b6c.jpg',
  },
  
];

const MenProductsPage = ({  direction = 'left' }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: .5 }}
      style={{ marginTop: '20px', marginBottom:'20px'}}
    >
    <div className='container1'>
      <h3 className="text-left mb-2 mt-2"><Link to='/Mens' className='link-body'>Men's</Link></h3>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} lg={2} className="mb-4">
            <Card className='card'>
              <Card.Img variant="top" src={product.image} alt={product.name} className='pro-img' />
              <Card.Body className='p-cont'>
                <Card.Title className='p-name'>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className='p-price'><strong>&#8377;{product.price}</strong></Card.Text>
                <Button variant="primary" className='adc-btn'>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </motion.div>
  );
};

export default MenProductsPage;
