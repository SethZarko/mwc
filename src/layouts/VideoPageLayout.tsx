interface VideoPageLayoutProps {
    data: string
}

export const VideoPageLayout = ({ data }: VideoPageLayoutProps) => {
  return (
    <div>
        <h1>Video PageLayout</h1>
        {data}
    </div>
  )
}
