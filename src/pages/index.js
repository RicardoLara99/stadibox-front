/* You shouldn't touch this file */

import Head from 'next/head'
import { Layout } from '../features/Layout'
import { TEST_DATA } from "../../constants/data_test"


export default function Home() {


  return (
    <div>
      <Head>
        <title>Prueba Stadibox</title>
        <meta name="description" content="Prueba de Stadibox" />
        <link
            href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900&display=swap'
            rel='stylesheet'
          />
      </Head>

      <Layout>
        {
          TEST_DATA.map(publication => <div>
            Ver publicación con id <a href={`./publication/${publication.id}`}>{publication.id}</a>
          </div>)
        }
      </Layout>
      
    </div>
  )
}
