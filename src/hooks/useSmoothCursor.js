import { useEffect, useState } from "react";

export default function useSmoothCursor(target) {
  const [smooth, setSmooth] = useState(target);

  useEffect(() => {
    let frame;

    const update = () => {
      setSmooth((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.2,
        y: prev.y + (target.y - prev.y) * 0.2,
      }));

      frame = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(frame);
  }, [target]);

  return smooth;
}
