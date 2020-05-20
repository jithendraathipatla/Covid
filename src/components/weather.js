import React, {useState, useEffect} from 'react';
import {FaTemperatureLow,FaWind, FaCloud} from 'react-icons/fa';
import {GiSpeedometer} from 'react-icons/gi';
import axios from 'axios';
import '../globalstyle.css';
import {css} from '@emotion/core'

const Weather = () => {
    const [load,setload] = useState(false);
    const [selected,setselected] = useState(517001);
    const [data, setdata] = useState([]);
    useEffect(() => {
        setload(false)
        const fetcha = async () => {
            const result = await axios.get(`https://api.weatherbit.io/v2.0/current?&postal_code=${selected},NC&key=7f8f94ef98cd472eba107421757e70b7`);
           setdata(result.data.data);
           setload(true)
        }
        fetcha();
    }, [selected]);


    
    const Load = () => {
        return(
            <div css={loading}>
             <span>Loading ...</span>
            </div>
        )
     }
     
    

     const datadisplay = () => {

        

         return data.map((item)=>{
             return (
                 <div css={weather}>
                   
                   <span><h1>{item.city_name}</h1></span>
                   <div css={rest}>
                   <span><FaTemperatureLow/> <br/>Feels Like: {item.temp} celcius</span>
                   <span><FaCloud/> <br/> Discription: {item.weather.description}</span>
                   <span><FaWind/> <br/> Wind direction:{item.wind_cdir_full}</span>
                   <span><GiSpeedometer/> <br/> Wind Speed:{item.wind_spd} KM/hr</span>
                   </div>
                 </div>
             )
         })
     }

    return (
        console.log(data),
        <div className="servicestext">
          <div style={{textAlign:"right"}}>
             <select onChange={(e) => setselected(e.target.value)} value={selected}>
               <option value="517101">Chittoor</option>
               <option value="560037">Bangalore</option>
               <option value="230532">Mumbai</option>
               <option value="110001">Delhi</option>
               <option value="600001">Chiennai</option>
             </select>
         </div>

         <div css={weather}>
         
           {load == false ? Load () : datadisplay()}
         </div>
        </div>
    );
};

export default Weather;

const loading = css`
 position:absolute;
  top: 15%;
  border:1px solid #eeee;
  padding:10px;
  color: black;
  background: white;
`

const rest = css`
 margin-top:5%;
 display:grid;
 grid-template-columns: 3fr 3fr 3fr 3fr;
 grid-gap:40px;
 svg{
     font-size:48px;
 }
`


const weather= css`
 span{
     display:block;
 }
`
