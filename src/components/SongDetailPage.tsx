interface SongPageDetailProps {
  data: string;
}

export const SongDetailPage = ({ data }: SongPageDetailProps) => {
  return (
    <div>
        <h1>Song Detail Page</h1>
        {data}
    </div>
  )
}
