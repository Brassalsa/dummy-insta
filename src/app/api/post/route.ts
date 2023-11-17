import { Posts } from "@/utils/dummy/dummy_data";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const GET = (req: NextApiRequest) => {
  // fetching data
  const posts = Posts;
  return new NextResponse(JSON.stringify(posts));
};

export { GET };
