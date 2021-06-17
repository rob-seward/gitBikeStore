import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 4px solid ${props => (props.isActive ? 'blue' : '#eee')};
  
`;


const ImageGalleryWrapper = styled.div`
 >div:first-child{
     
    border: 5px solid pink;
   
    
    
}

>div:last-child{
    border: 5px solid #bada55;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    

    @media(min-width:768px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media(min-width:1024px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
    
`;




function ImageThumbnail({ image, onClick, isActive}) {
   
    const handleClick = ()=> {
        
        onClick(getImage(image));
    };

        return (
            <ImageThumbnailWrapper onClick={handleClick} isActive={isActive} >
                <GatsbyImage   
                 image={getImage(image)}
                  alt=""
                  />
                  
            </ImageThumbnailWrapper>
        
        );
}


export default function ImageGallery({images, selectedVariantImageId}){




    //need to finish setting to feture image
    const [activeImageThumbnail, setActiveImageThumbnail]=React.useState(
         // need to add detaure to change to selectedVariant
         getImage(images[0])
        
    );

    
    const activeImageId = ((getImage(activeImageThumbnail).images.fallback.src));  

//if the active thumbnail changes it will go off and restset to the new slected one
/*React.useEffect(()=> {
    setActiveImageThumbnail(
        images.find(({id})=> id === selectedVariantImageId) || images[0]
    );
}, [selectedVariantImageId, images, setActiveImageThumbnail]);*/

   
    const handleClick =(image)=> {
        setActiveImageThumbnail(image);
    }
    
    return (
        <ImageGalleryWrapper>
            <div>
                <GatsbyImage  image={activeImageThumbnail} alt="feature image"/>
                
            </div>
            <div>
                {images.map((image)=> {
                    const Id = ((getImage(image).images.fallback.src));
                
                    return (
                        <ImageThumbnail  isActive={activeImageId === Id} onClick={handleClick} image={image} key={image.id}
                        />
                    )
                })}
            </div>
        </ImageGalleryWrapper>
    );
    
      
    
};


