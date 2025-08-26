import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { redirect } from "next/dist/server/api-utils";

const Home = async () => {
  const session = await auth();

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500">Home</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit" className="cursor-pointer">
          Log out
        </Button>
      </form>
    </>
  );
};

export default Home;
