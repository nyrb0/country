import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");
  let currentPost = posts;
  if (query) {
    currentPost = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return NextResponse.json(currentPost);
}

// export async function POST(req: Request) {
//   const body = await req.json();
//   console.log(body);
//   return NextResponse.json({ body });
// }
