import { useEffect } from "react";

const useRestoreScroll = (key, ready) => {
  useEffect(() => {
    if (!ready) return;

    const scroll = sessionStorage.getItem(key);

    if (scroll) {
      window.scrollTo(0, Number(scroll));
    }
  }, [ready, key]);
};

export default useRestoreScroll;