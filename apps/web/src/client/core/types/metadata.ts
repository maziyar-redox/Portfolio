enum PAGE_TITLES {
    MAIN = "RED0X BLOG | Main Page",
    BLOG_LIST = "RED0X BLOG | Blog List Page",
    BLOG = "RED0X BLOG | ",
    NOT_FOUND_ERROR = "RED0X BLOG | Not Found",
    INTERNAL_ERROR = "RED0X BLOG | Internal Error",
    FORBIDDEN_ERROR = "RED0X BLOG | Restricted Page",
};

type PageMetaData = {
    title: PAGE_TITLES | string;
    description: string;
    keywords: string[];
};

export type { PageMetaData };

export { PAGE_TITLES };