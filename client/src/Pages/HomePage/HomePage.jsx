import React from "react";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCard from "../../Components/PostCard/PostCard";
// import HomeRight from "../../Components/HomeRight/HomeRight";
// import PostCard from "../../Components/PostCard/PostCard";
// import Sidebar from "../../Components/Sidebar/Sidebar";
import StoryCircle from "../../Components/StoryCircle/StoryCircle";
import "./HomePage.css";

const HomePage = () => {
  const posts = [
    {
      image:
        "https://cdn.pixabay.com/photo/2022/10/31/20/27/lioness-7560708__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/02/01/16/26/animal-7760773__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/01/18/13/09/camera-7726802__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/01/08/16/29/sea-7705679__340.jpg",
    },
  ];
  return (
    <div className=" ">
     

       <div className="mt-10 flex px-24 justify-between">
        <div className="flex flex-col justify-center items-center w-[60%]">
          <div className="flex space-x-2 ">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <StoryCircle
                key={index}
                image={
                  "https://cdn.pixabay.com/photo/2023/02/17/19/59/dog-7796822__340.jpg"
                }
                username="ashokzarmariya"
              />
            ))}
          </div>
          <div className="space-y-10 postsBox">
            {posts.map((item) => (
              <PostCard
                userProfileImage={
                  "https://cdn.pixabay.com/photo/2023/01/22/14/10/dinner-7736494__340.jpg"
                }
                username="pinjalmeniya"
                audio={"orignal audio"}
                postImage={item.image}
                numberOfLikes={1244}
              />
            ))}
          </div>
        </div>
        <div className="w-[35%]">
          <HomeRight/>
        </div>
      </div> 
    </div>
  );
};

export default HomePage;
