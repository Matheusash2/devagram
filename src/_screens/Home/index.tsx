import { Text } from "react-native";
import { View } from "react-native";
import Container from "../../_components/Container";
import Feed from "../../_components/Feed";

const Home = () => {
  return (
    <Container
      headerProps={{ default: true }}
      footerProps={{ currentTab: "Home" }}
    >
      <Feed />
    </Container>
  );
};

export default Home;
