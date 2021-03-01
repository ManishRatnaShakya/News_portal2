import React,{useEffect,useState} from 'react';
import {Space,Spin} from 'antd';
import News from "../News/News"
import './Content.css'
function Content() {
    const [data,setData]=useState();
    console.log("data",data)
    useEffect(() => {
        
        fetch( "https://newsapi.org/v2/everything?q=Apple&from=2021-03-01&sortBy=popularity&apiKey=08721cd4894e426eb4e32beff45a33ee")
.then(response => {
    console.log(response,"res");
	response.json().then(data=>{
        
        setData(data.articles)
    })
})
.catch(err => {
	console.error(err);
});
    }, [])
    return (
        <div className="content">
           
            <div className="content-news">
           {!data?<Space size="middle">
    
                <Spin size="large" />
                </Space>:
                    data.map((d,i)=>(
                        <div className="news"><News data={d} key={i}/></div>
                    ))
                    
            }</div>
        </div>
    )
}

export default Content
