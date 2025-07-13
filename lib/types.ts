export interface IPost {
    "type_of": string;
    "id": number;
    "title": string;
    "description": string;
    "readable_publish_date": string;
    "slug": string;
    "path": string;
    "url": string;
    "comments_count": number;
    "public_reactions_count": number;
    "collection_id": number | string | null;
    "published_timestamp": string;
    "language": string;
    "subforem_id": number;
    "positive_reactions_count": number
    "cover_image": string | null;
    "social_image": string;
    "canonical_url": string;
    "created_at": string;
    "edited_at": string | null;
    "crossposted_at": string | null;
    "published_at": string;
    "last_comment_at": string | null;
    "reading_time_minutes": number;
    "tag_list": string[];
    "tags": string;
    "user": {
        "name": string;
        "username": string;
        "twitter_username": string | null;
        "github_username": string | null;
        "user_id": number;
        "website_url": string | null;
        "profile_image": string;
        "profile_image_90": string;
    },
    "organization": {
        "name": string;
        "username": string;
        "slug": string;
        "profile_image": string;
        "profile_image_90": string;
    }
}

export interface IPostWithBlur extends IPost {
    coverBlur: string;
    avatarBlur: string;
}

export interface IDetailedPost extends IPost {
    "body_html": string;
    "body_markdown": string;
    "flare_tag": {
        "name": string;
        "bg_color_hex": string;
        "text_color_hex": string;
    }
}

export interface IDetailedPostWithBlur extends IDetailedPost {
    coverBlur: string;
    avatarBlur: string;
}

export interface LargestContentfulPaint {
  renderTime?: number;
  loadTime?: number;
  size?: number;
  id?: string;
  url?: string;
  element?: Element;
  startTime?: number;
  duration?: number;
  entryType?: string;
  name?: string;
  toJSON?: () => any;
};

export interface WebVital {
    delta: number;
    entries: LargestContentfulPaint[];
    id: string;
    name: string;
    navigationType: string;
    rating: string;
    value: number;
}