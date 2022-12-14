import axios from "axios"
import { useEffect, useState } from "react"

import Spinner from '../Spinner'
import {Link} from "react-router-dom";

export default function CrudApi () {
  const originalForm = {
    name: '',
    category: ''
  }

  const [products, setProducts] = useState([])
  const [formInput, setFormInput] = useState({...originalForm})
  const [isLoading, setIsLoading] = useState(true)

  async function getProductList () {
    try {
      setIsLoading(true)
      const response = await axios.get('http://localhost:3004/products')

      console.log(response.data)
      setProducts(response.data)

      //console.log('saya harusnya diakhir jalannya')
    } catch (err) {
      console.log(err)
      alert('Terjadi masalah saat memproses data')
    } finally {
      setIsLoading(false)
    }
  }

  function handleSubmit (event) {
    event.preventDefault()

    if (formInput.id) { // kalau ada id nya pasti mengupdate
      updateProduct()
    }
    else {
      createProduct()
    }

    setFormInput({...originalForm})
  }

  function createProduct () {

    if(formInput.name===""&&formInput.category===""){
      alert("Salah satu data tidak boleh kosong!")
    }
    else{
      setIsLoading(true)
      axios
          .post('http://localhost:3004/products', formInput)
          .then(() => {
            getProductList()
          })
          .catch(err => {
            console.log(err)
            alert('Ada masalah saat memproses data')
          })
          .finally(() => {
            setIsLoading(false)
          })
    }


  }

  function updateProduct () {
    setIsLoading(true)
    axios
        .put('http://localhost:3004/products/' + formInput.id, formInput)
        .then(() => {
          getProductList()
        })
        .catch(err => {
          console.log(err)
          alert('Ada masalah saat memproses data')
        })
        .finally(() => {
          setIsLoading(false)
        })
  }

  function deleteProduct (productId) {
    setIsLoading(true)
    axios
        .delete('http://localhost:3004/products/' + productId)
        .then(() => {
          getProductList()
        })
        .catch(err => {
          console.log(err)
          alert('Ada masalah saat memproses data')
        })
        .finally(() => {
          setIsLoading(false)
        })
  }

  function handleInput (event, propName) {
    const currentFormInput = {...formInput}
    currentFormInput[propName] = event.target.value
    setFormInput(currentFormInput)
  }

  function prepareUpdate (product) {
    setFormInput({...product})
  }

  useEffect(() => {
    getProductList()
  }, [])

  if (isLoading) return <Spinner />

  return <>
    <form onSubmit={event => handleSubmit(event)}>
      <h2>Form Produk:</h2>

      <label>
        Nama Produk:
        <input
            type="text"
            value={formInput.name}
            onChange={event => handleInput(event, 'name')} />
      </label>

      <br /><br />

      <label>
        Kategori Produk:
        <input
            type="text"
            value={formInput.category}
            onChange={event => handleInput(event, 'category')} />
      </label>

      <br /><br />

      <button>
        Submit
      </button>
    </form>

    <br /><hr /><br />

    <h2>Daftar Produk:  <Link to={"/subproduct"}><button>View Sub-Products</button></Link></h2>
    <ul>
      {products.map(product =>
          <li key={product.id}>
            {product.name} {product.category}

            &nbsp;&nbsp;
            <button onClick={() => prepareUpdate(product)}>
              Update
            </button>

            &nbsp;&nbsp;
            <button onClick={() => deleteProduct(product.id)}>
              Delete
            </button>
          </li>
      )}
    </ul>
  </>
}