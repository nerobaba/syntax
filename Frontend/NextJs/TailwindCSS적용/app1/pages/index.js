import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>빡코딩 포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel='icon' href="/favicon.ico" />
      </Head>
      <h1>안녕</h1>
    </Layout>
  )
}
