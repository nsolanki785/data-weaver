import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ProductTable from '../components/shared-components/table';
import axios from 'axios';
import Modal from '../components/shared-components/modal/modal';
import Editform from '../components/views/Editform';
import Sidebar from '../components/sidebar';
import { Stack } from '@mui/system';
import Paper from '@mui/material/Button';


const Products = () => {
  const [allproducts, setallproducts] = useState([]);
  const [isShowModal, setShowModal] = useState(false);
  const [rowid, setrowid] = useState("");

  console.log("rowid", typeof rowid);
  const handlefetchprodoct = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    setallproducts(response?.data?.products)
  }

  useEffect(() => {
    handlefetchprodoct()
  }, [])
  console.log("all", allproducts);



  return (
    <>
      <Sidebar />
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          margin: 'auto',
          // justifyContent:'center',
          maxWidth: 1500,
          flexGrow: 1,
          marginTop: '10px',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}>
        <Grid container spacing={2}>
          <Grid mt={10} container sx={{ justifyContent: 'space-between' }}>
            <Grid item>
              <h1>Products</h1>
            </Grid>
            <Grid item>
              <Button variant='contained' color='success' sx={{ marginLeft: '10px', borderRadius: '10px' }}  >
                Add Products
              </Button>
              <Button variant='contained' color='success' sx={{ marginLeft: '10px', borderRadius: '10px' }}>
                Import
              </Button>
              <Button variant='contained' color='success' sx={{ marginLeft: '10px', borderRadius: '10px' }}>
                Export To Excel
              </Button>
            </Grid>

            <ProductTable tableData={allproducts} setallproducts={setallproducts} setrowid={setrowid} setShowModal={setShowModal} />

            <Modal
              open={isShowModal}
              onClose={() => setShowModal(false)}
              heading={"Edit Product Details"}
            >
              <Editform rowid={rowid} onClose={() => setShowModal(false)} />
            </Modal>
          </Grid>
        </Grid>
      </Paper>

    </>
  )
}

export default Products;