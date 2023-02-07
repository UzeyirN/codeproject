import './App.css';
import ROUTES from './routes/route';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(ROUTES)
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;