interface VideoPageDetailProps {
  data: string;
}


export const VideoDetailPage = ({ data }: VideoPageDetailProps) => {
  return (
    <div>
        <h1>Video Detail Page</h1>
        {data}
    </div>
  )
}
