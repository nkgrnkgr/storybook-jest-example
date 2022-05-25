import { redirect } from "./location";

export const Test = () => {
  const handleClick = () => {
    redirect();
  };

  return (
    <div>
      <div>hoge</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};
