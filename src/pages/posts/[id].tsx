import type { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import { client } from '../../clients/client';
import { Content } from '../../types/content';
import { Post } from '../../types/post';
import dateFormat from '../functions/dateFormat';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ShareBtn } from '@/components/shareBtn/shareBtn';

// テンプレートに渡すデータの型を指定します
type Props = {
  post: Post;
};

const PostId: NextPage<Props> = (props: Props) => {
  const { post } = props;

  dateFormat(post);

  return (
    <>
      <Header />
      <main className='mx-auto mt-5 w-[90%] max-w-[1200px] bg-white text-gray-900'>
        <div className='mx-auto max-w-[700px]'>
          <h1 className='text-3xl text-[32px] font-bold leading-[1.7] text-[#41c7c7]'>
            {post.title}
          </h1>
          <div className='mb-2.5'>
            <span className='text-sm'>記事作成日: {post.publishedAt}</span>
          </div>

          <div className='grid grid-flow-col justify-start'>
            {post.category.map((category) => (
              <span
                className='m-[3px] bg-[#F2A594] px-2 text-white'
                key={category.id}
              >
                {category.name}
              </span>
            ))}
          </div>

          <div
            className='mt-[4%]'
            dangerouslySetInnerHTML={{
              __html: `${post.body}`,
            }}
          />
          <ShareBtn />
        </div>
      </main>
      <Footer />
    </>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'post' });
  const paths = data.contents.map((content: Content) => `/posts/${content.id}`);

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext<{ id?: string }>,
) => {
  const params = context.params!;
  const data = await client.get({ endpoint: 'post', contentId: params.id });

  return {
    props: {
      post: data,
    },
  };
};

export default PostId;
