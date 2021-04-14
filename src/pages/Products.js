import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from 'react-router-dom'
import Layout from "../components/Layout";
import Spinner from "./Spinner";

const Products = () => {
    const {name} = useParams()
    const [ingredient, setIngredient] = useState({})
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://thecocktaildb.com/api/json/v1/1/search.php?i=${name}`)
            .then(res => {
                setIngredient(res.data.ingredients[0])
                setIsLoading(false)
            })
        axios(`https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=${name}`)
            .then(res => {
                setProducts(res.data.drinks)
            })
    },[])
    if (isLoading) return <Spinner/>
    return(
        <Layout>
          <div className="container px-5 mx-auto">
              <div className="flex flex-wrap">
                     <div className="subtitle">{ingredient.strIngredient}</div>
                     <div className="title">{ingredient.strDescription}</div>
              </div>
              <div className="flex flex-wrap">
                  {
                      products.map((el) => (
                          <div className="w-1/3 mb-5">
                             <Link to={`/drinks/${el.idDrink}`}>
                                 <div className="drink_info">
                                     <img src={el.strDrinkThumb} alt=""/>
                                     <p className="drink_title">{el.Drink}</p>
                                 </div>
                             </Link>
                          </div>
                      ))
                  }
              </div>
          </div>
        </Layout>

    )}

    export default Products;