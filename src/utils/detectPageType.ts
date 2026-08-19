import { PageType } from "@/types/PageType";

export const detectPageType = (path: string): PageType => {
  const normalizedPath = (path || "").toLowerCase() as PageType;
  const validTypes = Object.values(PageType);

  if (
    validTypes.includes(normalizedPath) &&
    normalizedPath !== PageType.NotFound
  ) {
    return normalizedPath;
  }
  return PageType.NotFound;
};
