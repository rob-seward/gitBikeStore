import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export function HomePageHero() {
    return (<StaticImage 
    src="../assets/images/whip.jpg"
    alt="big whip"
    loading="eager"

      placeholder="blurred"
      objectFit="cover"
      objectPosition="10% 10%"
      
      width={1100}
      height={600} />)
      
      ;
}