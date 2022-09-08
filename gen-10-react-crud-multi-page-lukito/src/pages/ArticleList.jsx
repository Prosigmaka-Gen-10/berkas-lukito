import {Link} from "react-router-dom";

function ArticleList() {
    return <>
        <h1>Daftar Artikel</h1>

        <Link to={"/articles/form"}>
            Buat Artikel
        </Link>

        <table width={"100%"} border={"1"}>
            <thead>
                <tr>
                    <th>Judul</th>
                    <th>Tanggal Publish</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Orang Keren</td>
                    <td>2022-09-08 12:39</td>
                    <td>
                        <button>Edit</button>
                        <button>Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
}

export default ArticleList