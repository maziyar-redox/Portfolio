enum PAGE_TITLES {
    MAIN = "RED0X BLOG | Main Page",
    BLOG_LIST = "RED0X BLOG | Blog List Page",
    BLOG = "RED0X BLOG | "
};

type PageMetaData = {
    title: PAGE_TITLES | string;
    description: string;
    keywords: string[];
};

export type { PageMetaData };

export { PAGE_TITLES };