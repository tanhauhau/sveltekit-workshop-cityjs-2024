export async function load({ fetch }) {
  const response = await fetch('/demo6/api');
  const data = await response.json();
  return {
    reviews: data as Array<{
      name: string;
      singer: string;
      star: number;
    }>
  };
}
