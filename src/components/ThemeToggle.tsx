import { useTheme } from "next-themes"

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <main className="fixed top-0 right-0 m-10">
            <input
                type="checkbox"
                className="toggle"
                onChange={() => theme === 'light' ? setTheme('dark') : setTheme('light')}
                defaultChecked={theme === 'dark'}
            />
        </main>
    )
}

export default ThemeToggle