import {Link} from "react-router-dom";

function AuthorList(){
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
            <tr>
                <td>Fani</td>
                <td>
                    <button>Edit</button>
                    <button>Hapus</button>
                </td>
            </tr>
            </tbody>
        </table>
    </>
}

export default AuthorList