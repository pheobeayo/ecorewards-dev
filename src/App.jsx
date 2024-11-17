import react, { useState } from 'react'
import AllRoutes from "./config/AllRoutes"
import { configWeb3Modal } from "./connection";
import '@coinbase/onchainkit/styles.css';
import OnchainProviders from './components/OnchainProvider';

configWeb3Modal();

function App() {

  return (
    <OnchainProviders>
       <AllRoutes/>
  </OnchainProviders>
  )
}

export default App
