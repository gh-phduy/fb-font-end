"use client";

import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import React, { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";
import Image from "next/image";

interface PostFormProps {}

interface AuthUser {
  _id: string;
  username: string;
  email: string;
  profileImg: string;
}

const PostForm: React.FC<PostFormProps> = ({}) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState<string | ArrayBuffer | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });
  const queryClient = useQueryClient();

  const {
    mutate: createPost,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async ({
      text,
      img,
    }: {
      text: string;
      img: string | ArrayBuffer | null;
    }) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/posts/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ text, img }),
          }
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        console.log("Error this: ", error);
      }
    },

    onSuccess: () => {
      setText("");
      setImg(null);
      toast.success("Post created successfully");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost({ text, img });
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex p-4 items-start gap-4 border-b border-gray-700">
      <div className="avatar">
        <div className="w-8 rounded-full">
          <Image
            alt="PostImage"
            src={authUser?.profileImg || "/avatar-placeholder.png"}
            width={500}
            height={500}
          />
        </div>
      </div>
      <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
        <textarea
          className="textarea w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800"
          placeholder="What is happening?!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {img && (
          <div className="relative w-72 mx-auto">
            <IoCloseSharp
              className="absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer"
              onClick={() => {
                setImg(null);
                if (imgRef.current) {
                  imgRef.current.value = "";
                }
              }}
            />
            <Image
              alt="Postavt"
              src={img as string}
              height={288}
              width={288}
              className="w-full mx-auto h-72 object-contain rounded"
            />
          </div>
        )}

        <div className="flex justify-between border-t py-2 border-t-gray-700">
          <div className="flex gap-1 items-center">
            <CiImageOn
              className="fill-primary w-6 h-6 cursor-pointer"
              onClick={() => imgRef.current?.click()}
            />
            <BsEmojiSmileFill className="fill-primary w-5 h-5 cursor-pointer" />
          </div>
          <input
            type="file"
            accept="image/*"
            hidden
            ref={imgRef}
            onChange={handleImgChange}
          />
          <Button className="bg-main h-8 w-16 rounded-full text-white px-4">
            {isPending ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              "Post"
            )}
          </Button>
        </div>
        {isError && <div className="text-red-500">{error.message}</div>}
      </form>
    </div>
  );
};

export default PostForm;
