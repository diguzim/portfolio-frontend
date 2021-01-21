interface DateProps {
  dateString: string;
}

export default function Date({ dateString }: DateProps) {
  return <p>{dateString}</p>;
}
