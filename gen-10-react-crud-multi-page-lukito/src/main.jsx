import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ArticleList from "./pages/ArticleList.jsx";
import CategoryList from "./pages/CategoryList.jsx";
import ArticleForm from "./pages/ArticleForm.jsx";
import CategoryForm from "./pages/CategoryForm.jsx";
import AuthorList from "./pages/AuthorList.jsx";
import AuthorForm from "./pages/AuthorForm.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}>
                <Route index element={<Navigate to={"/articles"} replace/> }/>
                <Route path="articles" element={<ArticleList />} />
                <Route path="articles/form" element={<ArticleForm />} />
                <Route path="articles/form/:articleId" element={<ArticleForm />} />
                <Route path="categories" element={<CategoryList />} />
                <Route path="categories/form" element={<CategoryForm />} />
                <Route path="categories/form/:categoryId" element={<CategoryForm />} />
                <Route path="authors" element={<AuthorList />} />
                <Route path="authors/form" element={<AuthorForm />} />
                <Route path="authors/form/:authorId" element={<AuthorForm />} />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
