import PropTypes from 'prop-types';
import { Section, SectionTitle, StatList, StatListItem, ItemLabel, ItemPercentage, } from './Statistics.styled'
import { randomColor } from '../utils/randomColor'

function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id} style={{ backgroundColor: randomColor() }}>
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{percentage}%</ItemPercentage>
          </StatListItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired
}

export default Statistics;