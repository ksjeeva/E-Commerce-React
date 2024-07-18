import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './products.css'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: ' Churidar',
    description: 'Ladies Designer Embroidered Churidar',
    price: '1500.00',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/SG/HZ/QB/146545271/green-500x500.jpg',
  },
  {
    id: 2,
    name: 'Gown',
    description: 'Ladies Designer Model Gown',
    price: '990.00',
    image: 'https://i.pinimg.com/564x/49/c4/23/49c4233ba07b0b1b89151009cc214c72.jpg',
  },
  {
    id: 3,
    name: 'Saree Gown',
    description: 'Ladies Designer Saree Gown',
    price: '1200.00',
    image: 'https://www.bullionknot.com/cdn/shop/files/Queenmin_1.jpg?v=1710739952',
  },
  {
    id: 1,
    name: ' Churidar',
    description: 'Ladies Designer Embroidered Churidar',
    price: '1500.00',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/SG/HZ/QB/146545271/green-500x500.jpg',
  },
  {
    id: 2,
    name: 'Gown',
    description: 'Ladies Designer Model Gown',
    price: '990.00',
    image: 'https://i.pinimg.com/564x/49/c4/23/49c4233ba07b0b1b89151009cc214c72.jpg',
  },
  {
    id: 3,
    name: 'Saree Gown',
    description: 'Ladies Designer Saree Gown',
    price: '1200.00',
    image: 'https://www.bullionknot.com/cdn/shop/files/Queenmin_1.jpg?v=1710739952',
  },
  
];

const WomenProducts = ({ direction = 'left' }) => {

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
      style={{ marginBottom: '20px' }}
    >
    <div className='container2'>
      <h3 className="text-left mb-2 mt-2"><Link to='/women' className='link-body'>Women's</Link></h3>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} lg={2} className="mb-4">
            <Card className='card'>
              <Card.Img variant="top" src={product.image} alt={product.name} className='pro-img' />
              <Card.Body className='p-cont'>
                <Card.Title className='p-name'>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>&#8377;{product.price}</strong></Card.Text>
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

export default WomenProducts;
