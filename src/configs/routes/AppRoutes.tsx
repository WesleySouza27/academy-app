import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cadastro } from "../../pages/Cadastro";
import { Login } from "../../pages/Login";
import { Projetos } from "../../pages/Projetos";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { Avaliacoes } from "../../pages/Avaliacoes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}