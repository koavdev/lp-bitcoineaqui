import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import DataTable from 'react-data-table-component'

const Comercio = () => {
  const columns = [
    {
      name: 'Tipo',
      selector: row => row.tipo,
      sortable: true
    },
    {
      name: 'Nome',
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

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter(row => {
        return row.tipo.toLowerCase().includes(event.target.value.toLowerCase())
    })
    
    setRecords(newData);
  }

  return (
    <div>
        <Navbar/>
        <div className='page-container' style={{border: '1px solid red'}}>
          <div className='comercio-table-filter'>
            <input type="text" onChange={handleFilter} />
          </div>
            <DataTable columns={columns} data={records} selectableRows fixedHeader pagination>

            </DataTable>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Comercio