import { FC, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const videoList = [
  {
    videoId: "1",
    title: "Building the best startup of all time ",
    tags: ["Transport", "Computer"],
    profile: {
      name: "Eric Zhu",
      title: "Aviato",
      image: "/images/assets/eric.png",
    },
    video: "/videos/Sand.mp4",
  },
  {
    title: "Building the best startup of all time ",
    videoId: "2",
    tags: ["Transport", "Computer"],
    profile: {
      name: "Eric Zhu",
      title: "Aviato",
      image: "/images/assets/eric.png",
    },
    video: "/videos/People.mp4",
  },
  {
    title: "Building the best startup of all time ",
    videoId: "3",
    tags: ["Transport", "Computer"],
    profile: {
      name: "Eric Zhu",
      title: "Aviato",
      image: "/images/assets/eric.png",
    },
    video: "/videos/Skyscrapers.mp4",
  },
  {
    title: "Building the best startup of all time ",
    videoId: "4",
    tags: ["Transport", "Computer"],
    profile: {
      name: "Eric Zhu",
      title: "Aviato",
      image: "/images/assets/eric.png",
    },
    video: "/videos/People.mp4",
  },
  {
    title: "Building the best startup of all time ",
    videoId: "5",
    tags: ["Transport", "Computer"],
    profile: {
      name: "Eric Zhu",
      title: "Aviato",
      image: "/images/assets/eric.png",
    },
    video: "/videos/Sand.mp4",
  },
  {
    title: "Building the best startup of all time ",
    videoId: "6",
    tags: ["Transport", "Computer"],
    profile: {
      name: "Eric Zhu",
      title: "Aviato",
      image: "/images/assets/eric.png",
    },
    video: "/videos/Skyscrapers.mp4",
  },
];

const Videos = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div
      className="space-y-8 overflow-scroll px-4 pb-10"
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      {videoList.map((video, index) => (
        // Math.random used for demo purposes
        <SingleVideo
          key={Math.random()}
          {...video}
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
        />
      ))}
    </div>
  );
};

interface SingleVideoProps {
  title: string;
  tags: string[];
  profile: {
    name: string;
    title: string;
    image: string;
  };
  video: string;
  isVideoPlaying: boolean;
  setIsVideoPlaying: (value: boolean) => void;
}

const checkIsVideoPlaying = (video: HTMLVideoElement) =>
  !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  );

const SingleVideo: FC<SingleVideoProps> = ({ profile, tags, title, video }) => {
  const { ref, inView } = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        if (!checkIsVideoPlaying(videoRef.current)) {
          videoRef.current?.play();
        }
      } else {
        if (checkIsVideoPlaying(videoRef.current)) {
          videoRef.current?.pause();
        }
      }
    }
  }, [inView, videoRef]);

  return (
    <div className="relative h-[600px] rounded-2xl" ref={ref}>
      <video
        src={video}
        loop={false}
        muted={true}
        className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden rounded-[40px] object-cover"
        ref={videoRef}
      ></video>
      <div className="absolute z-[5] h-full w-full rounded-[40px] bg-black/10" />
      <div className="absolute z-10 flex h-full w-full flex-col justify-end px-10 text-white">
        <div>
          <div className="flex">
            <img
              src={profile.image}
              alt={profile.name}
              className="mr-2 h-12 w-12"
            />
            <div>
              <h3>{profile.name}</h3>
              <p className="text-sm text-[#bdbbb8]">{profile.title}</p>
            </div>
          </div>

          <div className="mt-4 space-x-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-xl bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="mt-6 text-[#bdbbb8]">{title}</h2>
        </div>

        <div className="mb-8 mt-10 flex w-full items-center justify-center space-x-4">
          <button className="flex h-[50px] w-[130px] justify-center rounded-full bg-white/10 pr-5 backdrop-blur-sm">
            <img src="/images/icons/close.svg" alt="Close" />
            <p className="mt-3">No</p>
          </button>

          <button className="flex h-[50px] w-[130px] justify-center rounded-full bg-white/10 pr-5 backdrop-blur-sm">
            <img
              src="/images/icons/bookmark.svg"
              alt="Bookmark"
              className="-mt-1"
            />
            <p className="mt-3">Save</p>
          </button>

          <button className="flex h-[50px] w-[130px] justify-center rounded-full bg-[#3981F6] pr-5">
            <img src="/images/icons/tick-white.png" alt="Tick" />
            <p className="mt-3">Yes</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videos;
