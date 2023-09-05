import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
 
const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 483371420;
        const serverSecret = "a5ac051880d20b7754ddbe559172ceb7";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
             serverSecret,
              roomId,
               Date.now().toString(),
               "Tushar Sinha"
               );
               const zc = ZegoUIKitPrebuilt.create(kitToken);
               zc.joinRoom({
                container: element,
                sharedLinks:[{
                    name: 'Copy Link',
                    url:`http://localhost:3000/room/${roomId}`,
                }],
                scenario:{
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
               });
    };
    return (
    <div>
        <div ref={myMeeting} />
    </div>
    );
};
export default RoomPage; 