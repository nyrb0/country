type post = {
  id: number;
  title: string;
  body: string;
};

async function PostsAsync(): Promise<post[]> {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) throw new Error("error");
  return res.json();
}
const Posts = async () => {
  const data = await PostsAsync();
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>
          <div>ID:{d.id}</div>
          <div>ID:{d.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
