import { useQuery } from "react-query";
import { getContactUsPosts } from "../queries/queries";
import Card from "../components/Card";

const Home = () => {
  const { data: posts, isSuccess } = useQuery(
    "posts",
    async () => await getContactUsPosts()
  );

  console.log(posts);

  return (
    <div>
      {isSuccess &&
        posts.map((post) => (
          <Card
            key={post.id}
            firstName={post.first_name}
            lastName={post.last_name}
            email={post.email}
            body={post.body}
          />
        ))}
    </div>
  );
};

export default Home;
