import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import Loading from '../../components/Loading';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const HomePage = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
};

export default HomePage;
