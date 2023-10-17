import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
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
import Comments from "../Comments";
import Avatar from "../../Avatar";
import * as FeedService from "../../../_services/FeedService";

const Post = (props: { post: IPost }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(props.post.likes.length);
  const [commented, setCommented] = useState<boolean>(false);
  const [commentInputActive, setCommentInputActive] = useState<boolean>(false);
  const [userLogged, setUserLogged] = useState<IUser>();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    verifyLiked();
    verifyCommented();
  }, []);

  const toggleLike = async () => {
    setLiked(!liked);
    try {
      await FeedService.toggleLike(props.post.id);
      if (liked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Erro ao efetuar a curtida");
    }
  };

  const verifyLiked = async () => {
    const user = await getCurrentUser();
    setUserLogged(user);
    if (user.id) {
      setLiked(props.post.likes.includes(user.id));
    }
  };

  const verifyCommented = async () => {
    const user = await getCurrentUser();
    setUserLogged(user);
    if (user.id) {
      setCommented(
        props.post.comments.find((comment) => comment.userId === user.id)
          ? true
          : false
      );
    }
  };

  const description = () => {
    const descriptionLimit = props.post.description;
    return descriptionLimit.length > 90 && !showMore
      ? descriptionLimit.substring(0, 90) + "..."
      : descriptionLimit;
  };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Avatar user={props.post.user} />
        <Text style={styles.userName}>{props.post.user.name}</Text>
      </View>
      <View>
        <Image source={{ uri: props.post.image }} style={styles.image} />
      </View>
      <View style={styles.likedAndComment}>
        <TouchableOpacity onPress={() => toggleLike()} style={styles.icon}>
          {liked ? <LikeIcon /> : <LikeGreyIcon />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setCommentInputActive(!commentInputActive)}
        >
          {commented || commentInputActive ? (
            <CommentIcon />
          ) : (
            <CommentGreyIcon />
          )}
        </TouchableOpacity>
        <Text style={styles.likes}>Curtido por </Text>
        <Text style={[styles.likes, styles.likesBold]}>{likes} pessoas</Text>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.description}>
          <Text style={styles.userName}>{props.post.user.name}</Text>
          {"  " + description() + " "}
          {props.post.description.length > 90 && (
            <TouchableOpacity
              style={styles.btnAction}
              onPress={() => setShowMore(!showMore)}
            >
              <Text style={styles.btnDescription}>
                {showMore ? "menos" : "mais"}
              </Text>
            </TouchableOpacity>
          )}
        </Text>
      </View>
      {userLogged && (
        <Comments
          idPost={props.post.id}
          userLogged={userLogged}
          comments={props.post.comments}
          commentIsActive={commentInputActive}
        />
      )}
    </View>
  );
};

export default Post;
