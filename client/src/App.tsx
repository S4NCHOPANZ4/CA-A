import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUsPage, HomePage } from './Routes';

function App() {
  return (
    <div className='bg-zinc-100  min-h-[100vh]'>

      <BrowserRouter>
        <Routes>
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
