import React, { useEffect, useRef, } from 'react'

export const useKey = (key, handler) => {
    const callbackRef = useRef(handler);

    console.log("callbackRef", callbackRef)

    useEffect(() => {
        callbackRef.current = handler;
    });
    useEffect(() => {
        function handle(event) {
            console.log("event.code === key", event.code === key)
            if (event.code === key) {
                console.log("callbackRef.current(event)", callbackRef.current(event))
                callbackRef.current(event);
            }
        }
        document.addEventListener("keydown", handle);
        return () => document.removeEventListener("keydown", handle);
    }, [key]);
}