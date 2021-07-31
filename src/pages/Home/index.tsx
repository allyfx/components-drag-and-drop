import { useState, useCallback } from 'react';

import { Image } from '../../components/Image';

import './styles.css';

export function Home() {
  const [images, setImages] = useState([
    {
      "id": 1,
      "url": "https://images.unsplash.com/photo-1622495727422-badb2c5a688b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 2,
      "url": "https://images.unsplash.com/photo-1627532383712-981b37b4085c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
    },
    {
      "id": 3,
      "url": "https://images.unsplash.com/photo-1627637819794-fba32f82be16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
    },
    {
      "id": 4,
      "url": "https://images.unsplash.com/photo-1627656686255-09902499cf05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 5,
      "url": "https://images.unsplash.com/photo-1627520674084-741000ce383b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 6,
      "url": "https://images.unsplash.com/photo-1622495727422-badb2c5a688b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 7,
      "url": "https://images.unsplash.com/photo-1627532383712-981b37b4085c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
    },
    {
      "id": 8,
      "url": "https://images.unsplash.com/photo-1627637819794-fba32f82be16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
    },
    {
      "id": 9,
      "url": "https://images.unsplash.com/photo-1627656686255-09902499cf05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 10,
      "url": "https://images.unsplash.com/photo-1627520674084-741000ce383b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 11,
      "url": "https://images.unsplash.com/photo-1622495727422-badb2c5a688b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 12,
      "url": "https://images.unsplash.com/photo-1627532383712-981b37b4085c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
    },
    {
      "id": 13,
      "url": "https://images.unsplash.com/photo-1627637819794-fba32f82be16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
    },
    {
      "id": 14,
      "url": "https://images.unsplash.com/photo-1627656686255-09902499cf05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 15,
      "url": "https://images.unsplash.com/photo-1627520674084-741000ce383b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
  ]);

  const moveImage = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newImages = [...images];

      const dragItem = newImages[dragIndex];
      const hoverItem = newImages[hoverIndex];

      newImages[hoverIndex] = dragItem;
      newImages[dragIndex] = hoverItem;
      
      setImages(newImages);
    },
    [images],
  );

  return (
    <div className="home-container">
      <h1>Try dragging some image!</h1>
      <small>Tente arrastar alguma imagem</small>

      <div className="images-container">
        {images.map((image, index) => (
          <Image
            key={image.id}
            image={image}
            index={index}
            moveImage={moveImage}
          />
        ))}
      </div>
    </div>
  )
}
