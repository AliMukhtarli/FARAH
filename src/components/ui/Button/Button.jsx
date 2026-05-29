/**
 * Example reusable button — extend variants as the design system grows.
 */
export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const base = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  return (
    <button type={type} className={`${base} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
