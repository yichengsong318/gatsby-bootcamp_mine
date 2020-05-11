import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql `
        query {
            allContentfulTest1 ( sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <ol>
            { 
            data.allContentfulTest1.edges.map((edge) => {
                return (
                    <li>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                    </li>
                )}) 
            }
        </ol>
    )
}

export default Footer








































































































