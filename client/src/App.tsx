import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUsPage, BlogGeneralPage, ContactPage, HomePage, LoginPage, UploadCasePage} from './Routes';

function App() {
  return (
    <div className='bg-zinc-100  min-h-[100vh]'>

      <BrowserRouter>
        <Routes>
          <Route path="/service/uploadCase" element={<UploadCasePage/>}/>
          <Route path="/service/login" element={<LoginPage/>}/>
          <Route path="/blog" element={<BlogGeneralPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
