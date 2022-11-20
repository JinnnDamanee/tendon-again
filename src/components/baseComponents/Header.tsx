import { useRouter } from "next/router";
import ThemeToggle from "@baseComponents/ThemeToggle"
import BreadCrumbNav from "@baseComponents/BreadCrumbNav"

const Header = () => {
    const router = useRouter();
    return (
        <>
            {router.pathname !== '/' &&
                <BreadCrumbNav />
            }
            <ThemeToggle />
        </>
    )
}

export default Header