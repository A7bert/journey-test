import React from 'react'
import ReactDOM from 'react-dom'
import ProductTable from './ProductTable'
import LawnmowerRepository from '../repositories/LawnmowerRepository'

import renderer from 'react-test-renderer'

it("renders without crashing", () => {
  const div = document.createElement("div");
  const products = new LawnmowerRepository().getAll();
  ReactDOM.render(<ProductTable products={products} currency="NZD"></ProductTable>, div);
})

it("matches snapshot", () => {
  const products = new LawnmowerRepository().getAll();
  const tree = renderer.create(<ProductTable products={products} />).toJSON()
  expect(tree).toMatchSnapshot();
})
