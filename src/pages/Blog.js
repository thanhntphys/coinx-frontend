import React, {Fragment, useEffect} from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogContent from "../containers/blog/BlogContent";
import {getPosts} from "../store/posts/actions";
import {useDispatch} from "react-redux";

const Blog = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    return (
        <Fragment>
            <MetaTags>
                <title>Howard | Latest News</title>
                <meta
                    name="description"
                    content="Blog page of React JS Crypto Currency Template."
                />
            </MetaTags>
            <LayoutTwo theme="white">
                {/* breadcrumb */}
                <Breadcrumb title="LATEST NEWS"/>
                {/* blog content */}
                <BlogContent/>
            </LayoutTwo>
        </Fragment>
    );
};

export default Blog;
