import Head from "next/head";
import { Inter } from "@next/font/google";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Quote } from "@/components/Quote";
import { CheckIcon, CloseIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import Ticker from "react-ticker";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruddy CPA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack background={"grey.400"} h="100vh" w="100%">
        <HStack pos={"sticky"} p="4" width={"100%"} justify="space-between">
          <Heading size={"md"}>Ruddy CPA</Heading>
          <HStack>
            <HStack>
              <PhoneIcon />
              <Link href="tel:7328143113">{"(732) 814-3113"}</Link>
            </HStack>
            <HStack>
              <EmailIcon />
              <Link href="mailto:mjruddy94@gmail.com?subject=Personal Tax Request">
                mjruddy94@gmail.com
              </Link>
            </HStack>
          </HStack>
        </HStack>
        <VStack>
          <Card w="450px">
            <CardHeader>
              <HStack justify={"space-between"}>
                <Heading size={"md"}>Matt Ruddy</Heading>
                <Text>Accounting Services</Text>
              </HStack>
            </CardHeader>
            <CardBody>
              <VStack>
                <Image
                  h="250px"
                  w="250px"
                  borderRadius={"lg"}
                  alt="ruddy cpa img"
                  src="/ruddy.jpg"
                />
                <Quote>
                  Matthew Ruddy, graduated from Penn State University in State
                  College, PA. He has a reputation for providing efficient,
                  professional accounting services and showing care to each
                  client.
                </Quote>
              </VStack>
            </CardBody>
            <CardFooter>
              <Link href="mailto:mjruddy94@gmail.com?subject=Personal Tax Request">
                Contact
              </Link>
            </CardFooter>
          </Card>
          {/* <Box h="300px" w="100%" pt={9}>
            <Ticker speed={4}>
              {({ index }) => (
                <HStack key={index}>
                  <CarouselText>{"Devops"}</CarouselText>
                  <CarouselText>
                    {"Specialized Engineers (FE & BE)"}
                  </CarouselText>
                  <CarouselText>{"Project Managers"}</CarouselText>
                  <CarouselText>{"Tech Leads"}</CarouselText>
                </HStack>
              )}
            </Ticker>
          </Box> */}
        </VStack>
      </VStack>
    </>
  );
}

const CarouselText = ({ children }: { children: ReactNode }) => {
  return (
    <HStack w="auto" px="2" spacing="3">
      <Text
        _hover={{ color: "black" }}
        color="gray.400"
        whiteSpace={"nowrap"}
        fontWeight="bolder"
        fontSize="3xl"
        cursor={"default"}
      >
        {children}
      </Text>
    </HStack>
  );
};
