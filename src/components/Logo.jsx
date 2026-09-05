import Image from 'next/image';

export default function Logo({
  className = 'h-10 w-auto',
  priority = false,
  alt = 'RR Landmarks',
  ...props
}) {
  return (
    <Image
      src='/rr-logo.svg'
      alt={alt}
      width={1439}
      height={309}
      priority={priority}
      className={`object-contain ${className}`}
      {...props}
    />
  );
}
