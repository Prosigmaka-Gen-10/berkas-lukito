import axios from "axios"
import {useEffect, useState} from "react"

import Spinner from '../Spinner'
import {Link} from "react-router-dom";

export default function CrudApi2() {
    const originalForm = {
        noProducts: 0,
        nameBrand: "",
        series: "",
        year: 0
    }
    const [products, setProducts] = useState([])
    const [subProducts, setSubProducts] = useState([])
    const [formInput, setFormInput] = useState({...originalForm})
    const [isLoading, setIsLoading] = useState(true)


    async function getProductList() {
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

    async function getSubProductList() {
        try {
            setIsLoading(true)
            const response = await axios.get('http://localhost:3004/subproducts')

            console.log(response.data)
            setSubProducts(response.data)

            //console.log('saya harusnya diakhir jalannya')
        } catch (err) {
            console.log(err)
            alert('Terjadi masalah saat memproses data')
        } finally {
            setIsLoading(false)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (formInput.id) { // kalau ada id nya pasti mengupdate
            updateSubProduct()
        } else {
            createSubProduct()
        }

        setFormInput({...originalForm})
    }

    function createSubProduct() {


        if (formInput.nameBrand === "" && formInput.year === "" && formInput.series === "" && formInput.noProducts === "") {
            alert("Salah satu data tidak boleh kosong!")
        } else {
            if (formInput.noProducts.valueOf() > 0 && formInput.noProducts.valueOf() < products.length) {
                setIsLoading(true)
                axios
                    .post('http://localhost:3004/subproducts', formInput)
                    .then(() => {
                        getSubProductList()
                    })
                    .catch(err => {
                        console.log(err)
                        alert('Ada masalah saat memproses data')
                    })
                    .finally(() => {
                        setIsLoading(false)
                    })
            }
            else{
                alert("Gagalmenambahkan SubProduk, Id Produk belum ditambahkan sebelumnya ")
            }

        }

    }

    function updateSubProduct() {
        setIsLoading(true)
        axios
            .put('http://localhost:3004/subproducts/' + formInput.id, formInput)
            .then(() => {
                getSubProductList()
            })
            .catch(err => {
                console.log(err)
                alert('Ada masalah saat memproses data')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function deleteSubProduct(subProductId) {
        setIsLoading(true)
        axios
            .delete('http://localhost:3004/subproducts/' + subProductId)
            .then(() => {
                getSubProductList()
            })
            .catch(err => {
                console.log(err)
                alert('Ada masalah saat memproses data')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function handleInput(event, propName) {
        const currentFormInput = {...formInput}
        currentFormInput[propName] = event.target.value
        setFormInput(currentFormInput)
    }

    function prepareUpdate(subProduct) {
        setFormInput({...subProduct})
    }

    useEffect(() => {
        getSubProductList()
    }, [])

    useEffect(() => {
        getProductList()
    }, [])

    if (isLoading) return <Spinner/>

    return <>
        <form onSubmit={event => handleSubmit(event)}>
            <h2>Form Sub-Produk: <Link to={"/"}>
                <button>Back to Products</button>
            </Link></h2>

            <label>
                NO Produk:
                <input
                    type="number"
                    value={formInput.noProducts}
                    onChange={event => handleInput(event, 'noProducts')}/>
            </label>

            <br/><br/>

            <label>
                Nama Brand:
                <input
                    type="text"
                    value={formInput.nameBrand}
                    onChange={event => handleInput(event, 'nameBrand')}/>
            </label>

            <br/><br/>

            <label>
                Serie Produk:
                <input
                    type="text"
                    value={formInput.series}
                    onChange={event => handleInput(event, 'series')}/>
            </label>

            <br/><br/>

            <label>
                Tahun Produk:
                <input
                    type="number"
                    value={formInput.year}
                    onChange={event => handleInput(event, 'year')}/>
            </label>

            <button>
                Submit
            </button>
        </form>

        <br/>
        <hr/>
        <br/>

        <h2>Daftar Produk:</h2>
        <ul>
            {subProducts.map(subProduct =>
                <li key={subProduct.id}>
                    {subProduct.noProducts === 1 || subProduct.noProducts === "1" ? products[0].name + " " + products[0].category
                        :
                        subProduct.noProducts === 2 || subProduct.noProducts === "2" ? products[1].name + " " + products[1].category
                            : subProduct.nameBrand === 3 || subProduct.noProducts === "3" ? products[2].name + " " + products[2].category
                                : subProduct.noProducts === 4 || subProduct.noProducts === "4" ? products[3].name + " " + products[3].category
                                    : subProduct.noProducts === 5 || subProduct.noProducts === "5" ? products[4].name + " " + products[4].category : ""} |
                    Brand: {subProduct.nameBrand} {subProduct.series} {subProduct.year}

                    &nbsp;&nbsp;
                    <button onClick={() => prepareUpdate(subProduct)}>
                        Update
                    </button>

                    &nbsp;&nbsp;
                    <button onClick={() => deleteSubProduct(subProduct.id)}>
                        Delete
                    </button>
                </li>
            )}
        </ul>
    </>
}
