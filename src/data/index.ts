type acheivementProps = {
  id: number,
  title: string,
  thumbnail: string,
};

const AcheivementData: acheivementProps[] = [
  {
    id: 1,
    title: "First Acheivement",
    thumbnail: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 2,
    title: "Second Acheivement",
    thumbnail: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 3,
    title: "Third Acheivement",
    thumbnail: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    title: "Fourth Acheivement",
    thumbnail: "https://via.placeholder.com/150/24f355",
  },
];

type activityProps = {
  id: number,
  day: number,
  month: number,
  year: number,
  isActive: boolean,
}
const activityData: activityProps[] = [
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: false,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: false,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: false,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: true,
  },
  {
    id: 1,
    day: 1,
    month: 1,
    year: 2020,
    isActive: false,
  },
]

type statDataProps = {
  id: number,
  name: string,
}

const statData: statDataProps[] = [
  {
    id: 1,
    name: "Total Acheivements",
  },
  {
    id: 2,
    name: "Total Activities",
  },
  {
    id: 3,
    name: "Total Hours",
  },

]
export interface resumeProps {
  id: number,
  courseName: string,
  setIsReady: (value: boolean) => void
}


export {
  AcheivementData,
  activityData,
  statData,
}