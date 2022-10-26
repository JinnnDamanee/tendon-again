import { useRouter } from "next/router";
import ThemeToggle from "@baseComponents/ThemeToggle"
import BreadCrumbNav from "@baseComponents/BreadCrumbNav"

const Header = () => {
    const router = useRouter();
    return (
        <div className="flex justify-end m-4">
            <ThemeToggle />
            {router.pathname !== '/' &&
                <BreadCrumbNav />
            }
        </div>
    )
}

export default Header