import { notFound } from "next/navigation";


interface Props {
  params: {
    id: string;
  }
}

export default function({ params }: Props) {
  if( params.id == 'kids') {
    notFound();
  }

  return (
    <div>
      <h1>Category Page { params.id }</h1>
    </div>
  );
}