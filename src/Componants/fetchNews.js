import React,{useState} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

function FetchNews() {
    const[news,setNews]=useState([])
    const fetchNews =()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=d1fa315f802e45f08702854d7bcdef63")
    .then((response)=>{
        console.log(response);

        setNews(response.data.articles)
    })
    }
  return (
    <>
    <div className='container my-3'>
        <div className='row'>
            <div className='col-4'>
                <Button className='btn btn-primary' onClick={fetchNews}>fetchNews</Button>
            </div>
        </div>
    </div>

    <div className='container'>
        <div className='row'>
            {
           news.map((value) => {
            return(
                <div className='col-4'>
                <div className="card" style={{width: "18rem" }}>
      <img src={value.urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{value.title}</h5>
        <p className="card-text">{value.description}</p>
        <a href="#" className="btn btn-primary">main</a>
      </div>
    </div>
                </div>
            );
           })
        }
        </div>
    </div>
    </>
  )
}

export default FetchNews