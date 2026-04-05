import Admonition from '@theme/Admonition';

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: 'note' | 'tip' | 'info' | 'warning' | 'danger' | 'caution';
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <Admonition type={type} title={title}>
      {children}
    </Admonition>
  );
}
