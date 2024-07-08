import React, { useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  VStack,
  Text,
  Heading,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import {
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { FaPlay, FaPause, FaRepeat, FaShuffle } from "react-icons/fa6";

export default function PlayBox({
  currentSong,
  isDragging,
  setProgress,
  setDuration,
  formatTime,
  duration,
  progress,
  handleDragEnd,
  handleDragStart,
  pauseSong,
  resumeSong,
  nextSong,
  prevSong,
}) {
  useEffect(() => {
    if (currentSong) {
      const interval = setInterval(() => {
        if (!isDragging) {
          setProgress(
            (currentSong.howl.seek() / currentSong.howl.duration()) * 100
          );
          setDuration(currentSong.howl.duration());
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentSong, isDragging]);

  return (
    <Box
      style={{
        textAlign: "center",
        backgroundColor: "#6b0000",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <Heading size="md" mb={4}>
        Now Playing
      </Heading>

      <Box w="100%" overflow="hidden" borderRadius="md">
        <Image
          src={currentSong.image}
          alt={currentSong.title}
          height={"100px"}
          width={"100%"}
          objectFit="cover"
          borderRadius="md"
        />
      </Box>

      <VStack spacing={2} mt={2}>
        <Text fontWeight="bold">{currentSong.title}</Text>
        <Text>{currentSong.artist}</Text>
      </VStack>
      <Flex mt={4} alignItems={"center"} gap={2}>
        <Text>{formatTime((progress * duration) / 100)}</Text>
        <Slider
          value={progress}
          onChangeStart={handleDragStart}
          onChangeEnd={handleDragEnd}
          onChange={setProgress}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>{formatTime(duration)}</Text>
      </Flex>

      <Stack w="100%" alignItems="center" justifyContent="space-between" mt={4}>
        <HStack spacing={2}>
          <IconButton
            colorScheme="red.500"
            aria-label="Previous"
            icon={<FaRepeat />}
            size="sm"
          />
          <IconButton
            onClick={prevSong}
            colorScheme="red.500"
            aria-label="Previous"
            icon={<FaStepBackward />}
            size="sm"
          />
          {currentSong && currentSong.howl && currentSong.howl.playing() ? (
            <IconButton
              colorScheme="red.500"
              onClick={pauseSong}
              icon={<FaPause />}
              size="lg"
            />
          ) : (
            <IconButton
              colorScheme="red.500"
              onClick={resumeSong}
              icon={<FaPlay />}
              size="lg"
            />
          )}
          <IconButton
            colorScheme="red.500"
            aria-label="Next"
            onClick={nextSong}
            icon={<FaStepForward />}
            size="sm"
          />
          <IconButton
            colorScheme="red.500"
            aria-label="Next"
            icon={<FaShuffle />}
            size="sm"
          />
        </HStack>
      </Stack>
    </Box>
  );
}
