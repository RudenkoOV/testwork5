import { Link } from 'react-router-dom';
import { HomeTitle, WrapperHomePage } from './Home.styled';

export default function Home() {
  return (
    <WrapperHomePage>
      
      <HomeTitle style={{ color: 'green' }}>
        To display tweets, select an option from the dropdown menu on the 
        <Link to="/tweets" > Tweets </Link>
         page.
      </HomeTitle>
    </WrapperHomePage>
  );
}
