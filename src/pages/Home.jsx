import useProducts from '../hooks/useProducts';
import List from '../components/List';
import Loader from '../components/Loader';
import Empty from '../components/Empty';
import Error from '../components/Error';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <Loader />;
  if (isError) return <Error message="Something went wrong" />;
  if (!data || data.length < 1) return <Empty message="There is no data" />;

  return (
    <List items={data} renderItem={(item) => <ProductCard product={item} />} />
  );
};

export default Home;
