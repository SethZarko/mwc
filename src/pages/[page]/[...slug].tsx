import { ShowDetailPage } from "@/components/ShowDetailPage";
import { SongDetailPage } from "@/components/SongDetailPage";
import { VideoDetailPage } from "@/components/VideoDetailPage";
import { NotFoundLayout } from "@/layouts/NotFoundLayout";
import { PageType } from "@/types/PageType";
import type { GetServerSideProps } from "next";

interface DetailPageProps {
  page: string;
  data: string;
}

export default function DynamicDetailPage({ page, data }: DetailPageProps) {
  switch (page) {
    case PageType.Songs:
      return <SongDetailPage data={data} />;
    case PageType.Videos:
      return <VideoDetailPage data={data} />;
    case PageType.Shows:
      return <ShowDetailPage data={data} />;
    default:
      return <NotFoundLayout />;
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.params?.page as string;
  const slug = context.params?.slug as string[];

  let data = null;

  switch (page) {
    case PageType.Songs:
      data = `Specific Song Data for: ${slug.join("-")}`;
      break;
    case PageType.Videos:
      data = `Specific Video Data for: ${slug.join("/")}`;
      break;
    case PageType.Shows:
      data = `Specific Show Data for: ${slug.join("/")}`;
      break;
    default:
      return { notFound: true }; 
  }

  return {
    props: {
      page,
      data,
    },
  };
};