import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Navbar = () => {
  const { user, signInWithGoogle, logout } = useAuth();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  // const handleGoogleLogin = async () => {
  //   try {
  //     await signInWithGoogle();
  //     // console.log("success");
  //   } catch (error) {
  //     // console.log("errr", error);
  //   }
  // };
  const handleLoginRedirect = () => {
    navigate("/login");
  };
  const handleLogoutRedirect = async () => {
    try {
      await logout();
      navigate("/");
      toast({
        title: "Logout Successful",
        description: "You have successfully logout!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      // console.log("errr", error);
    }
  };
  return (
    <Box py="4" mb="0" bg={"none"}>
      <Container maxW={"container.xl"}>
        <Flex justifyContent={"space-between"}>
          <Link to="/">
            <Box display={"flex"} alignItems={"center"} mt={2}>
              <svg
                viewBox="0 0 111 30"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className=" default-ltr-cache-1d568uk ev1dnif2"
                width="90px"
                height="25px"
                fill="red"
              >
                <g>
                  <path
                    d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422
                      107.500234,29.4366857 105.718437,29.1554972
                      L102.374168,20.4686475 L98.9371075,28.4375293
                      C97.2499766,28.1563408 95.5928391,28.061674
                      93.9057081,27.8432843 L99.9372012,14.0931671
                      L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14
                      L102.593495,7.87421502 L105.874965,-5.68434189e-14
                      L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z
                      M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14
                      L85.8749649,27.2499766 C87.3746368,27.3437061
                      88.9371075,27.4055675 90.4686475,27.5930265
                      L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692
                      C77.7186241,26.6557316 73.5307901,26.4064111
                      69.250164,26.3117443 L69.250164,-5.68434189e-14
                      L73.9366389,-5.68434189e-14 L73.9366389,21.8745899
                      C76.6248008,21.9373887 79.3120255,22.1557784
                      81.9055207,22.2804387 L81.9055207,26.93692 Z
                      M64.2496954,10.6561065 L64.2496954,15.3435186
                      L57.8442216,15.3435186 L57.8442216,25.9996251
                      L53.2186709,25.9996251 L53.2186709,-5.68434189e-14
                      L66.3436123,-5.68434189e-14 L66.3436123,4.68741213
                      L57.8442216,4.68741213 L57.8442216,10.6561065
                      L64.2496954,10.6561065 Z M45.3435186,4.68741213
                      L45.3435186,26.2498828 C43.7810479,26.2498828
                      42.1876465,26.2498828 40.6561065,26.3117443
                      L40.6561065,4.68741213 L35.8121661,4.68741213
                      L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14
                      L50.2183897,4.68741213 L45.3435186,4.68741213 Z
                      M30.749836,15.5928391 C28.687787,15.5928391
                      26.2498828,15.5928391 24.4999531,15.6875059
                      L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079
                      32.7809542,22.1557784 L32.7809542,26.6557316
                      L19.812541,27.6876933 L19.812541,-5.68434189e-14
                      L32.7809542,-5.68434189e-14 L32.7809542,4.68741213
                      L24.4999531,4.68741213 L24.4999531,10.9991564
                      C26.3126816,10.9991564 29.0936358,10.9054269
                      30.749836,10.9054269 L30.749836,15.5928391 Z
                      M4.78114163,12.9684132 L4.78114163,29.3429562
                      C3.09401069,29.5313525 1.59340144,29.7497422 0,30
                      L0,-5.68434189e-14 L4.4690224,-5.68434189e-14
                      L10.562377,17.0315868 L10.562377,-5.68434189e-14
                      L15.2497891,-5.68434189e-14 L15.2497891,28.061674
                      C13.5935889,28.3437998 11.906458,28.4375293
                      10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  ></path>
                </g>
              </svg>
            </Box>
          </Link>
          {/* Laptop layout */}
          <Flex
            gap="4"
            alignItems={"center"}
            display={{ base: "none", md: "flex" }}
          >
            <Link to="/homepage">Trending</Link>
            {/* <Link to="/upcoming">Upcoming</Link> */}
            <Link to="/movies">Movies</Link>
            <Link to="/shows">TV Shows</Link>
            <Link to="/search">
              <SearchIcon fontSize={"xl"} />
            </Link>
            {user && (
              <Menu>
                <MenuButton>
                  <Avatar
                    bg={"red.500"}
                    color={"white"}
                    size={"sm"}
                    name={user?.email}
                  />
                </MenuButton>
                <MenuList zIndex={15} mt={2} borderRadius={0} bg={"black"}>
                  <Link to="/watchlist">
                    <MenuItem
                      color={"gray.400"}
                      transition={"0.3s ease-in-out"}
                      _hover={{ color: "white" }}
                      bg={"black"}
                    >
                      Watchlist
                    </MenuItem>
                  </Link>
                  <MenuItem
                    color={"gray.400"}
                    transition={"0.3s ease-in-out"}
                    _hover={{ color: "white" }}
                    bg={"black"}
                    onClick={handleLogoutRedirect}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
            {!user && (
              <Avatar
                size={"sm"}
                bg={"gray.800"}
                as="button"
                onClick={handleLoginRedirect}
              />
            )}
          </Flex>
          {/* Mobile layout */}
          <Flex
            display={{ base: "flex", md: "none" }}
            alignItems={"center"}
            gap="4"
          >
            <Link to="/search">
              <SearchIcon fontSize={"xl"} />
            </Link>
            <IconButton onClick={onOpen} icon={<HamburgerIcon />} />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bg={"black"}>
                <DrawerCloseButton mt={2} />
                <DrawerHeader>
                  {user ? (
                    <Flex cursor={"pointer"} alignItems="center" gap="2">
                      <Avatar bg="red.500" size={"sm"} name={user?.email} />
                      <Box fontSize={"sm"}>
                        {user?.displayName || user?.email}
                      </Box>
                    </Flex>
                  ) : (
                    <Avatar
                      size={"sm"}
                      bg="gray.800"
                      as="button"
                      onClick={handleLoginRedirect}
                    />
                  )}
                </DrawerHeader>
                <DrawerBody>
                  <Flex flexDirection={"column"} gap={"4"} onClick={onClose}>
                    <Link to="/">Home</Link>
                    <Link to="/homepage">Trending</Link>
                    {/* <Link to="/upcoming">Upcoming</Link> */}
                    <Link to="/movies">Movies</Link>
                    <Link to="/shows">TV Shows</Link>
                    {user ? (
                      <>
                        <Link to="/watchlist">Watchlist</Link>
                        <Button
                          mt={2}
                          _hover={{ bg: "#b20710" }}
                          _active={{
                            bg: "red",
                          }}
                            bg="#E50914"
                          borderRadius={"4px"}
                          textColor={"white"}
                          onClick={handleLogoutRedirect}
                        >
                          Logout
                        </Button>
                      </>
                    ) : (
                      <Button
                        mt={2}
                        _hover={{ bg: "#b20710" }}
                        bg="#E50914"
                        _active={{
                          bg: "red",
                        }}
                        borderRadius={"4px"}
                        textColor={"white"}
                        onClick={handleLoginRedirect}
                      >
                        Login
                      </Button>
                    )}
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
