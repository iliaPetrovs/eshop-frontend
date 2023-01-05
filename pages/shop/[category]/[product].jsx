import React from 'react'
import Layout from '../../../src/components/Layout/Layout'
import ItemInfo from '../../../src/components/Products/ItemInfo'

function ProductPage ({ productSlug }) {
  return (
    <Layout>
      <ItemInfo productSlug={productSlug} />
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const productSlug = context.params.product
  return {
    props: {
      productSlug
    }
  }
}

export default ProductPage
