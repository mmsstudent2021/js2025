export const categoryApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const fetchCategory = (...args) =>
  fetch(...args).then((res) => res.json());
