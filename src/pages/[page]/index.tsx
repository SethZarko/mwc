import { PageLayout } from "@/layouts/PageLayout";
import { PageType } from "@/types/PageType";
import { detectPageType } from "@/utils/detectPageType";
import { serverRedirect } from "@/utils/serverRedirect";
import { JSX } from "react";
import type { GetServerSideProps } from "next";

interface PageProps {
  page: string;
  pageLayout: PageType;
  data: string;
}

export default function DynamicPage({ page, data }: PageProps): JSX.Element {
  return <PageLayout data={data} page={page} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context?.params?.page?.toString() || "";
  const pageLayout = detectPageType(page);

  if (pageLayout === PageType.NotFound) {
    return { notFound: true };
  }

  if (page !== pageLayout) {
    return serverRedirect(`/${pageLayout}`, 301);
  }

  let data = null;

  switch (page) {
    case PageType.Songs:
      data = "Song Data";
      break;
    case PageType.Videos:
      data = "Video Data";
      break;
    case PageType.Shows:
      data = "Shows Data";
      break;
    default:
      data = null;
  }

  return {
    props: {
      page: pageLayout,
      data,
    },
  };
};
