import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/seo";
import { Heading, Text } from "@chakra-ui/core";
import LinksTable from '../components/LinksTable';
import linksTableData from '../utils/linksTableData';
import newsLinksTableData from '../utils/newsLinksTableData';

const Resources = () => (
  <DefaultLayout>
    <SEO title="Resources" />
    <Heading as="h1">Resources</Heading>
    <Text fontSize="xl">
      Use the resources below to learn more about technology responses to COVID-19, digital contact tracing, exposure notification, GPS, Bluetooth, and other technology and policy issues facing public health authorities and private sector organizations.
    </Text>

    {linksTableData.map((data, key) => (
      <LinksTable key={key} data={data}></LinksTable>
    ))}

    {newsLinksTableData.map((data, key) => (
      <LinksTable key={key} data={data} typeClass="news"></LinksTable>
    ))}


  </DefaultLayout>
);

export default Resources;
