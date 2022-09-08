import {Link} from "react-router-dom";

function AuthorForm(){
    return<>
        <h1>Form Penulis</h1>

        <Link to={"/authors"}>
            Kembali ke Daftar Penulis
        </Link>

        <br/>        <br/>        <br/>

        <form>
            <label>
                Nama Penulis <br/>
                <input
                    type={"text"}
                />
            </label>

            <br/>        <br/>

            <button>
                Submit
            </button>

        </form>
    </>
}

export default AuthorForm