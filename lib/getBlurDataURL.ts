"use server";

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

export const getFallbackBlurDataURL = async () => "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDyzStcP98fnW4NbX1/WvNdHYnufzrog7Y+8fzr5yUEfUQm7H//2Q==";