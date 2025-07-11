import fs from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder } from 'plaiceholder';

export async function getBlurDataURLFromLocalPath(relativePath: string) {
  const absolutePath = path.resolve(process.cwd(), 'public', relativePath)
  const buffer = await fs.readFile(absolutePath);
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}

export async function getBlurDataURLFromRemoteURL(url: string | null, fallback: string) {
  try {
    if(!url) return await getBlurDataURLFromLocalPath(fallback);

    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to get blur placeholder');

    const buffer = Buffer.from(await res.arrayBuffer());
    const { base64 } = await getPlaiceholder(buffer);
    
    return base64;
  } catch (err) {
    console.error(err);
    return await getBlurDataURLFromLocalPath(fallback);
  }
}