import React from 'react';
import { useEffect } from "react";

const useTitleCount = (count) => {

    useEffect(() => {
        // console.log('hello world');
        {
            (count >= 1) ?  document.title = `Chats (${count})` :  document.title = `Chats`;
        }
        }, [count]);
}

export default useTitleCount
