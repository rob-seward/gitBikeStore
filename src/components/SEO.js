
import React from 'react';
import { Helmet } from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';


export default function SEO({children, title, description}) {

    const { site } = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
              description
              hrefLang
              siteImage
              siteTitleDefault
              siteUrl
              title
              twitter
              viewport
            }
          }
    }


`);

    return(
        <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
            <html lang="en"/>
            <title>{title}</title>
           
            

        </Helmet>
    );
}