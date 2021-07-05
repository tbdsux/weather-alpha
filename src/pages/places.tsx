import { useRouter } from 'next/dist/client/router';

const PlacesPage = () => {
  const router = useRouter();

  const { latitude, longitude } = router.query;

  return (
    <div>
      {latitude} {longitude}
    </div>
  );
};

export default PlacesPage;
