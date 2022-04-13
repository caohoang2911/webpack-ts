import productService from '../../api/productService';
export default function Query() {
  const { data, refetch, isFetching } = productService.useGetProductQuery(null);

  return (
    <div>
      {/* <button onClick={refetch}>Refect</button>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
