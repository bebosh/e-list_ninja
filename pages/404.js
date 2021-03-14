import Link from 'next/link'

const NotFoundPage = () => {
  return ( 
    <div className="notFound">
      <h1>Page not found</h1>
      <p>Go back to <Link href="/"><a>Home</a></Link></p>
    </div>
   );
}
 
export default NotFoundPage;