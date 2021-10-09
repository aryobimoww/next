import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) =>{
    return (
        <div>
            <h1>Robots</h1>
            <Link href='/'>
            <button style={{'backgroundColor':'purple','color':'white'}}>Home</button>
            </Link>
            <div>
                {
                   props.robots.map(robot=>(
                        <li key={robot.id}>
                        <Link href={`Robot/${robot.id}`}>
                            <a>{robot.name}</a>
                        </Link>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}
Robots.getInitialProps = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/Users/')
    const data = await res.json();
    return{
        robots:data
    }
}
export default Robots;