import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

const BreadCrumbNav = () => {
    return (
        <motion.main
            key='breadcrumb'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex justify-center gap-4 items-center top-0 left-0 absolute p-2 m-10 rounded-full bg-gradient-to-r from-purple-light to-purple-neon text-white text-xl font-bold"
        >
            <div className='rounded-full overflow-hidden flex justify-center items-center'>
                <Image src={'https://raw.githubusercontent.com/JinDamanee2544/tendon-again/main/src/image/S__38969413.jpg'} alt='user' height={50} width={50} />
            </div>
            <div className="font-bold breadcrumbs p-2">
                <ul>
                    <li>
                        <NavItem
                            name='Dashboard'
                            link='/'
                        />
                    </li>
                    <li>Introduction to programming</li>
                </ul>
            </div>

        </motion.main>
    );
}
interface NavItemProps {
    name: string;
    link: string;
}

const NavItem = ({ name, link }: NavItemProps) => {
    return (
        <Link href={link}>
            {name}
        </Link>
    )
}
export default BreadCrumbNav;