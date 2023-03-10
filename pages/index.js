import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { useQuery } from 'urql'
import { PRODUCT_QUERY } from '../lib/query'
import Products from "../components/Products"
import { Gallery } from '../styles/Gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //getting dta from strapi - products
  const [products] = useQuery({query: PRODUCT_QUERY});
  const {data, fetching, error} = products;

  if(fetching) return <p>loading...</p>;
  if(error) return <p>ohhhhh man! there was an error! see: {error.message}</p>;
  
  const products_data = data.products.data;

  return (
    <>
      <Head>
        <title>F l o r e n c e</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Gallery>
            {products_data.map((product)=>{
              return(
                <Products key={product.attributes.slug} product={product}></Products>
              );
            })}
          </Gallery>
      </main>
    </>
  )
}
