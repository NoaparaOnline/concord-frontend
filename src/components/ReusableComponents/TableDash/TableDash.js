import React from 'react'

const TableDash = () => {
    return (
        <div className="table-responsive">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Market & Address</th>
      <th scope="col">Order Date/Time</th>
      <th scope="col">Proceed By</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default TableDash
