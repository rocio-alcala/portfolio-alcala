interface StackItemProps {
  src: string;
}

export default function StackItem({ src }: StackItemProps) {
  return (
    <img className="h-24 animate-sink p-2 hover:animate-pulse" src={src} />
  );
}
