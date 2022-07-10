import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Fbanner from './Fbanner';
import axios from 'axios';
import Storage from './Storage';
import Info from './Info';
import Features from './Features';
import Footer from './Footer';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetch = async ()=>{
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        fetch();
    },[]);
  return (
    <>
      <Navbar/>
     
      <Fbanner/>

      <div className="main-data">
        <h1>Teachers</h1>
            <div className="data-list">
                {data.map((list)=>{
                    return <Storage list={list}/>;
                })}
            </div>
      </div>

      <Info/>
      <Features/>
      <Footer/>
    </>
  );
};

export default Home;
