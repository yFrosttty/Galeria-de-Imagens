// ImageGallery.js
import React from 'react';
import './ImageGallery.css'; // Importando o CSS

const ImageGallery = () => {
    // Substitua os caminhos das imagens pelos seus arquivos
    const images = [
        'caminho-da-imagem1.jpg',
        'caminho-da-imagem2.jpg',
        'caminho-da-imagem3.jpg',
        'caminho-da-imagem4.jpg',
        'caminho-da-imagem5.jpg',
        'caminho-da-imagem6.jpg',
        'caminho-da-imagem7.jpg',
        'caminho-da-imagem8.jpg',
        'caminho-da-imagem9.jpg'
    ];

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image} alt={`Imagem ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
