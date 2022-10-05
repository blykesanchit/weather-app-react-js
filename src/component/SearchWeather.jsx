import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const SearchWeather = () => {
    const [search, setSearch] = useState("kota");
    const [data, setData] = useState({});
    const [input, setInput] = useState("");
    let componentMounted = true;

    useEffect(() => {
        const fetchWeather = async () => {
            const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=kota&appid=efd9aee3c76a267f975a6c9423e14e11`);
            setData(await responce.json());
            setTimeout(() => {
                console.log("wait")
            }, 5000);
            if (componentMounted) {
                console.log(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        fetchWeather();
    }, [])
    // const getWeatherDetails = (cityName) => {
    //     const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=efd9aee3c76a267f975a6c9423e14e11`;
    //     axios.get(apiURL).then((res)=>{
    //         console.log("responce", res);
    //     }).catch((err) => {
    //         console.log("err", err);
    //     })
    // }
    // useEffect(() => {
    //     getWeatherDetails("jaipur");
    // }, [])
    

    // int temp=(data.main.temp - 273.15).toFixed();
    // int temp_min=(data.main.temp_min - 273.15).toFixed();
    // int temp_max=(data.main.temp_max - 273.15).toFixed(); 

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center border-0 text-bg-dark">
                            <img src="https://source.unsplash.com/900x1600/?nature,water" className="card-img extra overlay" alt="..." />
                            <div className="card-img-overlay">
                                <form action="">
                                    <div className="input-group mb-4 w-75 mx-auto">
                                        <input type="text" className="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2" />
                                        <button className="input-group-text" type='submit'>
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                                <h2 className="card-title">{data.name}</h2>
                                <p className="card-text lead">
                                    Thursday, October 14, 2021
                                    {/* <p>last updated 3 minutes ago</p> */}
                                </p>
                                <hr />
                                <i className='fas fa-cloud fa-4x'></i>
                                <h1 className='fa-bolder'>33.07 &deg;C</h1>
                                <p className="lead fw-bolder mb-0">Cloud</p>
                                <p className="lead">30.07 &deg;C | 35.01 &deg;C</p>
                                <p className="card-text text-center mb-5"><small>Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchWeather
