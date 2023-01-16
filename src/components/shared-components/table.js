import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

const columns = [
  { id: 'id', label: 'Product Id', minWidth: 170, align: 'left' },
  { id: 'title', label: 'Product Name', minWidth: 100, align: 'left' },
  {
    id: 'action',
    label: 'Actions',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },

];


const ProductTable = ({ tableData, setallproducts, setShowModal, setrowid }) => {
  // console.log("length",rows.length)

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [productId, setProductId] = useState("");
  const [ProductName, setProductName] = useState("");
  const [filtedata, setFilterData] = useState([tableData]);

  //  setFilterData(tableData)
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSearch = async () => {
    if (productId && !ProductName) {
      const response = await axios.get(`https://dummyjson.com/products/${productId}`)
      setallproducts([response.data])
    }
    else if (ProductName && !productId) {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${ProductName}`)
      setallproducts(response.data.products)
    }
    else {
      console.log('Hello');
      setallproducts([])
    }
  }

  const handleModal = (Id) => {
    setShowModal(true)
    setrowid(Id)
  }




  //  useEffect(()=>{
  //   const searchitem = tableData.filter((data)=> {
  //     if (data.title.toLocaleString().includes(ProductName.toLocaleString()) ){
  //     return data
  //     }
  //   })
  //   setFilterData(searchitem)
  //  },[tableData,ProductName,productId])





  return (
    <Paper mt={10} sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={1}>
                Product Id
              </TableCell>
              <TableCell align="left" colSpan={1}>
                Product Name
              </TableCell>
              <TableCell align="left" colSpan={1}>
                Actions
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" colSpan={1}>
                <TextField id="outlined-basic" label="Product Id" variant="outlined" onChange={(e) => setProductId(e.target.value)} />
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <TextField id="outlined-basic" label="Product Name" variant="outlined" onChange={(e) => setProductName(e.target.value)} />
              </TableCell>
              <TableCell align="left" colSpan={1}>
                <Button variant="contained" onClick={handleSearch}>Search</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {
              tableData
                .slice((page * rowsPerPage), page * rowsPerPage + rowsPerPage)

                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                      {columns.map((column) => {
                        {/* console.log(column.id) */ }
                        const value = row[column.id];
                        {/* console.log("value",value) */ }

                        return (
                          <>
                            <TableCell key={column.id} align={column.align}>
                              {value}
                              {!value && <Button id={row.id} onClick={() => handleModal(row.id)}>Edit</Button>}
                            </TableCell>
                          </>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default ProductTable;