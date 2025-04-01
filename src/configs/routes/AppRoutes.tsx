import { BrowserRouter, Routes, Route } from "react-router";
import { Cadastro } from "../../pages/Cadastro";
import { Login } from "../../pages/Login";
import { Projetos } from "../../pages/Projetos";
import { NotFoundPage } from "../../pages/NotFoundPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
