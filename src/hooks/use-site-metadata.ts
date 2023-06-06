import { useStaticQuery, graphql } from "gatsby";

//@TODO: Implement siteMetaData necessary
/*
headline
description
image
video
twitter
name
logo
*/
export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    );
    return site.siteMetadata;
};
