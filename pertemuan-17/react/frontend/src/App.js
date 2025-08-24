import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DataSiswa from './components/DataSiswa.jsx'
import Form from './components/Form.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataSiswa />} />
          <Route path="/tambah" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
