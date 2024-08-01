import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <>{page}</>
  )
}
 
export default Page
