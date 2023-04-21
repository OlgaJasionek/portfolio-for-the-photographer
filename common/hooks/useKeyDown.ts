import { useEffect } from "react";

export const useKeyDown = (handler: (event: any) => void, deps = []) => {
  useEffect(() => {
    document.addEventListener("keydown", handler);
    // clean up
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, deps);
};
