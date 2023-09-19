import { Text } from "react-native";
import { View } from "react-native";
import Container from "../../_components/Container";

const Home = () => {
  return (
    <Container
      headerProps={{ default: true }}
      footerProps={{ currentTab: "Home" }}
    >
      <Text>Teste de Home</Text>
    </Container>
  );
};

export default Home;
