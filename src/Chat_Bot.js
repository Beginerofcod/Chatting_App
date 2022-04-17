import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core'
import React, { useState } from 'react';
import image from './download.png';
import './Chat_Bot.css';


const { Configuration, OpenAIApi } = require("openai");
function Chat_Bot() {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);
    const [chat, setChat] = useState([]);

    // const chatt = [
    //     {message: "chat", id:"user"},
    //     {message: "todo", id:"bot"},
    // ]

    const sendMessage = (e) => {
        e.preventDefault();
        let umsg = {message: input, id: "user"};
        // setChat([...chat, {message: input, id: "user"}]);
        // chat.push({message: input, id: "user"});
        // setInput("");
        const configuration = new Configuration({
            apiKey: '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',
          });
          const openai = new OpenAIApi(configuration);
          openai.createCompletion("text-davinci-002", {
            prompt: `Product discription for: ${input}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          }).then(res=>{
            console.log(res.data.choices[0].text)
            // setTodo([...todo, )
            // chatt.push({message: res.data.choices[0].text, id: "bot"});
            setChat([...chat, umsg,  {message: res.data.choices[0].text, id: "bot"}]);
            // console.log(chatt)
          });
    }
    return (
        <div className='chatbot_wrapper'>
            <div className='chatbot_body'>
                <div className='chatbot_card'>
                    <Card sx={{ maxWidth: "auto" }}>
                        <CardContent>
                            <div className='chatbot_card-contain'>
                                {
                                    chat.map((ch)=>{
                                        return <div>
                                       <li>{ch.id}:{ch.message}</li>
                                        </div>
                                    })
                                }                           
                            </div>
                        </CardContent>
                        <form >
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message"
                                type="text"
                            />
                            <button onClick={sendMessage} type="submit">
                                {" "}
                                Send a message
                            </button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Chat_Bot