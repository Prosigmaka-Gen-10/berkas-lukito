import React from "react";
import {Link, Outlet, useParams} from "react-router-dom";


function Review() {
    const param = useParams();
    return <>
        {
            param.namasubproduk === "gitar pemula 1 yahmahal" ? <>
                    <h5>Review</h5>
                    <ul>
                        <li>Barang ori, bintang 3 dulu</li>
                        <li>Barangnya jelek, tidak rekomnded</li>
                        <li>Penjual tidak ramah, Bintang 1 dulu</li>
                    </ul>
                </>
                : param.namasubproduk === "gitar pemula 2 yahmurah" ? <>
                    <h5>Review</h5>
                    <ul>
                        <li>Barang ori, bintang 3 dulu</li>
                        <li>Penjual tidak ramah, Bintang 1 dulu</li>
                    </ul>
                </> : param.namasubproduk === "bass pemula 1 yahmahal" ? <>
                    <h5>Review</h5>
                    <ul>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                    </ul>
                </> : param.namasubproduk === "bass pemula 2 yahmurah" ? <>
                    <h5>Review</h5>
                    <ul>
                        <li>Barang ori, bintang 1 dulu</li>
                    </ul>
                </> : param.namasubproduk === "drum pemula 1 yahmahal" ? <>
                    <h5>Review</h5>
                    <ul>
                        <li>Penjual tidak ramah, Bintang 1 dulu</li>
                    </ul>
                </> : param.namasubproduk === "drum pemula 2 yahmurah" ? <>
                    <h5>Review</h5>
                    <ul>
                        <li>Barangnya jelek, tidak rekomnded</li>
                        <li>Penjual tidak ramah, Bintang 1 dulu</li>
                    </ul>
                </> : ""

        }

    </>
}

export default Review