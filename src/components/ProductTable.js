import React from 'react'
import Table from 'react-bootstrap/Table'

export default function ProductTable({currency, products}) {
  return (
    <div data-testid="table">
      <Table striped hover>
        <thead>
          <tr>
            <td colSpan='3'>Products ({currency}) </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {
            // ideally would use UUID for product id, but the id in the data is sequential
            products.map(product => {
              return (
                <tr key={`${product.id}-${product.type}`}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.type}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}
