# InsightEdge
A modern content publishing platform built with **Next.js App Router**, designed to showcase articles, announcements, and rich media content with performance and style in mind.

## Features

- **Posts Display System**: Dynamically renders posts with support for HTML content (`body_html`), tags, cover images, and metadata like publish dates.
- **Image Optimization with Blur Previews**:
  - Supports both local and remote images.
  - Generates and displays low-quality placeholders using **Base64** on the client.
- **Client-Side Rendering**:
  - Certain components like `<Posts />` are implemented as client components for interactivity and performance.
- **Stylistic HTML Rendering**: Uses `dangerouslySetInnerHTML` to render post content with enhanced styling.
- **Componentized Architecture**: Modular components make development and maintenance easy.

## Tech Stack

| Tech                | Purpose                                 |
|---------------------|------------------------------------------|
| **Next.js (App Router)** | Full-stack framework for React        |
| **React 19**         | Frontend component architecture         |
| **TypeScript**       | Type safety and developer tooling       |
| **Tailwind CSS**     | Utility-first CSS framework             |
| **ShadCN/UI**        | Accessible and styled UI components     |
| **Plaiceholder**     | For generating `base64` blur image URLs |
| **Vercel** (optional) | Deployment platform for Next.js apps    |

## Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/insightedge.git
cd insightedge
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
# or
yarn
```

3. **Create a `.env.local` file**
```bash
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SUPABASE_URL=[supabase_url]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[supabase_anon_key]
AUTH_SECRET=[auth_secret]
AUTH_TRUST_HOST=true
```

4. **Run the Dev Server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

## Project Structure (Relevant Parts)
```bash
/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── posts/
│   │   └── [slug]/page.tsx       # Post details page
├── components/
│   ├── PostCard.tsx              # Individual post display
│   ├── Posts.tsx                 # Client-rendered posts list
├── lib/
│   ├── getBlurDataURL.ts         # Utility to generate base64 placeholder
├── public/                       # Local image assets
├── styles/
│   └── globals.css               # Global styles
```