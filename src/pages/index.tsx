import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Sky from "../components/Sky"
import { Text, Heading } from "@chakra-ui/react"

const pageStyles = {
  color: "white",
  background: "black",
  padding: 96,
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Heading>Hello world</Heading>
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, accusamus eos eius excepturi eveniet consectetur laudantium unde consequuntur necessitatibus dignissimos incidunt, error pariatur omnis repudiandae est veritatis eaque asperiores! Molestias?</Text>
      <Sky />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
