import styles from '../../styles/Items.module.css'
import Link from 'next/link'
export const getStaticProps = async () =>{

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {items:data}
  }

}

const Items = ({items}) => {
  return ( 
    <div>
      <h1>All Items</h1>
      { items.map( item =>(
        <Link href={`/items/${item.id}`} key={item.id}>
          <a className ={styles.single}>
            <h3>{item.name}</h3>
          </a>
        </Link>
      )) }
    </div>
   );
}
 
export default Items;