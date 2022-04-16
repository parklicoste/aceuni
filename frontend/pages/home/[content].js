import React from 'react';
import Link from 'next/link'
import SearchResult from '../search/index'

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/home')
  const data = await res.json();

  const paths = data.map(pagename => {
    return {
      params: {page: page.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = fetch('http://localhost:3000/home' + id);
  const data = await res.json();

  return {
    props: {page: data},
    fallback: false
  }
}

    


const StoryContent = ({myPage}) => {

  return (
    <div id="main-content" className="column" style={{margin: "100px 300PX 0 300px"}}>
    
      {/* <myPage /> */}
      <SearchResult />
    
      {/* <Link href="/home/profile">
        <a>About Us</a>
      </Link>
    
      <Link href="/settings">
        <a>Blog Post</a>
      </Link>

      <Link href="/upload">
        <a>Blog Post</a>
      </Link> */}
    
  </div>
  )
}

export default StoryContent;