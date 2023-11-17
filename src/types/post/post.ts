export type PostCommentType = {
  id: number;
  comment: string;
  author: UserType;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type PostType = {
  id: number;
  image: string;
  description: string;
  author: UserType;
  likes: number;
  comments: PostCommentType[];
  isLiked: boolean;
};
