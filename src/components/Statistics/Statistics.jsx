import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const iconsArr = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ items }) => {
  return (
    <>
      <StatisticTitle>Main Statistics</StatisticTitle>

      <StatisticsList>
        {items.map(({ id, title, total }, index) => (
          <StatisticItem
            key={id}
            title={title}
            total={total}
            icon={iconsArr[index]}
          />
        ))}
      </StatisticsList>
    </>
  );
};
