import { scroller } from "react-scroll";

interface iScrollToSection {
  id: string;
  duration: number;
  smooth: boolean;
}

export function useScrollToSection({
  id,
  duration,
  smooth,
}: iScrollToSection) {
  scroller.scrollTo(id, {
    smooth: smooth,
    duration: duration,
  });
}
