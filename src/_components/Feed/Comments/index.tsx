import { View, Text, TextInput, Alert } from "react-native";
import { IComment, ICommentsComponent } from "./types";
import styles from "./styles";
import Avatar from "../../Avatar";
import { IUser } from "../../../_services/UserService/types";
import { useState } from "react";
import * as FeedService from "../../../_services/FeedService";

const Comments = (props: ICommentsComponent) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>(props.comments);

  const onComment = async () => {
    try {
      if (props.userLogged && props.userLogged.name && props.userLogged.id) {
        await FeedService.sendCommented(props.idPost, comment);
        const commentList = comments;
        commentList.push({
          message: comment,
          name: props.userLogged.name,
          userId: props.userLogged.id,
        });
        setComments(commentList);
        setComment("");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", " Erro ao efetuar comentario");
    }
  };
  return (
    <View>
      <View style={styles.container}>
        {comments?.length > 0 &&
          comments.map((comments: IComment, index: number) => (
            <View style={styles.containerComments} key={index}>
              <Text style={styles.userName}>
                {comments.name}
                <Text style={styles.comments}>{"  " + comments.message}</Text>
              </Text>
            </View>
          ))}
        {props.commentIsActive && (
          <View style={styles.containerCommentInput}>
            <Avatar user={props.userLogged} />
            <TextInput
              style={styles.textInput}
              placeholder="Adicione um comentario"
              value={comment}
              onChangeText={(value) => setComment(value)}
              onSubmitEditing={onComment}
              autoCapitalize="none"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Comments;
