import CreateStatistics from '../Statistics';
import data from '../../assets/data.json';

const StatisticsComponent = () => {
  return (
    <div>
      <CreateStatistics title="Upload stats" stats={data} />
    </div>
  );
};

export default StatisticsComponent;
