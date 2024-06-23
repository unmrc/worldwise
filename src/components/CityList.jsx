import Spinner from '../components/Spinner';
import Message from '../components/Message';
import CityItem from './CityItem';
import styles from './CityList.module.css';
import { useCities } from '../contexts/CitiesContext';

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map'></Message>
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id}></CityItem>
      ))}
    </ul>
  );
}

export default CityList;
