import { useEffect } from 'react';

function useFetchUser(fetcher) {
  useEffect(() => {
    fetcher();
  }, [fetcher]);
}
export default useFetchUser;
