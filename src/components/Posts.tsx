import { useQuery } from "@tanstack/react-query";

type Post = {
  id: string;
  title: string;
};

export const Posts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)

  return (
    <div>
      <h1>ポスト一覧</h1>
      <ul>
        {data.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
