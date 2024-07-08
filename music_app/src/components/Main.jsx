import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  useBreakpointValue,
  InputGroup,
  Input,
  Icon,
  InputRightElement,
} from "@chakra-ui/react";
import { FaMusic, FaSearch } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Main = ({ playSong, currentSongIndex, songs }) => {
  return (
    <Box>
      <Box p={6} paddingBottom={0}>
        <Flex alignItems="center" justifyContent={"space-evenly"}>
          <Link href="#">Music</Link>
          <Link href="#">Podcast</Link>
          <Link href="#">Live</Link>
          <Link href="#">Radio</Link>

          <InputGroup
            size="md"
            w={useBreakpointValue({ base: "100%", md: "auto" })}
          >
            <Input
              placeholder="Michael Jackson"
              variant="unstyled"
              style={{
                padding: "8px",
                width: "400px",
                borderRadius: "50px",
                backgroundColor: "#23090a",
              }}
            />
            <InputRightElement>
              <Icon as={FaSearch} color={"white"} />
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Box p={12} paddingTop={0}>
          <Box
            style={{ height: "400px" }}
            display="flex"
            justifyContent="flex-end"
          >
            <Image src="https://i.postimg.cc/Hsbbrh3N/5d55e4ce985c98f27a2e4560589055d1.png" />
          </Box>
          <Box
            backgroundImage="url('https://i.postimg.cc/pT9Thn2F/b614afab3396f4c60bfa19b926b4b71d.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            borderRadius={"30px"}
            width="100%"
            height="250px"
            display={"flex"}
            marginTop={"-250px"}
          >
            <Box display="flex" alignItems="center" marginLeft={"40px"}>
              <Box>
                <Flex alignItems={"center"} gap={2}>
                  <MdVerified color="#39bbf4" />
                  <Text fontSize="md">Verified Artist</Text>
                </Flex>
                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                >{`Michael Jackson`}</Text>
                <Text fontSize="md">{`27,852,501 monthly listeners`}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Flex pl={20} pr={20} justifyContent={"space-between"} alignItems={"center"}> 
        <Text>Popular</Text>
        <Text>See All</Text>
      </Flex>
      <TableContainer style={{marginTop:"15px"}} >
        <Table variant="unstyled" size="sm" >
          <Thead >
            <Tr>
              <Th>#</Th>
              <Th textAlign="center">TITLE</Th>
              <Th textAlign="center">PLAYING</Th>
              <Th textAlign="center">TIME</Th>
              <Th textAlign="center">ALBUM</Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song, index) => (
              <Tr
                key={index}
                onClick={() => playSong(song, index)}
                bg={currentSongIndex === index ? "#520000" : "transparent"}
                borderLeft={
                  currentSongIndex === index ? "4px solid red" : "transparent"
                }
                cursor="pointer"
              >
                <Td>{currentSongIndex === index ? <FaMusic /> : index + 1}</Td>
                <Td style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={song.image}
                    boxSize="40px"
                    mr={2}
                    display="inline-block"
                  />
                  <Box>{song.title}</Box>
                </Td>
                <Td>{song.playingCount}</Td>
                <Td>{song.time}</Td>
                <Td>{song.album}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Main;
