import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react';
import Carousel from '../components/DaisyUI/Carousel/Carousel';
import GetData from '../components/GetData';
import Title from '../components/Title';

export default function Home({data}) {
  //Environment variables
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  
  //Define Variables
  const [location, setLocation] = useState(" ");
  const [datas, setDatas] = useState(data)

  //Define Functions
  const checkLocation = async(e) =>{
    e.preventDefault();

    try{
      const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`);
      const data = await result.json();

      if(!result.ok){
        setDatas("");
      }
      else{
      setDatas(data);
      }

    }catch(err){
      setDatas("");
    }
    
  }


  return (
    <div className={`xl:p-4 xl:flex xl:justify-center xl:min-h-screen xl:gap-10  xl:flex-col xl:items-center
                     md:justify-start`} >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title
        clName={`xl:text-6xl font-bold`}
        content={`Weather App`}>
      </Title>

      <GetData
        clName={`form-control w-full max-w-xs`}
        label={`Search Location:`}
        submitAction={checkLocation}
        setLocation={setLocation}
        onChangeAction={(e)=>{setLocation(e.target.value);}}>
      </GetData>
      
      <h1 className={`xl:text-6xl font-bold`}>{datas!==""? datas.current.feelslike_c: ""} {datas!==""? <> &deg;C</>: <span className={`xl:text-red-700 text-xl`}>Couldn&apos;t find location</span>}</h1>
      <div className=" xl:card xl:items-center xl:card-side xl:bg-base-100 xl:shadow-xl ">
        <figure className='flex flex-col p-4'>
          <Image src={datas!==""?"https:" +datas.current.condition.icon:"https://cdn.weatherapi.com/weather/64x64/day/116.png"} alt="Movie" width={datas!==""? `96px`: `96px`}  height={datas!==""?`96px`: `96px`} />
          <p>{datas!==""? datas.current.condition.text: ""}</p>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title">{datas!==""? datas.location.name + ", " +
                                                               datas.location.region + " " +
                                                               datas.location.country : ""}</h2>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More</button>
          </div>
        </div>
      </div>

      <Carousel 
        clName={`carousel rounded-box w-96`}>
      </Carousel>

    </div>
  )

  
}


export async function getServerSideProps(){
  //Environment variables
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  //Declare variables
  let data;
  
  try{
    const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Nigeria&aqi=no`);
    data = await result.json();
    if(!result.ok){
      data = "";
    }

  }catch(err){
   data = "";
  }
  return {
    props:{
      data
    }
  }
}