import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'
import '../styles/index.scss'

import indexStyle from './index.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h2>I'm Song, a full-stack developer living in beautiful.</h2>
            <p>Need a developer? <Link class={indexStyle.link} to="/blog">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage