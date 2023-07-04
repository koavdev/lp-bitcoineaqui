import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import DataTable from 'react-data-table-component'

const comercio = () => {
  const columns = [
    {
      name: 'Tipo',
      selector: row => row.tipo
    },
    {
      name: 'Estabelecimento',
      selector: row => row.nome,
      sortable: true
    },
    {
      name: 'Telefone',
      selector: row => row.telefone,
      sortable: true
    },
    {
      name: 'Instagram',
      selector: row => row.instagram,
      sortable: true
    }
  ];

  const data = require('../Utils/Pontos.json')

  return (
    <div>
        <Navbar/>
        <div className='page-container' style={{border: '1px solid red'}}>
          <div className='comercio-table'>
            <DataTable columns={columns} data={data}>

            </DataTable>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default comercio