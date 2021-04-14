import React from 'react';
import Header from "../components/Header";
import Layout from "../components/Layout";

const Home = () => {

    return (
        <>
            <Header/>
            <div className="bg-hero bg-cover bg-center h-screen"
                 style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1457518919282-b199744eefd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80'})`}}>
            </div>
        </>

    )
}

export default Home