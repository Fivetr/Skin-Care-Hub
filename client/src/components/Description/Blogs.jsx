import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyBlogCarousel.css'

const App = () => {
  const data = [
    {
      imageUrl: '/Images/blog1.jpg',
      title: 'New serums to try!',
      description: 'Best serums in the skin care world, all reviewed just for you. Click to check the list out.',
      blogUrl: 'https://www.totalbeauty.com/content/slideshows/brightening-eye-serums-230706'
    },
    {
      imageUrl: '/Images/blog2.jpg',
      title: 'Your holiday gift guide!',
      description: 'Gift yourself and your loved ones these popular products. Click here to check them out.',
      blogUrl: 'https://www.totalbeauty.com/content/slideshows/holiday-gift-guide-2023-231106'
    },
    {
      imageUrl: '/Images/blog3.jpg',
      title: 'Treat acne scars with these products!',
      description: 'Make those scars disappear! Click here to know how.',
      blogUrl: 'https://www.totalbeauty.com/content/slideshows/scar-care-products-231120'
    },
    {
      imageUrl: '/Images/blog4.jpg',
      title: 'Best face moisturizers!',
      description: 'Find the best face moisturizers here. Click to know more',
      blogUrl: 'https://www.totalbeauty.com/review/the-best-face-moisturizers/'
    },
    {
      imageUrl: '/Images/blog5.jpg',
      title: 'Try these eye serums!',
      description: 'Say goodbye to those dark circles and pigmentation.Click here to know more.',
      blogUrl: 'https://www.totalbeauty.com/content/slideshows/brightening-eye-serums-230706'
    },
    {
      imageUrl: '/Images/blog6.jpg',
      title: 'New products to try in Dec 2023!',
      description: 'These are the hottest end of year skin-care trends. Click here to know more.',
      blogUrl: 'https://www.totalbeauty.com/content/slideshows/new-products-october-2023-231002'
    },
  ];

  return (
    <div className="container-fluid">
      <Carousel
        style={{ width: '100%', height: '100%', backgroundColor: '#F7DC6F' }}
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <h1 className="carousel-title">Blogs</h1>
          <p className="carousel-content">Explore the Ultimate Guide to Skincare Shopping with our curated selection of blogs. 
            Uncover expert tips, latest trends, and must-have products for your radiant skin journey.</p>
          <div className="d-flex justify-content-around align-items-center">
            {data.slice(0, 3).map((item, index) => (
              <Link to={item.blogUrl} key={index} className="image-link" target="_blank" rel="noopener noreferrer">
                <Card className='custom-card'>
                  <Card.Img className="d-block img-fluid" variant="top" src={item.imageUrl} alt={`Image ${index}`} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <h1 className="carousel-title">Blogs</h1>
          <p className="carousel-content">Explore the Ultimate Guide to Skincare Shopping with our curated selection of blogs. 
            Uncover expert tips, latest trends, and must-have products for your radiant skin journey.</p>
          <div className="d-flex justify-content-around align-items-center">
            {data.slice(3).map((item, index) => (
              <Link to={item.blogUrl} key={index + 3} className="image-link" target="_blank" rel="noopener noreferrer">
                <Card className='custom-card'>
                  <Card.Img className="d-block img-fluid" variant="top" src={item.imageUrl} alt={`Image ${index}`} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default App;