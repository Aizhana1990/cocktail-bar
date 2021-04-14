import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "./Spinner";
import Layout from "../components/Layout";
import VanillaTilt from 'vanilla-tilt'


const Drinks = () => {
    const [drinks, setPopular] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const tilt = useRef([])

    useEffect(() => {
        const options = {
            scale: 1.2,
            speed: 1000,
            max: 30
        }
        if(!isLoading) {
          VanillaTilt.init( tilt.current, options)
        }
        axios('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
            .then(res => {
                setPopular(res.data.drinks)
                setIsLoading(false)
            })

    }, [isLoading])

    if (isLoading) return <Spinner/>

    return (
        <Layout>


            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap">
                    {
                        drinks.map((el, idx) => (
                            <div className="w-1/3 mb-5" key={el.idDrink} ref={(el) => tilt.current[idx] = el}>
                                <Link to={`/drinks/${el.idDrink}`}>
                                    <img className="images px-3 mb-5 w-full object-cover object-center"
                                         src={el.strDrinkThumb} alt=""/>
                                    <p className="drinks_name">{el.strDrink}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>


        </Layout>

    );

}
export default Drinks;
