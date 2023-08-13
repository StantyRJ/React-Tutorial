import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Batman strikes!', body: 'He is vengangce', author: 'Bruce Wayne', id:1},
        {title: 'Superman Strikes down Zodd!', body: 'Jimmy olsen the goat', author: 'Clark Kent', id:2},
        {title: 'Batman strikes again!', body: 'He is vengangce', author: 'Dick Grayson', id:3}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.title.includes("Batman"))} title="Batman Archives"/>
        </div>
    );
}
 
export default Home;