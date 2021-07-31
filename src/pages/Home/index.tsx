import { useState } from 'react';

import './styles.css';

export function Home() {
  const [images,] = useState([
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
    }
  ]);

  return (
    <div className="home-container">
      {images.map(image => (
        <figure>
          <img
            key={image.id}
            src={image.url}
            alt={image.id.toString()}
          />
        </figure>
      ))}
    </div>
  )
}
