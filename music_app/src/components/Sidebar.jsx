import {
  Box,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { FaHome, FaMusic } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { IoMdTrendingUp } from "react-icons/io";

const Sidebar = () => {
  return (
    <Box flex="1" maxWidth="20%" bg="#0e0e0e" p={4} color="white">
      <Flex
        alignItems="center"
        justifyContent="center"
        gap={2}
        style={{ margin: "auto" }}
      >
        <Icon
          as={FaMusic}
          fontSize={"40px"}
          color={useColorModeValue("red.500", "red.300")}
        />
        <Heading size="lg">
          <Box as="span" color="red.500">
            Dream
          </Box>
          Music
        </Heading>
      </Flex>

      <Flex spacing={4} p={6} flexDirection={"column"} height={"90vh"}>
        <Stack spacing={2}>
          <Heading size="sm">MENU</Heading>
          <List spacing={2}>
            <ListItem>
              <Flex alignItems="center">
                <Icon as={FaHome} color={"red.500"} />
                <Text color="white" ml={2}>
                  Home
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <Icon as={IoMdTrendingUp} color={"red.500"} />
                <Text color="white" ml={2}>
                  Trends
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <Icon as={FaMusic} color={"red.500"} />
                <Text color="white" ml={2}>
                  Library
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <Icon as={RiCompassDiscoverFill} color={"red.500"} />
                <Text color="white" ml={2}>
                  Discover
                </Text>
              </Flex>
            </ListItem>
          </List>
        </Stack>
        <Spacer />
        <Stack spacing={2}>
          <Heading size="sm">GENERAL</Heading>
          <List spacing={2}>
            <ListItem>
              <Flex alignItems="center">
                <Icon as={IoSettings} color={"red.500"} />
                <Text color="white" ml={2}>
                  Settings
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <Icon as={MdOutlineLogout} color={"red.500"} />
                <Text color="white" ml={2}>
                  Log Out
                </Text>
              </Flex>
            </ListItem>
          </List>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
