import { Routes, Route, Navigate } from "react-router-dom"
import { LoginForm } from "./components/login-form"
import { SignupForm } from "./components/signup-form"
import { Dashboard } from "./Dashboard"
import { PublicLayout } from "@/layouts/PublicLayout"
import { Landing } from "@/pages/Landing"
import routesDocument from "./routes/constants"

export function App() {
  // Simple auth simulation - in a real app this would come from a context/hook
  const isAuthenticated = localStorage.getItem("auth") === "true"

  const handleLogin = () => {
    localStorage.setItem("auth", "true")
    window.location.href = routesDocument.dashboard
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route 
        path={routesDocument.landing} 
        element={
          <PublicLayout>
            <Landing />
          </PublicLayout>
        } 
      />
      <Route 
        path={routesDocument.login} 
        element={
          <PublicLayout>
            <div className="flex min-h-[calc(100svh-64px)] flex-col items-center justify-center p-6 md:p-10">
              <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm 
                  onSignUpClick={() => window.location.href = routesDocument.register} 
                  onLoginSuccess={handleLogin} 
                />
              </div>
            </div>
          </PublicLayout>
        } 
      />
      <Route 
        path={routesDocument.register} 
        element={
          <PublicLayout>
            <div className="flex min-h-[calc(100svh-64px)] flex-col items-center justify-center p-6 md:p-10">
              <div className="w-full max-w-sm md:max-w-3xl">
                <SignupForm 
                  onSignInClick={() => window.location.href = routesDocument.login} 
                  onAccountCreated={handleLogin}
                />
              </div>
            </div>
          </PublicLayout>
        } 
      />

      {/* Protected Dashboard Routes */}
      <Route 
        path="/dashboard/*" 
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to={routesDocument.login} replace />
        } 
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to={routesDocument.landing} replace />} />
    </Routes>
  )
}

export default App
