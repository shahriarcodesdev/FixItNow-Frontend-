import { Button } from "@/components/ui/button";
import { getMe } from "@/service/getMe";



export default async function  HomePage() {
  console.log("root route")
  const user = await getMe()
  console.log(user)
  return (
  <div>
    hello world
    <Button>click me</Button>
  </div>

  );
}
