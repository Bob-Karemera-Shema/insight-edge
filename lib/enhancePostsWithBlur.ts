import { IPost } from "@/lib/types";
import { getBlurDataURLFromRemoteURL } from "@/lib/getBlurDataURL";

export async function enhancePostsWithBlur(posts: IPost[]) {
  return await Promise.all(
    posts.map(async (post) => {
      const coverBlur = await getBlurDataURLFromRemoteURL(
        post.cover_image,
        "placeholder.jpg"
      );
      const avatarBlur = await getBlurDataURLFromRemoteURL(
        post.user.profile_image,
        "avatar.png"
      );

      return {
        ...post,
        coverBlur,
        avatarBlur,
      };
    })
  );
}