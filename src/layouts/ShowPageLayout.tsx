interface ShowPageLayoutProps {
  data: string;
}

export const ShowPageLayout = ({ data }: ShowPageLayoutProps) => {
  return (
    <>
      <div>ShowPageLayout</div>
      {data}
    </>
  );
};
