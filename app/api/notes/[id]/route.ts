import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { api } from "../../api";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: Props) {
  const cookieStore = await cookies();
  const { id } = await params;
  const { data } = await api(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    }
  });

  if (data) {
    return NextResponse.json(data);
  }

  return NextResponse.json(
	  { error: 'Failed to fetch note' }, 
	  { status: 500 }
	);
}