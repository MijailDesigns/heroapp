import { useParams } from "react-router";

const HeroPage = () => {
  const { idSlug } = useParams();
  console.log({ idSlug });

  return <div>HeroPage</div>;
};

export default HeroPage;
