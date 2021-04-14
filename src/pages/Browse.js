import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Spinner from "./Spinner";
import Layout from "../components/Layout";
const Browse = () => {
    const {name} = useParams()
    const [searchResult, setSearchResult] = useState ([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect (() => {
        axios (`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            .then((res) => {
                setSearchResult(res.data.drinks)
                setIsLoading(false)
            })

    }, [name])

    if (isLoading) return <Spinner/>
    return (
       <Layout>
           <div className="flex flex-wrap">
               {
                   searchResult.map((el, idx) => (
                       <div className="w-1/3 mb-5" key={el.idDrink}>
                           <Link to={`/drinks/${el.idDrink}`}>
                               <img className="images px-3 mb-5 w-full object-cover object-center"
                                    src={el.strDrinkThumb} alt=""/>
                               <p className="drinks_name">{el.strDrink}</p>
                           </Link>
                       </div>
                   ))
               }
           </div>
       </Layout>
    );
};

export default Browse;
