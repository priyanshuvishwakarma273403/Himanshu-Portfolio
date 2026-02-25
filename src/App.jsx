// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:slug" element={<ProjectDetails />} />

          {/* 404 fallback */}

          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center text-center px-4">
                <div>
                  <div className="text-7xl mb-4">404</div>
                  <h1 className="font-display font-bold text-white text-3xl mb-3">Page Not Found</h1>
                  <p className="text-zinc-500 mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="btn-primary px-6 py-3 rounded-xl text-sm">Go Home →</a>
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
