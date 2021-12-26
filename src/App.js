import React from 'react';
import 'antd/dist/antd.css'
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import {Routes, Route} from 'react-router-dom'
import QuickInsights from './pages/QuickInsight';
import Test from './pages/Test';
import Train from './pages/Train';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Routes>
            <Route path='/' element={<QuickInsights />} />
            <Route path='/test' element={<Test />} />
            <Route path='/train' element={<Train />} />
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
