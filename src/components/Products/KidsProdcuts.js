import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './products.css'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Kurtha',
    description: 'New Model Dress Party Wear Kids [Boys]',
    price: '1550.00',
    image: 'https://i.pinimg.com/736x/08/9e/e3/089ee3df4b6868942e7eaa8edc9ae936.jpg',
  },
  {
    id: 2,
    name: 'Party Wear Gowns',
    description: 'New Model Dress Party Wear Kids [Girls]',
    price: '2700.00',
    image: 'https://img.faballey.com/images/Product/IGS00501Z/d3.jpg',
  },
  {
    id: 3,
    name: 'Casual Outfit + Coat ',
    description: 'Casual Outfit For Kids(Party-Wear) [Boys]',
    price: '2550.00',
    image: 'https://i.pinimg.com/originals/76/e0/65/76e0656f134e791e6d9c8f5979005948.jpg',
  },
  {
    id: 4,
    name: 'Yellow Short Gown',
    description: 'Cotton Short Gown For Kids [Girls]',
    price: '1850.00',
    image: 'https://img.tatacliq.com/images/i11/437Wx649H/MP000000017809205_437Wx649H_202306021800371.jpeg',
  },
  {
    id: 5,
    name: 'Party Wear',
    description: 'Trending Party Wear Western Model [Boys]',
    price: '3860.00',
    image: 'https://staranddaisy.in/wp-content/uploads/2022/09/sndcat28922_boyspd.jpg',
  },
  {
    id: 6,
    name: 'Traditional Gown',
    description: 'Traditional Gown For Kids [Girls]',
    price: '1890.00',
    image: 'https://i.pinimg.com/736x/67/b8/df/67b8dfe76133d78fc8a90d2611a742d9.jpg',
  },
  
];

const KidsProductsPage = ({  direction = 'left' }) => {

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
    <div className='container3'>
      <h3 className="text-left mb-2 mt-2"><Link to='/kids' className='link-body'>Kid's</Link></h3>
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

export default KidsProductsPage;
