import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell.js'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
   <ArticlesCell/>
    </>
  )
}

export default HomePage