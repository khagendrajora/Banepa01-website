import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { LandingPage } from "./Pages/LandingPage";
import { Contact } from "./Pages/Contact";
import { AboutUsPage } from "./Pages/AboutUsPage";
import { WardIntroPage } from "./Pages/WardIntroPage";
import { TeamsPage } from "./Pages/TeamsPage";
import { PublicationPage } from "./Pages/PublicationPage";
import { NoticePage } from "./Pages/NoticePage";

import { NewsDetailPage } from "./Pages/NewsDetailPage";
import { NoticeDetailPage } from "./Pages/NoticeDetailPage";
import { TaxPage } from "./Pages/HeroComponents/TaxPage";
import { ComplainPage } from "./Pages/HeroComponents/ComplainPage";
import { NagrikPage } from "./Pages/HeroComponents/NagrikPage";
import { BudgetPage } from "./Pages/HeroComponents/BudgetPage";
import { NewsPage } from "./Pages/NewsPage";
import { AdminLogin } from "./AdminDashboard/Pages/AdminLogin";
import { Dashboard } from "./AdminDashboard/Dashboard";
import { DashboardData } from "./AdminDashboard/Components/DashboardData";
import { DashboardImage } from "./AdminDashboard/Components/DashboardImage/DashboardImage";
import { Intro } from "./AdminDashboard/Components/Introduction/Intro";
import { Works } from "./AdminDashboard/Components/Works/Works";
import { Notice } from "./AdminDashboard/Components/Notice/Notice";
import { Publication } from "./Components/Publication";
import { News } from "./Components/News";
import { Employes } from "./AdminDashboard/Components/Employes/Employes";
import { BoardMembers } from "./AdminDashboard/Components/Employes/BoardMembers";
import { AddHero } from "./AdminDashboard/Components/DashboardImage/AddHero";
import { AddIntro } from "./AdminDashboard/Components/Introduction/AddIntro";
import { AddWork } from "./AdminDashboard/Components/Works/AddWork";
import { AddNews } from "./AdminDashboard/Components/News/AddNews";
import { AddNotice } from "./AdminDashboard/Components/Notice/AddNotice";
import { AddEmploye } from "./AdminDashboard/Components/Employes/AddEmploye";
import { AddPublication } from "./AdminDashboard/Components/Publication/AddPublication";
import { AddBod } from "./AdminDashboard/Components/Employes/AddBod";
import { UpdateIntro } from "./AdminDashboard/Components/Introduction/UpdateIntro";
import { UpdatePublication } from "./AdminDashboard/Components/Publication/UpdatePublication";
import { UpdateNotice } from "./AdminDashboard/Components/Notice/UpdateNotice";
import { UpdateWork } from "./AdminDashboard/Components/Works/UpdateWork";
import { UpdateNews } from "./AdminDashboard/Components/News/UpdateNews";
import { UpdateEmploy } from "./AdminDashboard/Components/Employes/UpdateEmploy";
import { UpdateBod } from "./AdminDashboard/Components/Employes/UpdateBod";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            <Route path="wardintro" element={<WardIntroPage />} />
            <Route path="teams" element={<TeamsPage />} />\
            <Route path="publication" element={<PublicationPage />} />
            <Route path="notices" element={<NoticePage />} />
            <Route path="noticedetail/:id" element={<NoticeDetailPage />} />
            <Route path="newsPage" element={<NewsPage />} />
            <Route path="newsdetail/:id" element={<NewsDetailPage />} />
            <Route path="taxpage" element={<TaxPage />} />
            <Route path="complain" element={<ComplainPage />} />
            <Route path="nagrikpatra" element={<NagrikPage />} />
            <Route path="budget" element={<BudgetPage />} />
          </Route>
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="admin" element={<Layout />}>
            {/* <Route element={<PrivateRoute />}> */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboarddata" element={<DashboardData />} />
            <Route path="dashboardImage" element={<DashboardImage />} />
            <Route path="intro" element={<Intro />} />
            <Route path="works" element={<Works />} />
            <Route path="notice" element={<Notice />} />
            <Route path="publication" element={<Publication />} />
            <Route path="news" element={<News />} />
            <Route path="employes" element={<Employes />} />
            <Route path="boardmembers" element={<BoardMembers />} />
            <Route path="addhero" element={<AddHero />} />
            <Route path="addintro" element={<AddIntro />} />
            <Route path="addwork" element={<AddWork />} />
            <Route path="addnews" element={<AddNews />} />
            <Route path="addnotice" element={<AddNotice />} />
            <Route path="addemploye" element={<AddEmploye />} />
            <Route path="addpublication" element={<AddPublication />} />
            <Route path="addboardmember" element={<AddBod />} />

            {/* getByID */}

            {/* update */}
            <Route path="updateintro/:id" element={<UpdateIntro />} />
            <Route
              path="updatepublication/:id"
              element={<UpdatePublication />}
            />
            <Route path="updatenotice/:id" element={<UpdateNotice />} />
            <Route path="updatework/:id" element={<UpdateWork />} />
            <Route path="updatenews/:id" element={<UpdateNews />} />
            <Route path="updateemploye/:id" element={<UpdateEmploy />} />
            <Route path="updatebod/:id" element={<UpdateBod />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
