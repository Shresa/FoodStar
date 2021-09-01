import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = () => {
  return (
    <>
      <div className="my-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/3c8/1594aeecc032034c23787444a20353c8.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Shreshtha Sadhu</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-foodstar-400 border border-foodstar-400 py-2 rounded-lg px-4">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">Delivery</h5>
            <small className="text-gray-500">3 days ago</small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              chicken Biryani and Paneer Biryani...yeah yeah Paneer pulaw ..both
              were quite good, it was good blend of all the spices or you can
              say it was bit spicy than usual. Also those spices are making this
              Biryani more irresistible. on the other side Masala chicken was
              nightmare, taste was bad, chicken was not fresh and also not
              properly cooked, furthermore the portion for masala chicken was
              very less ,just two pieces, in a other way it was good also
              because the taste was so bad you couldn't have more than one piece
              also🤣. so from my side Biryani was 4+* both in term of quantity
              and quality. Masala Chicken was 2*, bad quality and less quantity.
              Overall packing and Delivery 4+*
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;