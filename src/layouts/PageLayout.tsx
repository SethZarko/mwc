import { PageType } from "@/types/PageType";
import { VideoPageLayout } from "./VideoPageLayout";
import { ShowPageLayout } from "./ShowPageLayout";
import { SongPageLayout } from "./SongPageLayout";
import { NotFoundLayout } from "./NotFoundLayout";

interface PageLayoutProps {
  data: string;
  page: string;
}

export const PageLayout = ({ data, page }: PageLayoutProps) => {
  switch (page) {
    case PageType.Shows:
        return <ShowPageLayout data={data} />
    case PageType.Videos:
        return <VideoPageLayout data={data} />
    case PageType.Songs:
        return <SongPageLayout data={data} />
    default:
        return <NotFoundLayout />
  }
};
