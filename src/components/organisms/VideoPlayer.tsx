import { useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Slider } from "@mui/material";
import { formatTimer } from "../../utils";
import IconButton from "../atoms/IconButton";
import Video from "../atoms/Video";

export default function VideoPlayer({
  index = 0,
  src,
  focused = false,
  focusedIndex,
}: {
  index?: number;
  focused?: boolean;
  focusedIndex?: number;
  src: string;
}) {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);
  const boxRef = useRef<any>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(true);
  const [controllerOpen, setControllerOpen] = useState<boolean>(false);
  const [changing, setChanging] = useState<boolean>(false);
  useEffect(() => {
    if (focusedIndex === index && focused) {
      setPlaying(true);
      setControllerOpen(true);
    } else {
      setPlaying(false);
      setControllerOpen(false);
    }
  }, [focusedIndex, index, focused]);
  useEffect(() => {
    if (controllerOpen && !changing && !buffer) {
      const timerId = setTimeout(() => {
        setControllerOpen(false);
      }, 3000);
      return () => clearTimeout(timerId);
    }
    return () => {};
  }, [playing, controllerOpen, changing]);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event: any) => {
    if (boxRef && !boxRef.current.contains(event.target)) {
      setControllerOpen(false);
    }
  };
  const [duration, setDuration] = useState<number>(0);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [loadedSeconds, setLoadedSeconds] = useState<number>(0);
  const onDuration = (duration: any) => {
    setDuration(duration);
  };
  const onProgress = (e: any) => {
    if (changing) return null;
    setPlayedSeconds(e.playedSeconds);
    setLoadedSeconds(e.loadedSeconds);
  };
  const onChange = () => {
    setChanging(true);
  };
  const onChangeCommitted = (
    event: React.SyntheticEvent | Event,
    value: any
  ) => {
    setChanging(false);
    playerRef.current?.seekTo(value);
  };
  const [buffer, setBuffer] = useState<boolean>(false);
  const onBuffer = () => {
    setBuffer(true);
  };
  const onBufferEnd = () => {
    setBuffer(false);
  };
  const [ready, setReady] = useState<boolean>(false);
  const onReady = () => {
    setReady(true);
  };
  return (
    <>
      <Box
        ref={boxRef}
        className={`Coming ${index} ${
          focusedIndex === index && focused ? "focus" : ""
        }`}
        sx={{
          width: "100%",
          position: "relative",
          transition: "all 0.35s ease",
          "& video": {
            transition: "all 0.35s ease",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            overflow: "hidden",
            borderRadius: 1.5,
          },
          "&.focus": {
            opacity: 1,
          },
          borderRadius: 1.5,
          overflow: "hidden",
          backgroundColor: `#17171c`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          "& *": {
            cursor: controllerOpen ? "initial" : "pointer",
          },
        }}
      >
        <Box
          className={`ComingVideo ${index}`}
          sx={{
            position: "relative",
            height: 0,
            pt: "56.25%",
            backgroundColor: `#17171c`,
          }}
        >
          <Video
            videoRef={playerRef}
            playsinline
            playing={playing}
            onDuration={onDuration}
            onProgress={onProgress}
            onBuffer={onBuffer}
            onBufferEnd={onBufferEnd}
            onReady={onReady}
            url={src}
            muted={muted}
            config={{
              file: {
                attributes: {
                  // poster: item.thumbnail,
                  controlsList: "nodownload noplaybackrate",
                  disablePictureInPicture: true,
                },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: controllerOpen ? 1 : 0,
              transition: "all 0.35s ease",
              zIndex: 999,
              borderRadius: 1.5,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 1.5,
                overflow: "hidden",
              }}
              onClick={() => setControllerOpen(!controllerOpen)}
            />

            {!ready || buffer ? (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 99,
                }}
              >
                <CircularProgress color="inherit" />
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  if (!controllerOpen) {
                    setControllerOpen(true);
                  } else if (!buffer) {
                    setPlaying(!playing);
                  }
                }}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 99,
                }}
                name={playing ? "pause" : "play"}
                size={32}
              />
            )}
            <IconButton
              onClick={() => {
                if (!controllerOpen) {
                  setControllerOpen(true);
                } else {
                  setMuted(!muted);
                }
              }}
              sx={{
                position: "absolute",
                bottom: 8,
                right: 8,
                zIndex: 99,
                opacity: !ready ? 0 : 1,
              }}
              name={!muted ? "volume" : "volume-mute"}
            />
            <Box
              sx={{
                position: "absolute",
                left: 24,
                right: 64,
                bottom: 0,
                opacity: !ready ? 0 : 1,
              }}
              onTouchStart={() => {
                if (!controllerOpen) setControllerOpen(true);
              }}
            >
              <Slider
                key={`Slider-${index + " " + playedSeconds}`}
                // value={playedSeconds}
                defaultValue={playedSeconds}
                max={duration}
                aria-label="Default"
                valueLabelDisplay="auto"
                getAriaValueText={formatTimer}
                valueLabelFormat={formatTimer}
                onChange={onChange}
                onChangeCommitted={onChangeCommitted}
                // size="small"
                sx={{
                  "&.MuiSlider-root": {
                    padding: "18px 0",
                  },
                  "& .MuiSlider-rail": {
                    opacity: "1 !important",
                    backgroundColor: "rgba(128,128,128,0.6)",
                    overflow: "hidden",
                    left: "-8px",
                    right: "-8px",
                    width: "auto",
                  },
                  "& .MuiSlider-track": {
                    left: "-8px !important",
                  },
                  "& .MuiSlider-rail::after": {
                    position: "absolute",
                    content: '""',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    transition: "all 1s ease",
                    width: `calc(${loadedSeconds / duration}% + 8px)`,
                    backgroundColor: "rgba(255,255,255,0.6)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`ComingLine ${index}`}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "56px",
          height: 4,
          zIndex: -1,
        }}
      />
    </>
  );
}
