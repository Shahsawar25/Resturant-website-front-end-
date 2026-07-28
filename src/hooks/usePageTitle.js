import { useEffect } from 'react';

function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | Àumbre Restaurant`;
  }, [title]);
}

export default usePageTitle;