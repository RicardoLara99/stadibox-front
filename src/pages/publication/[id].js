import { Layout } from "../../features/Layout"
import { getPublicationService } from "../../../services/publications"
import { Publication } from "../../features/publication"

const PublicationView = ({ initialData }) => {

  return <Publication data={initialData.data}/>
}

PublicationView.getLayout = function getLayout(page) {
  return <Layout> { page } </Layout>
}

export async function getServerSideProps({ query, req, res }) {
  try {

    const { id } = query

    const data = await getPublicationService(id)
    
    return {
      props: {
        initialData: {
          data,
        },
      },
    }

  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export default PublicationView
