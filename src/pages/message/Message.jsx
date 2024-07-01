import React, {useEffect, useState, useRef} from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";
import { useSelector } from "react-redux";

const Message = () => {
  const { id } = useParams();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const queryClient = useQueryClient();
  const [userImages, setUserImages] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const typingTimer = useRef(null);


  const handleTyping = () => {
    setIsTyping(true);
    clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      setIsTyping(false);
    }, 3000); // Adjust the duration as needed
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  useEffect(() => {
    const userIds = [...new Set(data?.map((m) => m.userId))];
  
    const fetchUserImages = async () => {
      try {
        const userImagePromises = userIds.map(async (userId) => {
          const response = await newRequest.get(`/users/${userId}`);
          return { userId, imageUrl: response.data.img }; // Assuming your API returns the user's profile image URL
        });
  
        const userImagesData = await Promise.all(userImagePromises);
  
        const userImagesObject = {};
        userImagesData.forEach((userData) => {
          userImagesObject[userData.userId] = userData.imageUrl;
        });
  
        setUserImages(userImagesObject);
      } catch (error) {
        console.error("Error fetching user images:", error);
      }
    };
  
    fetchUserImages();
  }, [data]);
  

  return (
    <div className="message">
      <div className="container">
        <div className="border border-secondary bg-secondary p-2">
        <span className="breadcrumbs">
          <Link to="/messages" id="mess">Messages</Link> ›<span>{currentUser.username}</span>›
        </span>

        </div>
        
        {isLoading ? (
          "loading..."
        ) : error ? (
          "Error loading messages. Check network!"
        ) : (
          <div className="messages">
            {data.map((m) => (
              <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                <img
                      src={userImages[m.userId] || "/img/noavatar.jpg" }
                      alt="profile-pic" 
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea 
            type="text" 
            placeholder="write a message"
            onChange={handleTyping} 
            disabled={isLoading} 
            
            
          >  </textarea>
            {isLoading ? (
            <span>Loading...</span> 
          ) : (
            isTyping && <span>Typing...</span>
          )}
          <button type="submit">Send</button>
        
        </form>
      </div>
    </div>
  );
};

export default Message;