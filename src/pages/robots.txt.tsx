import axios from 'axios';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const referalHeader = process.env.REFERAL_HEADER;

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}robots-text`, {
      headers: {
        referal: referalHeader
      }
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch robots.txt');
    }
    const robotsTxt = response.data?.data?.robotText;
    
    res.setHeader('Content-Type', 'text/plain');
    res.write(robotsTxt);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error('Error fetching robots.txt:', error);
    res.statusCode = 500;
    res.end('Error generating robots.txt');
    return { props: {} };
  }
};

const Robots = () => null;

export default Robots;
