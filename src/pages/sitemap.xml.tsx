import axios from 'axios'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const referalHeader = process.env.REFERAL_HEADER

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}sitemap`, {
      headers: {
        referal: referalHeader
      }
    })

    if (response.status !== 200) {
      throw new Error('Failed to fetch sitemap')
    }

    const xml = response.data
    res.setHeader('Content-Type', 'application/xml')
    res.write(xml)
    res.end()

    return { props: {} }
  } catch (error) {
    console.error('Error fetching sitemap:', error)
    res.statusCode = 500
    res.end('Error generating sitemap')
    return { props: {} }
  }
}

const Sitemap = () => null

export default Sitemap
