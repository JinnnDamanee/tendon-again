import { useTheme } from "next-themes"

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <main className="flex justify-end mt-4 mr-4">
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