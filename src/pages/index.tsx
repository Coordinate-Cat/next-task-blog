import type { NextPage, GetStaticProps } from 'next';
import type { Post } from '../types/post';
import Head from 'next/head';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { client } from '../clients/client';
import dateFormat from './functions/dateFormat';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = (props: Props) => {
  const { posts } = props;

  //post.publishedAtをスラッシュ区切りの日付に変換
  posts.map((post) => {
    dateFormat(post);
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='mx-auto mt-5 w-[90%] max-w-[1200px] bg-white text-gray-900'>
        <div>
          <ul className='grid gap-[15px] tablet:grid-cols-3'>
            {posts.map((post: Post) => (
              <li
                key={post.id}
                className='cursor-pointer p-[15px] shadow-none hover:shadow-lg'
              >
                <Link href={`/posts/${post.id}`}>
                  <div className='mb-2.5 h-[150px]'>
                    <Image
                      src={post.thumbnail.url}
                      width={300}
                      height={150}
                      className='my-0 mx-auto h-[150px] object-contain object-center'
                      alt='thumbnail'
                    />
                  </div>
                  <div>
                    <p className='mb-[5px] text-xs text-[#5c6069]'>
                      {post.publishedAt}
                    </p>
                    <h2 className='mt-0 mb-2.5 font-bold'>{post.title}</h2>
                    <p className='text-xs leading-[20.4px] text-[#5c6069] '>
                      {post.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({ endpoint: 'post' });

  return {
    props: {
      posts: data.contents,
    },
  };
};

export default Home;
