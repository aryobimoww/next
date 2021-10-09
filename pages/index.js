import Link from 'next/link';
const index = () =>{
   return(
    <div>
        <h1>SSR Magic</h1>
        <Link href='/About'>
            <button style={{'backgroundColor':'green','color':'white'}}>about</button>
        </Link>
        <Link href='/Robots'>
            <button style={{'backgroundColor':'green','color':'white'}}>Robots</button>
        </Link>        
    </div>
);
}
export default index
