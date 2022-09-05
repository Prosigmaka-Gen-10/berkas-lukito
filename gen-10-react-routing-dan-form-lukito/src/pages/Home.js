import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return <>

        <p>Click button below to see Catalog</p>
        <Link to={"/catalog"}>
            <button>Click Here</button>
        </Link>
    </>
}

export default Home