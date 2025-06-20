import { lazy, useState } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));
const Dashboard = lazy(() => import("./Pages/Dashboard/dashboard"));
const CreateMatch = lazy(() => import("./Pages/Matches/CreateMatch"));
const ResetPassword = lazy(() => import("./Pages/Auth/ResetPassword"));
const ForgotPassword = lazy(() => import("./Pages/Auth/ForgotPassword"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const MatchDetails = lazy(() => import("./Pages/Matches/MatchDetails"));
const DisplayMatches = lazy(() => import("./Pages/Matches/displayMatches"));
const Chat = lazy(() => import("./Pages/Chat/Chat"));
const About = lazy(() => import("./Pages/About/about"));

function App() {
  const [IsConnected, setIsConnected] = useState(false);
  return (
    <BrowserRouter>
      <Suspense >
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login  setIsConnected={setIsConnected}/>} />
          <Route path="/home" element={<Dashboard  setIsConnected={setIsConnected}/>}/>
          <Route path="/create-match" element={<CreateMatch setIsConnected={setIsConnected} />} />
          <Route path="/profile" element={<Profile setIsConnected={setIsConnected} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password/reset" element={<ResetPassword />} />
          <Route path="/matches/:id" element={<MatchDetails />} />
          <Route path="/matches" element={<DisplayMatches />} />
          <Route path="/reset" element={<ResetPassword/>} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
