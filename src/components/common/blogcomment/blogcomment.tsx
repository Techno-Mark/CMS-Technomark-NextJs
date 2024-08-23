import Image from "next/image";
import React from "react";

interface blogsection {
  userimage?: string;
  userName?: string;
  uploadDate?: string;
  updateDate?: string;
  bannerImage?: string;
  likeImage?: string;
  likeCount?: string;
}

interface blogProps {
  props?: {
    data: blogsection[];
  };
}

const BlogComment: React.FC<blogProps> = ({ props }: any) => {
  return (
    <div className="container mx-auto">
      <div className="shadow-custom-green p-16 mb-20 bg-[rgba(231,248,234,0.40)]">
        <div className="flex w-full ">
          <Image
            src={props[0].data[0].userimage}
            className="rounded-full h-[50px]"
            alt="user-image"
            width={50}
            height={50}
          />
          <div className="w-full ml-5 text-[var(--secondary--color)]">
            <h3 className="text-3xl font-semibold">
              {props[0].data[0].userName}
            </h3>
            <div className="flex justify-between font-medium text-2xl">
              <span>{props[0].data[0].uploadDate}</span>
              <span>Last updated {props[0].data[0].updateDate}</span>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <Image
            src={props[0].data[0].bannerImage}
            className="object-contain"
            width={1176}
            height={500}
            alt="banner"
          />
        </div>
        <div className="flex mt-10   opacity-60 items-center">
          <Image
            src={props[0].data[0].likeImage}
            className="object-contain cursor-pointer"
            width={25}
            height={25}
            alt="thumbs"
          />
          <span className="ml-3  cursor-pointer font-semibold text-2xl text-[var(--secondary--color)]">
            {props[0].data[0].likeCount} Likes
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogComment;
