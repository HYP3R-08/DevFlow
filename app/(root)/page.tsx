import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500">Home</h1>
    </>
  );
};

export default Home;
