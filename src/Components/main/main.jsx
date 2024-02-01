import Welcome from "./welcome";
import Check from "./check";
import Trending from "./trending/trending";
import Popular from "./whats_popular/popular";
function Main() {
  return (
    <div className="flex  w-[85%] flex-col mx-auto">
      <Welcome></Welcome>
      <Check></Check>
      <Trending></Trending>
      <Popular></Popular>
    </div>
  );
}
export default Main;
