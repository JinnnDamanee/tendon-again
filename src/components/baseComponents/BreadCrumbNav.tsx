import Image from 'next/image';
import Link from 'next/link';
import BreadCrumbContainer from '@baseComponents/BreadCrumbContainer';
import { useBreadCrumb } from 'context/breadCrumb';
import { useEffect } from 'react';

const BreadCrumbNav = () => {
    // const router = useRouter();
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
                                    <NavItem
                                        name={path.name}
                                        link={path.link}
                                    />
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
    name: string | string[];
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


/*
<>
                        {
                            <li>
                                <NavItem
                                    name={'Dashboard'}
                                    link={'/'}
                                />
                            </li>
                        }
                        {
                            router.query.courseId && (
                                <li>
                                    <NavItem
                                        name={router.query.courseId}
                                        link={`/courseMap/${router.query.courseId}`}
                                    />
                                </li>
                            )
                        }
                        {
                            router.query.lessonId && (
                                <li>
                                    { <NavItem
                                            name={router.query.lessonId}
                                            link={`/courseMap/${router.query.lessonId}`}
                                        /> }
<span>
    {router.query.lessonId}
</span>
                                </li >
                            )
                        }
                    </>
*/