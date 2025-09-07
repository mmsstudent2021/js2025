export const productApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const fetchProduct = (...args) =>
  fetch(...args).then((res) => res.json());

export const destroyProduct = (id) => {
  return fetch(`${productApiUrl}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};

export const storeProduct = (payload) => {
  return fetch(productApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};
