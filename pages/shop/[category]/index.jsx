import React from 'react'
import Category from '../../../src/components/Category/Category'
import Layout from '../../../src/components/Layout/Layout'
import items from '../../../src/utils/mocks/items'

function Shop ({ category, categoryItems }) {
  return (
    <Layout>
      <Category items={categoryItems} />
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const category = context.params.category
  const categories = ['stickers', 'pins', 'bags']
  if (!categories.includes(category.toLowerCase())) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const categoryItems = items.filter((item) => item.category === category)

  return {
    props: { category, categoryItems }
  }
}

export default Shop
