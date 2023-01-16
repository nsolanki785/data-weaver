import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import axios from "axios";

const Editform = ({ rowid, onClose }) => {
  const [showformproductdata, setshowformproductdata] = useState({
    brand: '',
    category: '',
    price: '',
    rating: '',
    stock: ''
  })
  const handlegeteditproduct = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${rowid}`)
    setshowformproductdata(response.data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("showformproductdata", showformproductdata);
  }
  const handleChange = (e) => {
    // setContactInfo({ ...showformproductdata, [e.target.name]: e.target.value });
  };




  useEffect(() => {
    handlegeteditproduct()
  }, [rowid])


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid sx={{
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
          mt={5}>
          <Grid item xs={12} sm={6} >
            <TextField
              fullWidth
              name="brand"
              id="brand"
              label="Product Brand"
              value={showformproductdata.brand}
              onChange={handleChange}
              type="text"

            />
          </Grid>

          <Grid item xs={12} sm={6} ml={5}>
            <TextField
              fullWidth
              name="" category
              id="category"
              label="Category"
              type="text"
              value={showformproductdata.category}
              onChange={handleChange}

            />
          </Grid>
        </Grid>
        <Grid sx={{
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
          mt={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="price"
              id="price"
              label="Price"
              type="text"
              value={showformproductdata.price}
              onChange={handleChange}

            />
          </Grid>

          <Grid item xs={12} sm={6} ml={5}>
            <TextField
              fullWidth
              type='rating'
              label='rating'
              placeholder='Rating'
              id="rating"
              value={showformproductdata.rating}
              onChange={handleChange}

            />
          </Grid>
        </Grid>
        <Grid sx={{
          display: 'flex',
          //  justifyContent: 'space-evenly'
        }}
          mt={5}>
          <Grid item xs={6} sm={6}>
            <TextField
              type='text'
              name='stock'
              label='Stock'
              placeholder='Stock'
              id='stock'
              value={showformproductdata.stock}
              onChange={handleChange}

            />
          </Grid>
        </Grid>
        <Grid
          display={'flex'}
          justifyContent={'end'}
          mt={3}
        >
          <Button variant='contained' sx={{ bgcolor: '#616161', marginRight: '5px' }} onClick={onClose}>Cancel</Button>
          <Button
            variant='contained'
            color="success"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            submit
          </Button>

        </Grid>
      </form>
    </>
  )

}

export default Editform;
