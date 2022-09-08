import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function AuthorForm(){
    const navigate=useNavigate()
    const param  =useParams()
    const isEditing = param.authorId

    const [formInput, setFormInput]=useState({
        author_name: '',
    })


    function handleInput(event, inputName){
        const copyFormInput = {...formInput}
        copyFormInput[inputName] = event.target.value
        setFormInput(copyFormInput)
    }


    async function handleSubmit (event){
        event.preventDefault()

        const payload = JSON.stringify(formInput)

        const targetUrl = isEditing ?
            'http://localhost:3000/authors/' + param.authorId
            :
            'http://localhost:3000/authors/'

        const method = isEditing ? "PUT" : "POST"
        await fetch(targetUrl, {
            method:method,
            body: payload,
            headers:{
                "Content-Type":"application/json"
            }
        })

        navigate("/authors")
    }

    async function getAuthorDetail(){
        const res = await fetch("http://localhost:3000/authors/"+ param.authorId)
        const data = await res.json()
        setFormInput(data)
    }

    useEffect(()=>{
        if (isEditing){
            getAuthorDetail()
        }
    }, [])


    return<>
        <h1>Form Penulis</h1>

        <Link to={"/authors"}>
            Kembali ke Daftar Penulis
        </Link>

        <br/>        <br/>        <br/>

        <form onSubmit={event => handleSubmit(event)}>
            <label>
                Nama Penulis <br/>
                <input
                    type={"text"}
                    value={formInput.author_name}
                    onChange={event => handleInput(event, "author_name")}/>
            </label>

            <br/>        <br/>

            <button>
                Submit
            </button>

        </form>
    </>
}

export default AuthorForm
