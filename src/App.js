import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer,Video} from "./components"
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
     <Video/> 
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
