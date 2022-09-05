import React from "react";
import {Link, Outlet, useParams} from "react-router-dom";


function DetailSubCatalog() {
    const param = useParams();
    return <>
        {param.namasubproduk === "gitar pemula 1 yahmahal" ? <>
            <h5>Detail</h5>
            <ul>
                <li>Tahun: 2012</li>
                <li>Jenis: Akustik</li>
                <li>Produksi: YahMahal</li>
                <li>Kayu: Mahogani</li>
                <br/>
                <Link to={"/detail/gitar pemula 1 yahmahal/seller"}>
                    <button>See Seller</button>
                </Link>
                <Outlet/>
            </ul>
            </>
            :param.namasubproduk === "gitar pemula 2 yahmurah" ? <>
                <h5>Detail</h5>
                <ul>
                    <li>Tahun: 2016</li>
                    <li>Jenis: Elektrik</li>
                    <li>Produksi: YahMurah</li>
                    <li>Kayu: Aganthis</li>
                    <br/>
                    <Link to={"/detail/gitar pemula 2 yahmurah/seller"}>
                        <button>See Seller</button>
                    </Link>
                    <Outlet/>
                </ul>
            </>:param.namasubproduk ==="bass pemula 1 yahmahal" ? <>
                <h5>Detail</h5>
                <ul>
                    <li>Tahun: 2010</li>
                    <li>Jenis: Akustik</li>
                    <li>Produksi: YahMahal</li>
                    <li>Kayu: Aganthis</li>
                    <br/>
                    <Link to={"/detail/bass pemula 1 yahmahal/seller"}>
                        <button>See Seller</button>
                    </Link>
                    <Outlet/>
                </ul>
            </>: param.namasubproduk === "bass pemula 2 yahmurah" ? <>
                <h5>Detail</h5>
                <ul>
                    <li>Tahun: 2017</li>
                    <li>Jenis: Elektrik</li>
                    <li>Produksi: YahMurah Le</li>
                    <li>Kayu: Mahogani</li>
                    <br/>
                    <Link to={"/detail/bass pemula 2 yahmurah/seller"}>
                        <button>See Seller</button>
                    </Link>
                    <Outlet/>
                </ul>
            </>: param.namasubproduk === "drum pemula 1 yahmahal" ?<>
                <h5>Detail</h5>
                <ul>
                    <li>Tahun: 2012</li>
                    <li>Jenis: Akustik</li>
                    <li>Produksi: YahMahal</li>
                    <li>Sign: Pearl</li>
                    <br/>
                    <Link to={"/detail/drum pemula 1 yahmahal/seller"}>
                        <button>See Seller</button>
                    </Link>
                    <Outlet/>
                </ul>
            </>: param.namasubproduk === "drum pemula 2 yahmurah" ? <>
                <h5>Detail</h5>
                <ul>
                    <li>Tahun: 2017</li>
                    <li>Jenis: Elektrik</li>
                    <li>Produksi: YahMurah</li>
                    <li>Sign: - </li>
                    <br/>
                    <Link to={"/detail/drum pemula 2 yahmurah/seller"}>
                        <button>See Seller</button>
                    </Link>
                    <Outlet/>
                </ul>
            </>: ""}


            </>
        }

        export default DetailSubCatalog