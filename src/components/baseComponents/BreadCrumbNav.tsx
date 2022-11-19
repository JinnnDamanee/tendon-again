import Image from 'next/image';
import Link from 'next/link';
import BreadCrumbContainer from '@baseComponents/BreadCrumbContainer';
import { useBreadCrumb } from 'context/breadCrumb';
import { useEffect } from 'react';

const BreadCrumbNav = () => {
    const { pathList } = useBreadCrumb()

    useEffect(() => {
        console.log(pathList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <BreadCrumbContainer>
            <div className='rounded-full overflow-hidden flex justify-center items-center'>
                <Image src={'https://raw.githubusercontent.com/JinDamanee2544/tendon-again/main/src/image/S__38969413.jpg'} alt='user' height={50} width={50} />
            </div>
            <div className="font-bold breadcrumbs p-2 overflow-hidden">
                <ul>
                    {
                        pathList.map((path, index) => {
                            return (
                                <li key={index}>
                                    {
                                        index == pathList.length - 1 ?
                                            <NavItem
                                                name={path.name}
                                                link={path.link}
                                                isActive={false}
                                            /> :
                                            <NavItem
                                                name={path.name}
                                                link={path.link}
                                                isActive={true}
                                            />
                                    }

                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </BreadCrumbContainer>
    );
}

type NavItemProps = {
    name: string
    link: string
    isActive: boolean
}


const NavItem = ({ name, link, isActive }: NavItemProps) => {
    return (
        <>
            {
                isActive ? (
                    <Link href={link}>
                        {name}
                    </Link>)
                    :
                    <span>{name}</span>
            }
        </>
    )
}
export default BreadCrumbNav;