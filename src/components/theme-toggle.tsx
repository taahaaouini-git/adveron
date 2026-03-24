import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { MoonIcon, SunIcon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="default"
      size="default"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="dark:bg-white dark:text-black bg-black text-white px-4"
    >
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center">
          <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
        <span className="font-medium">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </Button>
  )
}
