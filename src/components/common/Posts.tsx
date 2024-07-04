"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import PostSkeleton from "../skeleton/PostSkeleton";
import { PostType } from "../types";
import Post from "./Post";
import useGetAllPosts from "@/hooks/useGetAllPosts";

interface PostsProps {
  feedType: string;
  username?: string;
  userId?: string;
}

const Posts: React.FC<PostsProps> = ({ feedType, username, userId }) => {
  const getPostEndpoint = () => {
    switch (feedType) {
      case "forYou":
        return `${process.env.NEXT_PUBLIC_HOSTNAME}/api/posts/all`;
      case "following":
        return `${process.env.NEXT_PUBLIC_HOSTNAME}/api/posts/following`;
      case "posts":
        return `${process.env.NEXT_PUBLIC_HOSTNAME}/api/posts/user/${username}`;
      case "likes":
        return `${process.env.NEXT_PUBLIC_HOSTNAME}/api/posts/likes/${userId}`;
      default:
        return `${process.env.NEXT_PUBLIC_HOSTNAME}/api/posts/all`;
    }
  };

  const POST_ENDPOINT = getPostEndpoint();

  const { posts, isLoading, refetch, isRefetching } =
    useGetAllPosts(POST_ENDPOINT);

  useEffect(() => {
    refetch();
  }, [feedType, username, refetch]);
  return (
    <>
      {/* {(isLoading || isRefetching) && (
        <div className="flex flex-col justify-center">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
      {!isLoading && !isRefetching && posts?.length === 0 && (
        <p className="text-center my-4">No posts in this tab. Switch 👻</p>
      )}
      {!isLoading && !isRefetching && posts && (
        <>
          {posts.map((post: PostType) => (
            <Post key={post._id} post={post} />
          ))}
        </>
      )} */}
      <div className="flex flex-col space-y-5 justify-center">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </>
  );
};

export default Posts;
