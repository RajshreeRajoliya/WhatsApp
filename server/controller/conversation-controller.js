import Conversation  from "../model/Conversation.js";


export const newConversation = async (request, response) => {
   const senderId = request.body.senderId;
   const receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        response.status(200).json('conversation already exists');
        return;
    }
    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
      return response.status(200).json(savedConversation);
    } catch (error) {
        response.status(500).json(error);
    }

}