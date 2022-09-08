import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function AuthorList(){
    const [authors, setAuthors] = useState([])

    async function getAuthors() {
        const res = await fetch("http://localhost:3000/authors")
        const data = await res.json()
        setAuthors(data)
    }

    async function deleteAuthor(authorId) {
        await fetch('http://localhost:3000/authors/' + authorId, {
            method: 'DELETE'
        })

        getAuthors()
    }

    useEffect(() => {
        getAuthors()
    }, [])


    return<>
        <h1>Daftar Author</h1>

        <Link to={"/authors/form"}>
            Tambah Author
        </Link>

        <table width={"100%"} border={"1"}>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {authors.map(author =>
                        <tr key={author.id}>
                            <td>{author.author_name}</td>
                            <td>
                                <Link to={"/authors/form/" + author.id}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => deleteAuthor(author.id)}>Hapus</button>
                            </td>
                        </tr>
                    )}
            </tbody>
        </table>
    </>
}

export default AuthorList
