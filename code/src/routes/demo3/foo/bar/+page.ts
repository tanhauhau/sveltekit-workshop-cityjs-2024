export async function load() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log('wait for 5s')
  return {
    c: 3,
  }
}