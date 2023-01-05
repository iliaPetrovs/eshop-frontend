import React from 'react'
import { useQuery } from 'react-query'
import { getProducts } from '../src/api/getProducts'
import Home from '../src/components/Home'
import Layout from '../src/components/Layout/Layout'
import items from '../src/utils/mocks/items'

function HomePage () {
  const products = useQuery({ queryKey: ['products'], queryFn: getProducts })
  return (
    <>
      <Layout>
        <Home products={{ data: items }} />
      </Layout>
    </>
  )
}

export default HomePage
