import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import ScrollToTop from "@/components/Special/ScrollToTop/ScrollToTop";
import Loader from "@/components/Common/Loader/Loader";

import Landing from "@/pages/Landing/Landing";

const LightSingleWaveHome = lazy(() => import("@/pages/LightSingleWave/Home.jsx"));
const LightSliderWaveHome = lazy(() => import("@/pages/LightSliderWave/Home.jsx"));
const LightVideoWaveHome = lazy(() => import("@/pages/LightVideoWave/Home.jsx"));
const LightVideoSliderWaveHome = lazy(() => import("@/pages/LightVideoSliderWave/Home.jsx"));

const LightSingleHome = lazy(() => import("@/pages/LightSingle/Home.jsx"));
const LightSliderHome = lazy(() => import("@/pages/LightSlider/Home.jsx"));
const LightVideoHome = lazy(() => import("@/pages/LightVideo/Home.jsx"));
const LightVideoSliderHome = lazy(() => import("@/pages/LightVideoSlider/Home.jsx"));

const DarkSingleWaveHome = lazy(() => import("@/pages/DarkSingleWave/Home.jsx"));
const DarkSliderWaveHome = lazy(() => import("@/pages/DarkSliderWave/Home.jsx"));
const DarkVideoWaveHome = lazy(() => import("@/pages/DarkVideoWave/Home.jsx"));
const DarkVideoSliderWaveHome = lazy(() => import("@/pages/DarkVideoSliderWave/Home.jsx"));

const DarkSingleHome = lazy(() => import("@/pages/DarkSingle/Home.jsx"));
const DarkSliderHome = lazy(() => import("@/pages/DarkSlider/Home.jsx"));
const DarkVideoHome = lazy(() => import("@/pages/DarkVideo/Home.jsx"));
const DarkVideoSliderHome = lazy(() => import("@/pages/DarkVideoSlider/Home.jsx"));

/* Import more pages here */

function PageRoutes() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/">
              <Route index element={<DarkSingleHome />} />

              <Route path="light-single-wave" element={<LightSingleWaveHome />} />
              <Route path="light-slider-wave" element={<LightSliderWaveHome />} />
              <Route path="light-video-wave" element={<LightVideoWaveHome />} />
              <Route path="light-video-slider-wave" element={<LightVideoSliderWaveHome />} />

              <Route path="light-single" element={<LightSingleHome />} />
              <Route path="light-slider" element={<LightSliderHome />} />
              <Route path="light-video" element={<LightVideoHome />} />
              <Route path="light-video-slider" element={<LightVideoSliderHome />} />

              <Route path="dark-single-wave" element={<DarkSingleWaveHome />} />
              <Route path="dark-slider-wave" element={<DarkSliderWaveHome />} />
              <Route path="dark-video-wave" element={<DarkVideoWaveHome />} />
              <Route path="dark-video-slider-wave" element={<DarkVideoSliderWaveHome />} />

              <Route path="dark-single" element={<DarkSingleHome />} />
              <Route path="dark-slider" element={<DarkSliderHome />} />
              <Route path="dark-video" element={<DarkVideoHome />} />
              <Route path="dark-video-slider" element={<DarkVideoSliderHome />} />

              {/* Add More Pages Here */}
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default PageRoutes;
