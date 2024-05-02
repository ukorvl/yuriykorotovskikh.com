createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    slug?: string;
    date?: Date;
    author?: string;
    content?: any;
    tags?: { data: Tag[] };
    subtitle?: string;
    category?: { data: Category };
    isFeature?: boolean;
    recommendedBlogs: { data: Blog[] };
    share_image?: { data: Media };
    generated_share_image?: { data: Media };
    generated_share_text?: string;

X