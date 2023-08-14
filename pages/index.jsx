import React from 'react'
import { useQuery } from 'react-query'
import { getProducts } from '../src/api/getProducts'
import Home from '../src/components/Home'
import Layout from '../src/components/Layout/Layout'
import items from '../src/utils/mocks/items'
import axios from "axios";

function HomePage(props) {
    const products = useQuery({ queryKey: ["products"], queryFn: getProducts });
    console.log(props.test);
    return (
        <>
            <Layout>
                <Home products={{ data: items }} />
            </Layout>
        </>
    );
}

export const getServerSideProps = async () => {
    const res = await axios.get("http://localhost:8080/api/", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    return {
        props: {
            test: res.data,
        },
    };
};

export default HomePage
