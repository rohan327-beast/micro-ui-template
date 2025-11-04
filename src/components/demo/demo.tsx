import { useQuery } from '@tanstack/react-query';
import { fetchDemo } from '../../api/demoApi';
import type { DemoModel } from '../../models/DemoModel';
import ErrorPage from '../shared/Error';
import Loading from '../shared/Loding';
import { config } from '../../config';

const Demo: React.FC<{}> = () => {
  const userId = 'ba96aed5-b147-405e-b2ae-dcca1703a569'; // Replace with actual user ID logic
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['menu'],
    queryFn: () => fetchDemo(userId, config.serviceUrl, 'token'), // Adjusted to match expected function signature
    retry: 3, // Retry up to 3 times on failure
    staleTime: 0.5 * 60 * 1000, // Data is fresh for 1 minutes
    refetchInterval: 0.5 * 60 * 1000, // Refetch data every 1 minutes
  });

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorPage message={error.message} name={error.name} />;
  }
  //console.log('data from Menu');
  return (
    <div>
      <ul>
        {data.map((item: DemoModel) => (
          <li className="" key={item.pageId}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
