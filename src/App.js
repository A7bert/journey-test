import React from 'react'
import './App.css'
import ProductDataConsolidator from './ProductDataConsolidator'
import ProductTable from './components/ProductTable'

function App() {
  return (
    <div className="App container">
      <ProductTable currency="NZD" products={ProductDataConsolidator.get()} />
      <ProductTable currency="USD" products={ProductDataConsolidator.getInUSDollars()} />
      <ProductTable currency="EURO" products={ProductDataConsolidator.getInEuros()} />
    </div>
  );
}

export default App;
