import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head'


const Index = () => (
    <Layout>
        <Head/>

        <h1>
            안녕, Nex t.js 
        </h1>
        <h2>
            <Link href="/about">
                <a style={{background: 'black', color: 'white'}}>소개</a>
            </Link>
        </h2>
    </Layout>
);

export default Index;