import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import images from "swiper/src/components/core/images";

const BlogContent = () => {
    const {posts, loadingPosts} = useSelector((state) => state.PostReducer);
    console.log(posts)
    return (
        <div className="dg__blog__area bg--white pt--110 pb--140">
            <div className="container">
                <div className="row">
                    {/* Start Single Blog */}
                    {loadingPosts ? (<div>Loading...</div>
                    ) : (
                        posts.map((item) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                                    <article className="blog__3">
                                        <div className="thumb">
                                            <Link to={process.env.PUBLIC_URL + `/blog-post/${item.id}`}>
                                                <img
                                                    src={item.thumbnail}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <div className="bl__author">
                                                <img src="images/blog/sm-img/1.png" alt="author images"/>
                                                <div className="author__inner">
                                                    <h6>{item.author}</h6>
                                                    <span>{item.timestamp}</span>
                                                </div>
                                            </div>
                                            <h2>
                                                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                                                    {item.title}
                                                </Link>
                                            </h2>
                                            <p>
                                                {item.overview}
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            )
                        })

                    )}
                    {/* End Single Blog */}
                </div>
                <div className="row mt--40">
                    <div className="col-lg-12">
                        <ul className="dg__pagination d-flex">
                            <li>
                                <a href={process.env.PUBLIC_URL + "/"}>01</a>
                            </li>
                            <li>
                                <a href={process.env.PUBLIC_URL + "/"}>02</a>
                            </li>
                            <li>
                                <a className="active" href={process.env.PUBLIC_URL + "/"}>
                                    03
                                </a>
                            </li>
                            <li>
                                <a href={process.env.PUBLIC_URL + "/"}>04</a>
                            </li>
                            <li>
                                <a href={process.env.PUBLIC_URL + "/"}>05</a>
                            </li>
                            <li>
                                <a href={process.env.PUBLIC_URL + "/"}>......</a>
                            </li>
                            <li>
                                <a href={process.env.PUBLIC_URL + "/"}>10</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContent;
