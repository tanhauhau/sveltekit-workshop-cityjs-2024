import { json } from '@sveltejs/kit';

const data = [
  { name: 'Rolling in the Deep', singer: 'Adele', star: 5 },
  { name: 'Anti Hero', singer: 'Taylor Swift', star: 4 },
];

export function GET() {
  return json(data);
}

export async function POST({ request }) {
  const entry = await request.json();
  data.push(entry);
  return json({ success: true });
}