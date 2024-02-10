import React, { useEffect } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-2xl font-bold text-blue-500 mb-4 animate-slide-in-from-left">Wisata di Jawa Timur</h1>
            <p className="text-gray-600">
              Jawa Timur adalah provinsi di Indonesia yang memiliki banyak destinasi wisata menarik. Mulai dari gunung, pantai, hingga wisata sejarah dan budaya.
            </p>
            <div className="mt-8">
              <button className="py-2 px-4  bg-blue-500 text-white rounded hover:bg-blue-400">Read More</button>
            </div>
            <div className="mt-8">
              <spline-viewer url="https://prod.spline.design/nMfskRF-m0CL3NZL/scene.splinecode"></spline-viewer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
