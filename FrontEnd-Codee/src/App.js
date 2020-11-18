import './App.css';
import './bootstrap.min.css'
import {Container} from 'react-bootstrap'
import Header from './components/header';
import Footer from './components/footer';
import HomeScreen from './screens/Homescreens';
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter  as Router,Route} from 'react-router-dom'
function App() {
  return (
           <>
           <Router>

           <Header/>
                <main className="py-4">
                 <Container>
                   {/* <HomeScreen></HomeScreen> */}
                   <Route  path='/' exact component={HomeScreen}></Route>
                   <Route  path='/product/:id' component={ProductScreen}></Route>
                   </Container>
                </main>  

               <Footer/>
           </Router>
                    
          </> 
  );
}

export default App;
