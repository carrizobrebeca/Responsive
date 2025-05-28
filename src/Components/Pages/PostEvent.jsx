import React from "react";
import post from "../../assets/post.PNG";
const PostEvent = () => {
  return (
 <div className="bg-gray-100 min-h-screen bg-gray-100">

      <section className="mt-10 mb-10">
        <div className="flex items-center text-gray-600 ">
          <div className="grid grid-cols-3 ">
            <div><img className="" src={post} alt="post" /></div>
            <div><img className="" src={post} alt="post" /></div>
            <div><img className="" src={post} alt="post" /></div>
          </div>

        </div>
        <div className="flex items-center text-gray-600 ">
          <div className="grid grid-cols-3 ">
            <div><img className="" src={post} alt="post" /></div>
            <div><img className="" src={post} alt="post" /></div>
            <div><img className="" src={post} alt="post" /></div>
          </div>



        </div>
      </section>

    </div>
  );
};

export default PostEvent;
