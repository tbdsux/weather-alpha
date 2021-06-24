/* a custom fetch function wrapper */
const fetcher = async (url: string) => {
  return await fetch(url)
    .then((r) => r.json())
    .catch(() => undefined);
};

export default fetcher;
