import './App.css';
import './bootstrap.min.css'
import {Container} from 'react-bootstrap'
import Header from './components/header';
import Footer from './components/footer';
import HomeScreen from './screens/Homescreens';
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter  as Router,Route} from 'react-router-dom'
import CartScreen from './screens/Cartscreen';
import LoginScreen from './screens/SignInScreen'
import Registerscreen from './screens/Register' 
import Profile from './screens/Profile';
import PaymentScreen from './screens/PaymentScreen'
import Shipping from './screens/Shipping'
import PlaceOrder from './screens/PlaceOrder';
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
                   <Route  path="/cart/:id?" component={CartScreen}></Route>
                   <Route   path="/signin" component={LoginScreen}></Route>
                   <Route path="/register" component={Registerscreen}></Route>
                   <Route path="/profie" component={Profile}></Route>
                   <Route path="/shipping" component={Shipping}></Route>
                   <Route path="/payment" component={PaymentScreen}></Route>
                   <Route path="/placeorder" component={PlaceOrder}></Route>
                   </Container>
                </main>  
               <Footer/>
           </Router>
                    
          </> 
  );
}

export default App;
