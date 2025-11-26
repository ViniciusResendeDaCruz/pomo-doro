import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap';

export function Tooltip({
  children,
  title,
  key,
}: {
  children: React.ReactElement;
  title: React.ReactNode;
  key?: string | number;
}) {
  return (
    <OverlayTrigger
      key={key}
      overlay={<BootstrapTooltip style={{ position: 'fixed' }}>{title}</BootstrapTooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}
