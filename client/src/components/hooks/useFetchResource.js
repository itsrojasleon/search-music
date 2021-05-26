import { useEffect } from 'react';

function useFetchResource(resource, value = null) {
  useEffect(() => {
    resource(value);
  }, [resource, value]);
}

export default useFetchResource;
