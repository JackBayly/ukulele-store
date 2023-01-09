import Hello from "../Assets/Hello.jpg";
import { Link } from 'react-router-dom';

 function Home() {
    return (
      <div className="home">
     
     <img src={Hello} className="helloImg"/>
     <Link to="/shop">
     <button className="shopNowBtn">Shop Now</button>
     </Link>
      </div>
    );
  }
  export default Home;

  