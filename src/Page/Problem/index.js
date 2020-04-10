import React from 'react'
import Layout from '../../Component/Layout'

const Problem = ({match}) => {
    return (
        <Layout>
            문제
            {match.params.id}
        </Layout>
    )
}

export default Problem
