//components
import PostsIndex from "../Pages/Blog/PostsIndex";
import PostShow from "../Pages/Blog/PostShow";
import NotFound from "../Pages/NotFound";
import CategoryIndex from "../Pages/Blog/CategoryIndex";
import TagIndex from "../Pages/Blog/TagIndex";
import Login from "../Pages/Admin/Login";



const routes = [
    {
        path: "/",
        // component: PostsIndex,
        // name: "posts.index"
        component: Login,
        name: "login",
        meta: {
            layout: "login-layout"
        }
    },
    {
        path: "/categories/:category",
        component: CategoryIndex,
        name: "categories.index"
    },
    {
        path: "/tags/:tag",
        component: TagIndex,
        name: "tags.index"
    },
    {
        path: "/:category/:slug",
        component: PostShow,
        name: "posts.show"
    },
    {
        path: "*",
        component: NotFound,
        name: "not found"
    }
];

export default routes;