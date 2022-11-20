import { useTheme } from "next-themes"

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <main className="flex justify-end mt-8 mr-8">
            <input
                type="checkbox"
                className="toggle"
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                checked={theme === 'dark'}
            />
        </main>
    )
}

export default ThemeToggle