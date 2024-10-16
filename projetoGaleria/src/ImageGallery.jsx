// ImageGallery.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ImageGallery.css';

const ImageGallery = () => {
    const images = [
        { id: 1, src: 'Mario.jpg', title: 'Imagem 1', description: 'Descrição da Imagem 1' },
        { id: 2, src: 'caminho-da-imagem2.jpg', title: 'Imagem 2', description: 'Descrição da Imagem 2' },
        { id: 3, src: 'caminho-da-imagem3.jpg', title: 'Imagem 3', description: 'Descrição da Imagem 3' },
        { id: 4, src: 'caminho-da-imagem4.jpg', title: 'Imagem 4', description: 'Descrição da Imagem 4' },
        { id: 5, src: 'caminho-da-imagem5.jpg', title: 'Imagem 5', description: 'Descrição da Imagem 5' },
        { id: 6, src: 'caminho-da-imagem6.jpg', title: 'Imagem 6', description: 'Descrição da Imagem 6' },
        { id: 7, src: 'caminho-da-imagem7.jpg', title: 'Imagem 7', description: 'Descrição da Imagem 7' },
        { id: 8, src: 'caminho-da-imagem8.jpg', title: 'Imagem 8', description: 'Descrição da Imagem 8' },
        { id: 9, src: 'caminho-da-imagem9.jpg', title: 'Imagem 9', description: 'Descrição da Imagem 9' }
    ];

    return (
        <div className="image-gallery">
            {images.map((image) => (
                <div key={image.id} className="image-item">
                    <Link to={`/image/${image.id}`}>
                        <img src={image.src} alt={image.title} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
