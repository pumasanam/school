import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';
import img from "./../img/man.jpg";
import { Link } from 'react-router-dom';


const SinglePage = () => {
    const {id} = useParams();
    const [singledata, setSingleData] = useState(null);

    useEffect(()=>{
      const fetch = async()=>{
          try{
             const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
             setSingleData(res.data);
          }
          catch(err){
            console.log(err);
          }
      };
      if(id){
        fetch();
      }

    },[id]);
  return (
    <>
    <Navbar/>
      {
      singledata ?
      (
        <div className="singledata">
            <h1 className='name'>{singledata.name}</h1>

            <div className="singledata_list">
                <div className="single_info">
                    <img src={img} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, odit deserunt quas amet distinctio dolorem cupiditate eaque error eos rerum suscipit vero magni labore, sapiente delectus libero dolor harum sit rem nostrum perspiciatis ipsum voluptas porro esse. Explicabo totam dolorem voluptates. Impedit commodi debitis porro obcaecati, inventore laborum a sunt eos consectetur quam earum recusandae quaerat quibusdam minima veniam, eveniet soluta at aut similique labore voluptas repudiandae dicta ut. Repudiandae vitae itaque quibusdam illum, animi, molestiae recusandae dolor eos nisi nulla iure nihil tempore enim illo, fugit aut quidem? Aliquid, praesentium tenetur. Placeat nulla esse fugiat fugit ab doloremque optio voluptate dolores sed unde! Earum, perspiciatis.</p>
                </div>
                
                <div className="content">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo odit quo, error totam corporis, placeat ducimus numquam ex nostrum sed? Quas quaerat dolores corporis voluptas adipisci minima quis quae deleniti ab assumenda aut officiis nulla, aliquam esse totam praesentium. Excepturi, fugiat? Beatae numquam fuga nihil exercitationem quod sequi iste molestiae ipsum quisquam tempora possimus voluptatibus iure blanditiis animi, vero voluptatem alias obcaecati eveniet! Corporis enim molestiae quisquam laboriosam distinctio consequatur quas cumque nobis accusamus similique nulla eligendi, numquam ipsum voluptatum placeat a iusto perspiciatis quod provident veniam. Enim cum ullam labore, necessitatibus nam nostrum voluptatem repellendus fuga dolores similique, excepturi mollitia eum nisi ad repellat provident. Sed minus placeat sequi earum assumenda officiis? Optio repellendus excepturi officiis, vitae eum ullam fuga itaque neque assumenda error consectetur quaerat culpa, inventore cumque voluptate possimus porro delectus veritatis. Facere quas nobis ut perferendis, fugiat, voluptatibus pariatur cupiditate qui ex debitis sit! Praesentium corrupti expedita ratione maxime aut facilis voluptatum, quidem enim harum doloremque, in, obcaecati eum ullam iusto neque voluptates repellat architecto placeat. Sit id minus nam corrupti accusantium reprehenderit, quod, laudantium consequatur dicta voluptates nisi cupiditate, ut aliquam iste? Deleniti culpa at quo commodi vel incidunt, impedit, reprehenderit pariatur cumque atque a amet in laboriosam laudantium corrupti nostrum aliquam sed. Animi cumque autem in alias cum amet corrupti impedit magnam quidem laborum ducimus consequatur officiis sit odio eveniet porro laboriosam iusto mollitia expedita dolore, obcaecati, assumenda itaque adipisci sint. Rerum minus accusantium consequuntur delectus dolor! Eius, vel. Dolorem eaque repellat illum dolorum nam expedita temporibus deleniti quam quis culpa ipsam laborum sint, fugit nemo. Quae dignissimos id exercitationem incidunt ex. Officiis neque quisquam incidunt perferendis velit sunt doloribus praesentium. Nam cumque ut, nesciunt accusamus soluta illum eius quas unde quo odit voluptate quasi omnis ea illo consectetur hic totam tempore optio, fuga doloremque laborum magnam saepe. Minima atque delectus quis sequi suscipit, aliquam illum consequatur, unde voluptates porro laudantium perferendis, totam tempora accusantium. Sunt similique voluptatum perferendis deleniti eveniet veniam vero facilis odio asperiores suscipit ipsum incidunt laudantium distinctio at illo commodi sint, omnis quod! Atque, nihil. Veniam id maxime sed qui quaerat ipsam ea, rem repellat nihil facere aliquid omnis ex. Et aperiam mollitia at ipsam optio in asperiores tenetur doloremque obcaecati, eum praesentium dolorem delectus quia dolore quas ratione, ipsa hic sed cumque possimus est itaque. Dolorum maiores at dicta adipisci esse quas nulla vero ducimus. Tenetur natus pariatur sed magnam id dignissimos voluptatum quaerat explicabo. Quaerat, est accusantium recusandae, ipsum ipsam nostrum quia libero numquam iure ab voluptatem dignissimos unde natus modi, autem reiciendis repellendus molestiae officia expedita. Iste rem est, fuga sint, officiis vitae libero explicabo inventore excepturi enim quos accusantium ipsam officia non aspernatur obcaecati labore, at maxime deleniti quaerat! Inventore laboriosam labore dolorum. Eaque praesentium, culpa accusantium quidem atque deleniti dolores quaerat dolorem, nam perferendis aliquid! Quibusdam officiis non, unde optio aliquid perferendis quis qui? Illum, aliquid. Doloremque iusto quisquam nihil minima illum natus, eos, ab doloribus ea aperiam voluptatem, nostrum consequuntur earum dignissimos error.</p>


              <Link to='/something' className='link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, debitis.</Link>


              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga pariatur deserunt veniam ratione quam dolorum harum eum labore dolorem libero numquam id laudantium, fugiat illum. Vel rem cum, amet vitae libero laboriosam inventore veritatis! Magni magnam facilis facere eius reprehenderit consectetur nihil quod aspernatur eos vel at qui aut deserunt dolorum nobis ex exercitationem corporis voluptatibus praesentium, hic rem ipsa blanditiis ipsam. Odit alias corporis dolorum sed deserunt animi accusantium quo, adipisci praesentium nostrum quos aliquid tempora aliquam reprehenderit asperiores culpa dicta! Odio ab commodi quae sit, voluptate ipsa inventore a modi quam aspernatur repellendus animi, deserunt autem, maiores pariatur minima eveniet natus tempore provident nisi neque. Obcaecati atque architecto exercitationem dignissimos voluptatem, sunt tempore explicabo dolor repellendus cupiditate numquam molestias, id, cumque et quaerat inventore nobis! Temporibus dolorum, aspernatur amet laudantium consequuntur vel nulla dolores! Quia quo, beatae ducimus ex harum praesentium magnam? Iusto cumque corporis mollitia numquam consequuntur, in, aliquid fugit aliquam dolores adipisci placeat ratione quo laudantium magnam odio recusandae id, at voluptatum harum repudiandae? Labore dicta, earum odio officia maxime accusamus dolor esse ipsam a asperiores iusto nemo officiis repellendus doloribus aut nulla fugit necessitatibus illum possimus. Incidunt quisquam voluptates magnam laboriosam eos suscipit aliquid.</p>

                </div>
            </div>
        </div>
      ):
      (
        <p>Loading....</p>
      )
     } 
    </>
  );
};

export default SinglePage;
