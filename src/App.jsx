import { createContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FPass from './auth/forgotPass.jsx'
import SignUp from './auth/signUp.jsx'
import SignIn from './auth/signIn.jsx'
import Dashboard from './(dashboard)/page.jsx'
import { AuthRoutes, UserRoutes } from './routes/routes.js'
import NotFound from './components/notFound.jsx'
import ReportBoard from './report/board.jsx'
import CriminalBoard from './criminal/board.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Report from './report/page.jsx'
import Criminal from './criminal/page.jsx'
import AddReport from './report/create.jsx'

export const UserContext = createContext({ user: "", setuser: () => { } })

function App() {
  const [user, setUser] = useState("")

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <Header />
      <Routes>
        {/* auth */}
        <Route path="/signin" element={<AuthRoutes><SignIn /></AuthRoutes>} />
        <Route path="/signup" element={<AuthRoutes><SignUp /></AuthRoutes>} />
        <Route path="/forgot-pass" element={<AuthRoutes><FPass /></AuthRoutes>} />

        {/* default */}
        <Route path="/" element={<UserRoutes><Dashboard /></UserRoutes>} />
        <Route path="/*" element={<NotFound />} />

        {/* features */}
        <Route path="/reports" element={<UserRoutes><ReportBoard /></UserRoutes>} />
        <Route path="/report/:uid" element={<UserRoutes><Report /> </UserRoutes>} />
        <Route path="/create-report" element={<UserRoutes><AddReport /> </UserRoutes>} />
        <Route path="/criminals" element={<UserRoutes><CriminalBoard /></UserRoutes>} />
        <Route path="/criminal/:id" element={<UserRoutes><Criminal /></UserRoutes>} />
      </Routes>
      <Footer />
    </UserContext.Provider >

  )
}

export default App
