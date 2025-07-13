# Reflection Questions

## 1. What performance improvements did `next/image` provide?

`next/image` delivered automatic lazy loading, responsive resizing, and compression, reducing LCP on image-heavy pages like the post list. Users experienced faster visual load times.

## 2. How did middleware help control access and track requests?

- Restricting access to admin routes and redirecting unauthenticated users.
- Logging incoming request headers.
- Injecting custom response headers.

## 3. How did ISR with revalidation work for your posts?

InsightEdge used **Incremental Static Regeneration (ISR)** with `generateStaticParams()` and `revalidate: <seconds>` on the post route for automatic revalidation. To trigger updates manually, `revalidatePath(/posts/${slug})` was used to revalidate a blog post page following a revalidate button click, ensuring only relevant content is refreshed.

## 4. What challenges did you face when setting up authentication?

After repeated practice with setting up authentication in Next.js with next-auth, I 
actually did not face any challenges. The setup went smooth, and I feel confident setting up authentication moving forward.

## 5. What Web Vitals were most impacted by your optimizations?

The most significant improvements were seen in LCP and CLS, with FID performing consistently well due to the architecture of the app.

- **Largest Contentful Paint (LCP)**: Improved by optimizing hero and cover images using next/image, lazy loading, and generating base64 blur placeholders.
- **Cumulative Layout Shift (CLS)**: Reduced by explicitly setting width and height attributes on all images and containers, preventing layout jumps during rendering.
- **First Input Delay (FID)**: Maintained low levels thanks to minimal JavaScript on first load, fast hydration due to the App Router, and deferring non-critical scripts. Since the site avoids large client-side libraries and doesn't heavily depend on runtime interactivity, user input remains responsive.