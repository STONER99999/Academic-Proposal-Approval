import Login from "./Auth/Login";
import SignUpPage from "./Auth/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProposalsTable } from "./pages/Proposals.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Users from "./pages/Users.jsx";
import Status from "./pages/Status.jsx";
import ProposalForm from "./components/ProposalForm.jsx";
import WelcomeScreen from "./pages/WelcomeScreen.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useUser } from "./Auth/useUser.js";
import ContactUs from "./pages/contact_us.jsx";
import Services from "./pages/service_page.jsx";
import AboutUs from "./pages/about_us.jsx";
import { useState, useEffect } from "react";
import { getCurrentUser } from "./services/apiAuth.js";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await getCurrentUser();
        setIsAdmin(user && user?.user_metadata.isFaculty == true);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    getUser();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutUs" element={<AboutUs />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="users" element={<Users />} />
          <Route path="status" element={<Status />} />
          <Route path="form" element={<ProposalForm />} />

          {!isAdmin && <Route path="proposals" element={<ProposalsTable />} />}
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
