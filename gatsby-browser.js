import * as React from "react"

import Layout from './src/components/Layout';
import { ProductContextProvider } from './src/context/product-context';
import { StoreProvider } from "./src/context/store-context"



/*export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)*/


export function wrapPageElement({ props, element }) {
  return <Layout {...props}>{element}</Layout>;
}

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>
    <StoreProvider>{element}</StoreProvider>
  </ProductContextProvider>
)



