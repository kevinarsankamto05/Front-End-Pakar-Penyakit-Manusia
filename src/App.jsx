import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LayoutAdmin from "./LayoutAdmin";
import Diagnosa from "./pages/Diagnosa";
import DaftarDokterPages from "./pages/DaftarDokter.Pages";
import TutorialPages from "./pages/TutorialPages";
import AboutPage from "./pages/AboutPages";
import LoginPages from "./pages/LoginPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import FaqPage from "./pages/FaqPage";

// ADMIN
import AboutAdmin from "./pages/admin/AboutAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import GejalaAdmin from "./pages/admin/GejalaAdmin";
import LaporanAdmin from "./pages/admin/LaporanAdmin";
import PenyakitAdmin from "./pages/admin/PenyakitAdmin";
import AturanAdmin from "./pages/admin/AturanAdmin";
import TransaksiAdmin from "./pages/admin/TransaksiAdmin";

import LoginAdmin from "./pages/admin/LoginAdmin";
import Hospitals from "./pages/admin/Hospitals";

// DETAILS
import DetailDokterPages from "./pages/details/DokterDetailPages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPages />} />

      <Route path="/register-user" element={<RegisterUserPage />} />

      <Route
        path="/"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />

      <Route
        path="/daftar-dokter"
        element={
          <Layout>
            <DaftarDokterPages />
          </Layout>
        }
      />

      <Route
        path="/diagnosa"
        element={
          <Layout>
            <Diagnosa />
          </Layout>
        }
      />

      <Route
        path="/cara-penggunaan"
        element={
          <Layout>
            <TutorialPages />
          </Layout>
        }
      />

      <Route
        path="/faq"
        element={
          <Layout>
            <FaqPage />
          </Layout>
        }
      />

      {/* ADMIN */}
      <Route path="/admin/login-admin" element={<LoginAdmin />} />

      <Route
        path="/admin/about"
        element={
          <LayoutAdmin>
            <AboutAdmin />
          </LayoutAdmin>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <LayoutAdmin>
            <DashboardAdmin />
          </LayoutAdmin>
        }
      />

      <Route
        path="/admin/daftar-gejala"
        element={
          <LayoutAdmin>
            <GejalaAdmin />
          </LayoutAdmin>
        }
      />

      <Route
        path="/admin/daftar-penyakit"
        element={
          <LayoutAdmin>
            <PenyakitAdmin />
          </LayoutAdmin>
        }
      />

      <Route
        path="/admin/basis-aturan"
        element={
          <LayoutAdmin>
            <AturanAdmin />
          </LayoutAdmin>
        }
      />

      <Route
        path="/admin/laporan"
        element={
          <LayoutAdmin>
            <LaporanAdmin />
          </LayoutAdmin>
        }
      />

      <Route
        path="/admin/transaksi"
        element={
          <LayoutAdmin>
            <TransaksiAdmin />
          </LayoutAdmin>
        }
      />

      <Route
        path="/admin/daftar-hospitals"
        element={
          <LayoutAdmin>
            <Hospitals />
          </LayoutAdmin>
        }
      />

      {/* ADMIN END */}

      {/* DETAILS */}

      <Route
        path="/admin/daftar-dokter/details/:id"
        element={<DetailDokterPages />}
      />

      {/* DETAILS END */}
    </Routes>
  );
}

export default App;
