import './App.css';
import './bootstrap.min.css'
import {Container} from 'react-bootstrap'
import Header from './components/header';
import Footer from './components/footer';
import HomeScreen from './screens/Homescreens';

function App() {
  return (
           <>
               <Header/>
                <main className="py-4">
                 <Container>
                   <HomeScreen></HomeScreen>

                   </Container>


                </main>  

               <Footer/>     
          </> 
  );
}

export default App;
