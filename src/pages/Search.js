import React from 'react';
import Alert from "../components/Alert";
import Layout from "../components/Layout";

const Search = () => {
    return (
        <Layout>
            <Alert color="red" />
            <h2 className="text-9xl">There is no such drink!</h2>
        </Layout>
    );
};

export default Search;