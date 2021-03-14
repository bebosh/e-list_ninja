import Link from 'next/link'
import Image from "next/image"

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image src="/flower.png" width ={40} height={75} />
        <h1>The list</h1>
      </div>
      <Link href="/" ><a>Home</a></Link>
      <Link href="/about" ><a>About</a></Link>
      <Link href="/items" ><a>Listing</a></Link>
    </nav>
   );
}
 
export default Navbar;