
import { RouterProvider } from 'react-router-dom';
import './App.css'
import { routes } from './layouts/Main/routes'
const router = routes;

function App() {

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
