import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppTask from "./App";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import SubCatalog from "./pages/catalog/SubCatalog";
import DetailSubCatalog from "./pages/catalog/subCatalog/DetailSubCatalog";
import Seller from "./pages/catalog/subCatalog/detailSubCatalog/Seller";
import Review from "./pages/catalog/subCatalog/detailSubCatalog/seller/Review";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<AppTask/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"catalog"} element={<Catalog/>}/>
                    <Route path={"subcatalog/:namaproduk"} element={<SubCatalog/>}/>
                    <Route path={"detail/:namasubproduk"} element={<DetailSubCatalog/>}>
                        <Route path={"seller"} element={<Seller/>}>
                            <Route path={"review"} element={<Review/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
