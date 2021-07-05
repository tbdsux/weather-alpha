/* a custom fetch function wrapper */
const fetcher = async <T>(url: string): Promise<T> => {
  return await fetch(url)
    .then((r) => r.json())
    .then((d: T) => d)
    .catch(() => undefined);
};

export default fetcher;
