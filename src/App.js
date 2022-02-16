import {
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Header from './components/Header';
import HomePg from './screens/Home';
import store from './store';
import {
  addListProduct,
  addProduct,
  delProduct,
} from './store/actions/products/productActions';
import CustumTable from './components/general/CustumTable.js';
import { useEffect, useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
import CustumDataGrid from './components/general/CustumDataGrid';

const Input = styled('input')({
  display: 'none',
});

const initialData = () => ({
  id: 0,
  title: '',
  description: '',
  image: '',
});

const App = () => {
  const [produit, setProduit] = useState(initialData);
  const [selected, setSelections] = useState([]);

  const listProd = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const getData = () => {
    fetch('http://localhost:8000/produits')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(addListProduct(data));
      });
  };

  const saveProduit = () => {
    setProduit((item) => ({
      ...item,
      id: listProd.length + 1,
    }));
    console.log('hello');
    // console.log("IDDDDDDDDD : ", produit);
    dispatch(addProduct(produit));
  };

  useEffect(() => {
    getData();
  }, []);

  const onSelectionChange = (seletecdIds) => {
    setSelections(seletecdIds);
  };

  return (
    <div className='container' style={{ margin: 10 }}>
      <br />
      {/* <Header title="Write your message" /> */}
      {/* <HomePg /> */}

      <div style={{ marginBottom: 5 }}>
        <TextField
          required
          id='outlined-required'
          label='Titre'
          value={produit.title}
          onChange={(e) => {
            setProduit((data) => ({
              ...data,
              title: e.target.value,
            }));
          }}
        />
        <TextField
          required
          id='outlined-required'
          label='Description'
          value={produit.description}
          onChange={(e) =>
            setProduit((data) => ({
              ...data,
              description: e.target.value,
            }))
          }
        />
        <label htmlFor='contained-button-file'>
          <Input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
          />
          <Button variant='contained' component='span'>
            Upload
          </Button>
        </label>
      </div>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={8} md={8}>
          <Card>
            {/* <CustumTable data={listProd} /> */}
            <CustumDataGrid
              data={listProd}
              onSelectionChange={onSelectionChange}
            />
          </Card>
        </Grid>

        <Grid item xs={4} md={4}>
          <Stack spacing={1}>
            <Button
              variant='contained'
              color='success'
              onClick={() => {
                saveProduit();
              }}
            >
              Ajouter
            </Button>
            <Button
              variant='contained'
              color='success'
              onClick={() => {
                console.log('selected items: ', selected);
              }}
            >
              Modifier
            </Button>
            <Button
              variant='contained'
              color='success'
              onClick={() => {
                console.log('Before delete: ', listProd);
                dispatch(delProduct(selected));
                console.log('After delete: ', listProd);
              }}
            >
              Supprimer
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
