import * as React from "react"

import Layout from './src/components/Layout';
import { StoreProvider } from "./src/context/store-context"


/*export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)*/


export function wrapPageElement({ props, element }) {
  return <Layout {...props}>{element}</Layout>;
}

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)



