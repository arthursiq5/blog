import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import getPosts from '../lib/posts'

const Blog: NextPage<{ posts: object[] }> = ({ posts }) => {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(({slug, title}) => (
          <li key={slug}>
            <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}

export default Blog
