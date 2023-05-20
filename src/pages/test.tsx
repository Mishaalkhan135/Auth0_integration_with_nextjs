import React from "react";
import type { GetServerSideProps } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Test = () => {
	return <div>test</div>;
};
export default Test;
export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
