import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useHelloQuery(extra) {
  return useQuery({
    queryFn: () => axios.get('/api/hello').then((r) => r.data),
    queryKey: ['hello'],
    ...extra,
  });
}

export default useHelloQuery;
