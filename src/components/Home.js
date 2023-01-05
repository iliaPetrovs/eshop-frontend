import React, { useLayoutEffect } from 'react'
import CarouselLoader from './CarouselLoader'
import CategoryShowcase from './CategoryShowcase'
import Newsletter from './Newsletter'
import items from '../utils/mocks/items'
import Slider from './Slider/Slider'
import ShowMore from './ShowMore/ShowMore'
import CTAImage from './CTAImage/CTAImage'
import Rows from './Rows/Rows'
import { useQuery } from 'react-query'
import { getProducts } from '../api/getProducts'
import Loader from './Misc/Loader'

export default function Home ({ products }) {
  return (
        <div>
            {/* <CarouselLoader /> */}
            <CategoryShowcase />
            {products?.data
              ? (
                <>
                    <Slider items={products?.data} />
                    <Rows />
                    <ShowMore items={products?.data} title="Exclusive selection" />
                </>
                )
              : (
                <Loader />
                )}
            <CTAImage
                title="Hello there"
                body="Stop reading, nothing catchy here"
            />
            <Newsletter />
        </div>
  )
}
