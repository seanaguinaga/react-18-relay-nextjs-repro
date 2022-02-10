export default async function fetchData(type, delay = 0) {
  const [res] = await Promise.all([
    fetch(`/api/user`),
    new Promise((res) => setTimeout(res, Math.random() * delay)),
  ]);
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
}
