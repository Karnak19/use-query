import { defaultContext, useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useHelloQuery(extra) {
  return useQuery({
    queryFn: () => axios.get('/api/hello').then((r) => r.data),
    queryKey: ['hello'],
    context: defaultContext
    ...extra,
  });
}

export default useHelloQuery;
