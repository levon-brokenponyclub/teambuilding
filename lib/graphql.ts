const WP_URL = process.env.NEXT_PUBLIC_WP_URL || "https://wordpress-1603449-6657138.cloudwaysapps.com";

export async function gql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(`${WP_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`GraphQL error: ${res.status}`);
  }

  const json = await res.json();
  if (json.errors?.length) {
    throw new Error(json.errors.map((e: { message: string }) => e.message).join(", "));
  }

  return json.data as T;
}
