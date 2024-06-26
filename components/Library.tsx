"use client"

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
// import { Song } from "@/types";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
// import useSubscribeModal from "@/hooks/useSubscribeModal";
// import useOnPlay from "@/hooks/useOnPlay";
import { useUser } from "@/hooks/useUser";

const Library = () => {
    const authModal = useAuthModal();
    //check if we are logged in or not!
    const { user } = useUser();
    const uploadModal = useUploadModal();
    const onClick = () => {

        if (!user) {
            return authModal.onOpen();
        }

        return uploadModal.onOpen();

    };
    return (
        <div className="flex flex-col">
            <div
                className="
                flex
                items-center
                justify-between
                px-5
                pt-4
                "
            >
                <div
                    className="
                inline-flex
                items-center
                gap-x-2
                ">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 font-medium text-md">
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus
                    onClick={onClick}
                    size={20}
                    className="
                    text-neutral-400 
                    cursor-pointer 
                    hover:text-white 
                    transition
                    "
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                List of songs!
            </div>
        </div>
    );
}

export default Library;