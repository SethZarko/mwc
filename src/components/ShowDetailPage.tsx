interface ShowPageDetailProps {
  data: string;
}


export const ShowDetailPage = ({ data }: ShowPageDetailProps) => {
  return (
    <div>
        <h1>Show Detail Page</h1>
        {data}
    </div>
  )
}
