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
        return row.nome.toLowerCase().includes(event.target.value.toLowerCase())
    });    
    setRecords(newData);
  };


  const bitcoinTheme = {
    rows: {
      style: {
        backgroundColor: "#ff8f2eaf",
        fontWeight: "bold",
        fontSize: "14px",
      },
      highlightOnHoverStyle: {
        backgroundColor: '#b1a69caf',
      },
    },
    head: {
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    headRow: {
      style: {
        backgroundColor: "orange",
      }
    },
    
  }

  return (
    <div>
        <Navbar/>
        <div className='page-container'>
          <div className='comercio-heading'>
            <p className='primary-subheading'>Comércio</p>
            <h1>Onde Aceitam Bitcoin?</h1>
          </div>
          <div className='comercio-table-filter'>
            <div>
              <label>Pesquisar</label>
              <input type="text" onChange={handleFilter} />
            </div>           
          </div>          
          <DataTable
          columns={columns}
          data={records}
          pagination
          highlightOnHover
          pointerOnHover
          striped
          customStyles={bitcoinTheme}>
          </DataTable>              
        </div>
      <Footer/>
    </div>
  )
}

export default Comercio