import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import ContactInfoPage from "./pages/ContactInfoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/contacts/:id" element={<ContactInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
