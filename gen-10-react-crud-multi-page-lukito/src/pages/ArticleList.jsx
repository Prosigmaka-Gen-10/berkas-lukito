import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function ArticleList() {
    const [articles, setArticles] = useState([])

    async function getArticles(){
        const res = await fetch("http://localhost:3000/articles")
        const data = await res.json()
        setArticles(data)
    }

    async function deleteArticle(articleId){
        await fetch('http://localhost:3000/articles/' + articleId, {
            method: 'DELETE'
        })

        getArticles()
    }

    useEffect(()=>{
        getArticles()
    }, [])

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
            {articles.map(article=>
                    <tr key={article.id}>
                        <td>{article.article_title}</td>
                        <td>{article.article_publish_date}</td>
                        <td>
                            <Link to={"/articles/form/"+article.id}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={()=>deleteArticle(article.id)}>Hapus</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}

export default ArticleList