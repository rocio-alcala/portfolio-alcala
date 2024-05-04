interface StackItemProps {
  src: string;
}

export default function StackItem({ src }: StackItemProps) {
  return (
    <img className="h-24 p-2 hover:animate-pulse animate-sink" src={src} />
  );
}
