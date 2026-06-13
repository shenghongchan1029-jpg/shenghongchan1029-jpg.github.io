import type { FC } from 'react';

interface TargetCursorProps {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  hoverDuration?: number;
  parallaxOn?: boolean;
}

declare const TargetCursor: FC<TargetCursorProps>;
export default TargetCursor;
