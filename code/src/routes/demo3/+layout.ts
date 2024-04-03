export async function load() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('wait for 2s');
  return {
    a: 1,
  }
}