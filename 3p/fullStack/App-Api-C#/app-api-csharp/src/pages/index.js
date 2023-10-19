import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Link href="/about">
        
        <button style={{padding:"10px", backgroundColor:"lightblue", borderRadius:5,fontSize:10}}>SOBRE</button>
      </Link>
    </div>
  );
}
