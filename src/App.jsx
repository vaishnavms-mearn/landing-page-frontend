
import './App.css'
import LandingPage from './Pages/LandingPage'
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
function App() {


  return (
    <>
     <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
