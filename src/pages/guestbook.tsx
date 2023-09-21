import * as React from 'react';

import Accent from '@/components/Accent';
import Comment from '@/components/content/Comment';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function GuestbookPage() {
  return (
    <Layout>
      <Seo
        templateTitle='Guestbook'
        description="Feel free to leave any message, expressions of appreciation, or suggestions you'd like to share."
      />

      <main>
        <section className=''>
          <div className='layout py-20'>
            <h1>
              <Accent>Guestbook</Accent>
            </h1>
            <p className='mt-2 text-gray-700 dark:text-gray-200'>
              Feel free to leave any message, expressions of appreciation, or
              suggestions you'd like to share.
            </p>
            <figure className='mt-12'>
              <Comment />
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  );
}
