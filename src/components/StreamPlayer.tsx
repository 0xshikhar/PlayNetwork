"use client";

import { PauseIcon, PlayIcon } from "@livepeer/react/assets";
import { getSrc } from "@livepeer/react/external";
import * as Player from "@livepeer/react/player";
// import { vodSource } from "./source";
import Image from 'next/image';

const playbackId ='170b18cvf35ga3t9';

import blenderPoster from '../../public/images/godOfWar.jpg';

interface StreamPlayerProps {
    id: string;
}

const PosterImage = () => {
    return (
        <Image
            src={blenderPoster}
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
            alt="God of War poster"
        />
    );
};

const StreamPlayer: React.FC<StreamPlayerProps> = (props) => {
    console.log(props.id)
    return (
        <Player.Root src={getSrc(vodSource)}>
            <Player.Container className="h-full w-full overflow-hidden bg-gray-950">
                <Player.Video title="Live stream" className="h-full w-full" />
                <Player.Controls className="flex items-center justify-center">
                    <Player.PlayPauseTrigger className="w-10 h-10 hover:scale-105 flex-shrink-0">
                        <Player.PlayingIndicator asChild matcher={false}>
                            <PlayIcon className="w-full h-full" />
                        </Player.PlayingIndicator>
                        <Player.PlayingIndicator asChild>
                            <PauseIcon className="w-full h-full" />
                        </Player.PlayingIndicator>
                    </Player.PlayPauseTrigger>
                </Player.Controls>
            </Player.Container>
        </Player.Root>
    );
};

export default StreamPlayer;