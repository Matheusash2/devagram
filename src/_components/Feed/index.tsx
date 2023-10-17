import { useEffect, useState } from "react";
import { IUserData } from "../../_services/UserService/types";
import Post from "./Post";
import * as FeedService from "../../_services/FeedService";
import { IPost } from "./Post/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, FlatList, View } from "react-native";
import { colors } from "../../../app.json";

const Feed = (props: { isProfileFeed?: boolean; profile?: IUserData }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  type navigationTypes = NativeStackNavigationProp<RootStackParamsList, "Home">;
  const navigation = useNavigation<navigationTypes>();

  useEffect(() => {
    loadPosts();
    navigation.addListener("focus", () => {
      loadPosts();
    });
  }, [props]);

  const loadPosts = async () => {
    if ((props.isProfileFeed && props.profile) || !props.isProfileFeed) {
      try {
        setIsLoading(true);
        const { data } = await FeedService.getPosts(props?.profile?.id);
        const postsFormated: IPost[] = data.map((post: any) => {
          const postFormated: IPost = {
            id: post._id,
            image: post.foto,
            description: post.descricao,
            user: {
              id: post.idUsuario,
              name: post?.usuario?.nome || props.profile?.name,
              avatar: post?.usuario?.avatar || props.profile?.avatar,
              email: "",
              token: "",
            },
            comments: post.comentarios.map((c: any) => {
              return {
                userId: c.usuarioId,
                name: c.nome,
                message: c.comentario,
              };
            }),
            likes: post.likes,
          };
          return postFormated;
        });
        setPosts(postsFormated);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        console.log(error);
        Alert.alert("Erro", "Erro ao carregar o Feed")
      }
    }
  };
  return (
    <View>
        <FlatList
              data={posts}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (<Post post={item} />)}
              onEndReachedThreshold={0.1}
              ListFooterComponent={() => (
                isLoading ? 
                  <View>
                    <ActivityIndicator size={30} color={colors.primaryColor1} />
                  </View>
                 : null
                )}
            />
    </View>
  );
};

export default Feed;
