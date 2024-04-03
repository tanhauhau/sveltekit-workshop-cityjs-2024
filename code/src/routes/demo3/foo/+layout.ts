export async function load() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log('wait for 3s')
  return {
    b: 2,
  }
}