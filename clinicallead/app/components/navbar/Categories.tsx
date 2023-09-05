'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiBrain, 
  GiCactus, 
  GiCarnivoreMouth, 
  GiCastle, 
  GiCaveEntrance, 
  GiDoctorFace, 
  GiForestCamp, 
  GiHairStrands, 
  GiHeartOrgan, 
  GiIsland,
  GiKneeCap,
  GiLiver,
  GiMorgueFeet,
  GiNoseFront,
  GiStomach,
  GiWindmill
} from 'react-icons/gi';
import { FaHeadSideCough, FaSkiing, FaTeethOpen } from 'react-icons/fa';
import { SiKingstontechnology} from 'react-icons/si';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond, IoEarSharp, IoEyeSharp } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'ophthalmologist',
    icon: IoEyeSharp,
    description: 'ophthalmologist',
  },
  {
    label: 'otolaryngologist',
    icon: IoEarSharp,
    description: 'otolaryngologist'
  },
  {
    label: 'Trichologists',
    icon: GiHairStrands,
    description: 'Trichologists'
  },
  {
    label: 'dermatologist',
    icon: SiKingstontechnology,
    description: 'dermatologist'
  },
  {
    label: 'stomatologist',
    icon: GiCarnivoreMouth,
    description: 'stomatologist'
  },
  {
    label: 'dentist',
    icon: FaTeethOpen,
    description: 'dentist'
  },
  {
    label: 'otolaryngologist',
    icon: GiNoseFront,
    description: 'otolaryngologist'
  },
  {
    label: 'neurologist',
    icon: GiBrain,
    description: 'neurologist'
  },
  {
    label: 'gastroenterologist',
    icon: GiStomach,
    description: 'gastroenterologist'
  },
  {
    label: 'Hepatologists',
    icon: GiLiver,
    description: 'Hepatologists'
  },
  {
    label: 'cardiologist',
    icon: GiHeartOrgan,
    description: 'cardiologist'
  },
  {
    label: 'Orthopedician',
    icon: GiKneeCap,
    description: 'Orthopedician'
  },
  {
    label: 'podiatrist',
    icon: GiMorgueFeet,
    description: 'podiatrist'
  },
  {
    label: ' pulmonologist ',
    icon: FaHeadSideCough,
    description: ' pulmonologist '
  },
  
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;