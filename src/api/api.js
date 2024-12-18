export default async function Api() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <ul>
      {data.products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
