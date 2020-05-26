import React from "react";

function ChatForm({onSubmit}) {
    
    const [chat, setChat] = React.useState("");

    const handleSubmit = (event) => {
            onSubmit ({chat: chat});
            setChat("");
        event.preventDefault();      
    };

    return (
            <form className="box">
                <input type="textarea" value={chat} placeholder="Type your message..." className="input" id="dueDate" onChange={e => setChat(e.target.value)} />
                <button type="submit" value="Submit" className="inputButton" onClick={handleSubmit}>Send</button>
            </form>
    );
}
                                                
export default ChatForm;