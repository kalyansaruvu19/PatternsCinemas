import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / PatternsCinema's`;
    });

  return null;
}
