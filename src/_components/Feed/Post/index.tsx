import { View, Image, Text, TouchableOpacity } from "react-native";
import { IPost } from "./types";
import AvatarIcon from "../../../_assets/images/avatar_Search.svg";
import LikeIcon from "../../../_assets/images/like_Active.svg";
import LikeGreyIcon from "../../../_assets/images/like_Grey.svg";
import CommentIcon from "../../../_assets/images/comment_Active.svg";
import CommentGreyIcon from "../../../_assets/images/comment_Grey.svg";
import styles from "./styles";
import { useEffect, useState } from "react";
import { IUser } from "../../../_services/UserService/types";
import { getCurrentUser } from "../../../_services/UserService";

const Post = (props: { post: IPost }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [commented, setCommented] = useState<boolean>(false);
  const [userLogged, setUserLogged] = useState<IUser>();

  useEffect(() => {
    verifyLiked();
  }, []);

  const toggleLike = async () => {
    setLiked(!liked);
  };

  const verifyLiked = async () => {
    const user = await getCurrentUser();
    setUserLogged(user);
    if (user.id) {
      setLiked(props.post.likes.includes(user.id));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <TouchableOpacity>
          {props.post.user.avatar ? (
            <Image
              source={{ uri: props.post.user.avatar }}
              style={styles.avatar}
            />
          ) : (
            <AvatarIcon />
          )}
        </TouchableOpacity>
        <Text style={styles.userName}>{props.post.user.name}</Text>
      </View>
      <View>
        <Image source={{ uri: props.post.image }} style={styles.image} />
      </View>
      <View style={styles.likedAndComment}>
        <TouchableOpacity onPress={() => toggleLike()} style={styles.icon}>
          {liked ? <LikeIcon /> : <LikeGreyIcon />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          {commented ? <CommentIcon /> : <CommentGreyIcon />}
        </TouchableOpacity>
        <Text style={styles.likes}>
          Curtido por
          <Text style={[styles.likes, styles.likesBold]}>
            {props.post.likes.length} pessoas
          </Text>
        </Text>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.userName}>{props.post.user.name}</Text>
        <Text style={styles.Description}>{props.post.description}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Post;
