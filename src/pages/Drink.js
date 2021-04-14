import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from 'react-router-dom'
import Layout from "../components/Layout";
import Spinner from "./Spinner";

const Drink = () => {
    const {id} = useParams()
    const [drink, setPopular] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                setPopular(res.data.drinks[0])
                setIsLoading(false)
            }).catch(() =>{
            setIsError(true)
            setIsLoading(false)
        })
    }, [id])

    const getIngredients = () => {
        let index = 1;
        let ingredients = [];
        while (drink['strIngredient' + index]) {
            ingredients.push({
                name: drink['strIngredient' + index],
                amount: drink['strMeasure' + index] ? drink['strMeasure' + index] : "A dash "
            })
            index++
        }
        return ingredients
    }
    const ingredient = getIngredients()


    if (isLoading) return <Spinner/>
    if (isError) {
        return (
            <Layout>
                <h2>Коктейль не найден</h2>
            </Layout>
    )
    }
    return (
        <Layout>
            <div className="flex flex-wrap">
                <div className="w-1/3 mb-5 ">
                    <img className="images px-3 mb-5 w-full object-cover object-center" src={drink.strDrinkThumb}
                         alt=""/>
                    <p>{drink.strDrink}</p>
                </div>
                <div className="w-2/3">
                    <div className="flex flex-col">
                        <h1 className="subtitle">Instructions:</h1>
                        <div><p className="title">{drink.strInstructions}</p></div>
                        <div className='flex'>
                            {ingredient.map(el => (<div>
                                <Link to={`/product/${el.name}`}>
                               <div className="drink_info">
                                   <img src={`https://www.thecocktaildb.com/images/ingredients/${el.name}-Small.png`}
                                        alt=""/>
                                   <p className="drink_title">{el.name}</p>
                               </div>
                                </Link>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Drink
