import Link from 'next/link';
import Image from '../components/Image';
const About = () =>
   (
    <div style={{fontSize:'20px', color:'blue'}}>
        <h1>About</h1>
        <Link href="/">
            <button style={{'backgroundColor':'green','color':'white','borderColor':'green'}}>back</button>
        </Link>
        <Image />
        <p>I was a magician</p>
    </div>
);

export default About;
