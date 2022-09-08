import {Link, Outlet} from "react-router-dom";

function App(){
    return<>
        <div className={"App"}>
            <nav>
                <Link to={"/articles"}>
                    Daftar Artikel
                </Link>
                &nbsp;  |   &nbsp;
                <Link to={"/categories"}>
                    Daftar Kategori
                </Link>
                &nbsp;  |   &nbsp;
                <Link to={"/authors"}>
                    Daftar Penulis
                </Link>
            </nav>

            <br/>

            <Outlet/>

        </div>
    </>
}

export default App