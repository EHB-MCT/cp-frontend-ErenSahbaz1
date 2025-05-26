import { useRef, useState } from "react";
import { TiVolumeMute } from "react-icons/ti";
import { TiVolumeUp } from "react-icons/ti";

const MusicPlayer = () => {
	const [playing, setPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	const toggleMusic = () => {
		if (!audioRef.current) return;
		if (playing) {
			audioRef.current.pause();
			setPlaying(false);
		} else {
			audioRef.current.play();
			setPlaying(true);
		}
	};

	return (
		<div className="fixed top-5 right-5 z-[1000] flex items-center  rounded-full p-2">
			<button
				onClick={toggleMusic}
				className={` px-5 py-2 text-white rounded-[20px] border-none 
                    cursor-pointer`}
			>
				{playing ? (
					<span className="flex items-center gap-2">
						<TiVolumeUp className="inline text-3xl" />
					</span>
				) : (
					<span className="flex items-center gap-2">
						<TiVolumeMute className="inline text-3xl" />
					</span>
				)}
			</button>
			<audio ref={audioRef} src="/cp-frontend-ErenSahbaz1/music.mp3" loop />
		</div>
	);
};

export default MusicPlayer;
