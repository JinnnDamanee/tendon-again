import { useRouter } from "next/router";
import ThemeToggle from "@baseComponents/ThemeToggle"
import BreadCrumbNav from "@baseComponents/BreadCrumbNav"

const Header = () => {
    const router = useRouter();
    const noNavPath = ['/', '/login', '/signup']
    return (
        <>
            {!noNavPath.includes(router.pathname) &&
                <BreadCrumbNav />
            }
            <ThemeToggle />
        </>
    )
}

export default Header