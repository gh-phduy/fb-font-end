interface Comment {
    text: string;
    user: UserType; 
  }
  
interface UpdateProfileProps {
  fullName: string,
    username: string,
    email: string,
    bio: string,
    link: string,
    newPassword: string,
    currentPassword: string,
}
  
interface PostType {
    _id?: string; // Optional for new posts
    user: UserType; 
    text?: string;
    img?: string;
    likes: string[]; 
    comments: Comment[];
    createdAt?: Date; // Optional if you're not handling timestamps in this file
    updatedAt?: Date; // Optional if you're not handling timestamps in this file
}

interface UserType {
    _id: string;
    username: string;
    fullName: string;
    password?: string; // Optional if you want to hide password in certain scenarios
    email: string;
    followers: UserType[]; // Array of user IDs
    following: string[]; // Array of user IDs
    profileImg: string;
    coverImg: string;
    bio: string;
    link: string;
    likedPosts: string[]; // Array of post IDs
    createdAt?: Date;
    updatedAt?: Date;
  }

  interface NotificationType {
    _id?: string;
    from: UserType; // User ID
    to: string;   // User ID
    type: "follow" | "like"; 
    read: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }

  interface MessageType {
    _id?: string;
    senderId: string;
    receiverId: UserType;
    message: string;
    shouldShake?: boolean;
    createdAt: Date;
    updatedAt: Date; 
  }

interface ConversationType {
  _id?: string;
  participants: UserType;
  messages: MessageType;
  createdAt?: Date;
  updatedAt?: Date; 
}

interface LogInProps {
  username: string;
  password: string;
}

interface SignUpProps {
  email: string;
username: string;
fullName: string;
password: string;
}
  
export type {UpdateProfileProps, Comment, PostType, UserType, NotificationType, ConversationType, MessageType, LogInProps, SignUpProps } 