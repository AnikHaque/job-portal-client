import { RouterProvider } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { router } from './Routes/Route/router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
