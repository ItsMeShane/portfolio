import React, { useState, useEffect, useRef } from 'react';
import { ChatbotWrapper, ChatbotContainer, MessageContainer, Message, UserInput, MessageInput, SendButton, DiceButton, SendIcon, DiceIcon } from './ChatbotStyles';
import { questionPrompts } from '../../constants/constants';
import { OPENAI_API_KEY, OPENAI_ASS_ID } from "../../../env.js"
import OpenAI from "openai";

let promptIndex = 0;

const Chatbot = () => {


    // add first message
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hi there! How can I help you today?', type: 'incoming' },
    ]);

    const [newMessage, setNewMessage] = useState('');
    const chatboxRef = useRef(null);

    const openai = new OpenAI({
        apiKey: OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    });

    const handleSendMessage = async () => {
        if (newMessage.trim() === '') {
            return;
        }

        const newMessages = [
            ...messages,
            { id: messages.length + 1, text: newMessage, type: 'outgoing' },
        ];

        setMessages(newMessages);
        setNewMessage('');

        try {
            const thread = await openai.beta.threads.create();
            await openai.beta.threads.messages.create(thread.id, {
                role: "user",
                content: newMessage,
            });

            const run = await openai.beta.threads.runs.create(thread.id, {
                assistant_id: OPENAI_ASS_ID
            });

            let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

            while (runStatus.status !== "completed") {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
            }

            const assistantMessage = await openai.beta.threads.messages.list(thread.id);

            const lastMessageForRun = assistantMessage.data
                .filter(
                    (message) => message.run_id === run.id && message.role === "assistant"
                )
                .pop();

            if (lastMessageForRun) {
                const assistantResponse = lastMessageForRun.content[0].text.value.replaceAll(/【.*?】/g, '');
                setMessages([...newMessages, { id: newMessages.length + 1, text: assistantResponse, type: 'incoming' }]);
            }

        } catch (error) {
            console.error(error);
        }
    };

    const setNextPrompt = () => {
        if (promptIndex === questionPrompts.length) {
            promptIndex = 0;
        }
        setNewMessage(questionPrompts[promptIndex++]);
    };

    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages]);

    const handleTextareaKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <ChatbotWrapper>
            <h1 className="header">First, Ask a Question!</h1>
            <ChatbotContainer>
                <MessageContainer ref={chatboxRef}>
                    {messages.map((message) => (
                        <Message key={message.id} className={message.type}>
                            {message.text}
                        </Message>
                    ))}
                </MessageContainer>
                <UserInput>
                    <MessageInput
                        placeholder="Send a message..."
                        spellCheck={false}
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleTextareaKeyDown}
                    />
                    <DiceButton onClick={setNextPrompt}>
                        <DiceIcon>🎲</DiceIcon>
                    </DiceButton>
                    <SendButton onClick={handleSendMessage}>
                        <SendIcon>⬆️</SendIcon>
                    </SendButton>
                </UserInput>
            </ChatbotContainer>
        </ChatbotWrapper>
    );
};

export default Chatbot;
