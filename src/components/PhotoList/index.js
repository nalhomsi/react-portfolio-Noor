import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: '0.jpg',
      category: 'Photography',
      
    },
    {
      name: '1.jpg',
      category: 'Photography',
    
    },
    {
      name: '2.jpg',
      category: 'Photography',
    
    },
    {
      name: '3.jpg',
      category: 'Photography',
      
    },
    {
      name: '0.jpg',
      category: 'Syria',
      
    },
    {
      name: '1.jpg',
      category: 'Syria',
      
    },
    {
      name: '2.jpg',
      category: 'Syria',
    
    },
    {
      name: '3.jpg',
      category: 'Syria',
     
    },
    {
      name: '4.jpg',
      category: 'Syria',
      
    },
    {
      name: '0.jpg',
      category: 'Web Design',
      description: 'https://stark-eyrie-54944.herokuapp.com">'
     
      
    },
    {
      name: '1.jpg',
      category: 'Web Design',
      description: 'https://github.com/nalhomsi/social-studies'
      
    },
    {
      name: '2.jpg',
      category: 'Web Design',
      description: 'https://piscine-croissant-81316.herokuapp.com'
    },
    {
      name: '3.jpg',
      category: 'Web Design',
      description: 'https://nalhomsi.github.io/Weather-dashboard'
  
    },
    {
      name: '4.jpg',
      category: 'Web Design',
      description: 'https://young-hollows-30133.herokuapp.com'
  
    },
    {
      name: '5.jpg',
      category: 'Web Design',
      description: 'https://nalhomsi.github.io/workday-scheduler'
  
    },
    
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
