import React from "react"
import { CreateLocalLink } from "../utils"
import UniversalLink from "./UniversalLink"
import { Flex, Box, Heading, List, ListItem } from "@chakra-ui/core";


const LinksTable = ({ data, typeClass }) => {

    return (
        <Flex direction="row">
            <Box>
                <Heading as="h3">{data.category}</Heading>
            </Box>
            <Box className={typeClass}>
                <List styleType="none">
                    {data.links.map((link, key) => (
                        // TODO: añadir 2 li (news, regular)
                        <ListItem key={key}>
                            <UniversalLink children={link.text} to={link.url}></UniversalLink>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Flex>
    );
}

export default LinksTable