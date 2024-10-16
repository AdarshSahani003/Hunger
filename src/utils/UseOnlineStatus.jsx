import { useState, useEffect } from "react";

const UseOnlineStatus = () => {

    const [Status, SetStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("online", () => {
            SetStatus(true);
        });

        window.addEventListener("offline", () => {
            SetStatus(false);
        });
    }, [])

    return Status;
}

export default UseOnlineStatus;