import React, {Fragment, useEffect} from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogPostContent from "../containers/blog/BlogPostContent";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getPostDetails} from "../store/posts/actions";

const BlogPost = () => {
    let params = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostDetails(params.id));
    }, [params.id]);
    return (
        <Fragment>
            <MetaTags>
                <title>Howard | News Details</title>
                <meta
                    name="description"
                    content="News details page of React JS Crypto Currency Template."
                />
            </MetaTags>
            <LayoutTwo theme="white">
                {/* breadcrumb */}
                <Breadcrumb title="NEWS DETAILS"/>
                {/* blog post content */}
                <BlogPostContent/>
            </LayoutTwo>
        </Fragment>
    );
};

export default BlogPost;
