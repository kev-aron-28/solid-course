import { PostService } from './dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiService } from './dependency-c';
import { httpClient } from './dependency-d';


// Main
(async () => {

    // const provider = new LocalDataBaseService();
    const httpService = new httpClient()
    const webProvider = new WebApiService(httpService)
    const postService = new PostService(webProvider);


    try {
        const posts = await postService.getPosts();
        console.log({ posts })   
    } catch (error) {
        console.log(error);
    }
})();