import useProducts from '../hooks/useProducts';
import List from '../components/List';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Empty from '../components/Empty';
import Error from '../components/Error';

const Home = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <Loader />;
  if (isError) return <Error message="Something went wrong" />;
  if (!data || data.length < 1) return <Empty message="There is no data" />;

  return (
    <List items={data} renderItem={(item) => <Product product={item} />} />
  );
};

export default Home;
