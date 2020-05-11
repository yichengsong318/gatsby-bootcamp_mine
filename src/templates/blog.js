import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark(fields: { slug: { eq:$slug }}) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `

export const query = graphql `
    query($slug: String!) {
        contentfulTest1(slug: {eq:$slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
           <h1>{ props.data.contentfulTest1.title }</h1>
            <p>{ props.data.contentfulTest1.publishedDate }</p> 
            {documentToReactComponents(props.data.contentfulTest1.body.json, options)}
        </Layout>
    )
}

export default Blog