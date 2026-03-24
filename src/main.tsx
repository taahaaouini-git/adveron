import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PublicLayout } from "@/layouts/PublicLayout"
import { DashboardLayout } from "@/layouts/DashboardLayout"
import { Layout } from "./routes/enums"

const layouts = {
  [Layout.Public]: PublicLayout,
  [Layout.Private]: DashboardLayout,
}

import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <TooltipProvider>
      <App />
      </TooltipProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
