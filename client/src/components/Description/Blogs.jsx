import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyCarousel.css';

function MyBlogCarousel() {
    return (
        <div className="carousel-container">
        <h2 className="carousel-title">Read what experts have to say!</h2>
        <Carousel>
            <Carousel.Item>           
            <div className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Images/cream.jpg" />
                <Card.Body>
                    <Card.Title>Skin Care</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Images/haircare.jpg" />
                <Card.Body>
                    <Card.Title>Hair Care</Card.Title>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Images/lipoil.jpg" />
                <Card.Body>
                    <Card.Title>Skin Care</Card.Title>
                    
                </Card.Body>
            </Card>
           </div>
          </Carousel.Item>
          <Carousel.Item style={{ backgroundImage: '/Images/feather-bg.jpg' }}>
          <div className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Images/makeup2.jpg" />
                <Card.Body>
                    <Card.Title>Make Up</Card.Title>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Images/mascara.jpg" />
                <Card.Body>
                    <Card.Title>Make Up</Card.Title>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Images/newProd.jpg" />
                <Card.Body>
                    <Card.Title>Make Up</Card.Title>
                    
                </Card.Body>
            </Card>
            </div>
          </Carousel.Item>
        </Carousel>
        </div>
      );
    };
    export default MyBlogCarousel;
