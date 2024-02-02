import PageViews from '@/app/_components/ui/PageViews';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import React, { Suspense } from 'react'

export default async function Page({params}) {
  const {slug} = params;
  const {content, frontmatter} = await getPostBySlug(slug);
  return (
    <section className='py-24 w-full'>

    <div className='container'>

      <header className='rounded bg-gray-100 p-8 dark:bg-black'>
        <h1 className='font-serif text-3xl'>
          {frontmatter.title}
        </h1>
        <p className='text-sm font-light uppercase leading-3'>
         {frontmatter.author}
        </p>
        <Suspense fallback={<div className='mt-4'>Loading page views ...</div>}>
        <PageViews/>
        </Suspense>

      </header>

      <main className='prose mt-12'>
        {content}
      </main>

    </div>

   </section>
  )
}


export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    slug: post.slug
  }))
}
