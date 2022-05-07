const { query } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const appData = (req, res) => {
    console.log("Request Query", req.query);
    console.log("Request Params", req.params);


    const data = [
        {
            id: 1,
            title: "Naruto",
            author: "J",
            read: "10 min read",
            claps: 300,
            category: "Anime",
            image:
                "https://laverdadnoticias.com/__export/1621278169645/sites/laverdad/img/2020/08/24/naruto_boruto_como_ver_anime.png_284479219.png",
            // "https://cdn.animenewsnetwork.com/thumbnails/crop900x350/video/category/62/key_art_naruto.jpg",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["Anime"],
        },
        {
            id: 2,
            title: "Jujutsu Kaisen",
            author: "J",
            read: "10 min read",
            claps: 270,
            category: "Anime",
            image:
                "https://hbomax-images.warnermediacdn.com/images/GX8fnVgocBIZDKQEAAABF/tileburnedin?size=1280x720&partner=hbomaxcom&v=c00e18d02aac341c25377d81519ada13&host=artist.api.cdn.hbo.com&w=1280",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["Anime"],
        },
        {
            id: 3,
            title: "Death Note",
            author: "J",
            read: "10 min read",
            claps: 310,
            category: "Anime",
            image:
                "https://cdn.animenewsnetwork.com/hotlink/thumbnails/crop900x350/video/category/19/key_art_death_note.jpg",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["Anime"],
        },

        {
            id: 4,
            title: "Bollywood 1",
            author: "J",
            read: "10 min read",
            claps: 400,
            category: "Bollywood",
            image:
                "https://static-koimoi.akamaized.net/wp-content/new-galleries/2016/02/kapoor-and-sons-movie-posters.jpg",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["bollywood", "India", "entertainment"],
        },
        {
            id: 5,
            title: "Bollywood 2",
            author: "J",
            read: "10 min read",
            claps: 100,
            category: "Bollywood",
            image:
                "https://stat2.bollywoodhungama.in/wp-content/uploads/2021/12/Radhe-Shyam-009-480x270.jpg",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["bollywood", "India", "entertainment"],
        },
        {
            id: 6,
            title: "Bollywood 3",
            author: "J",
            read: "10 min read",
            claps: 900,
            category: "Bollywood",
            image:
                "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/01/K.G.F-%E2%80%93-Chapter-2-480x270.jpg",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["bollywood", "India", "entertainment"],
        },
        {
            id: 7,
            title: "Bollywood 4",
            author: "J",
            read: "10 min read",
            claps: 355,
            category: "Bollywood",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmY-AOo_Pbl07zgZ956yBQ2M6tBJ20o6t-w&usqp=CAU",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["bollywood", "India", "entertainment"],
        },
        {
            id: 8,
            title: "Bollywood 5",
            author: "J",
            read: "10 min read",
            claps: 430,
            category: "Bollywood",
            image:

                "https://www.firstpost.com/wp-content/uploads/2021/12/dhamaka.jpg",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["bollywood", "India", "entertainment"],
        },
        {
            id: 9,
            title: "Technology 1",
            author: "J",
            read: "10 min read",
            claps: 400,
            category: "Technology",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFJsqfHqD7ypd6_0ybXcKeRXnP6bfToDOXA&usqp=CAU",
            date: "January 12 2022",
            text: ` Excepteur et laboris et fugiat cupidatat pariatur nulla nisi proident mollit laborum. Sunt adipisicing nulla consequat et eu nostrud ipsum ullamco nulla. Ipsum nostrud est esse cupidatat et nostrud officia qui commodo tempor occaecat exercitation excepteur. Ut nisi magna eu dolore sint pariatur sunt amet Lorem laborum enim excepteur. Adipisicing adipisicing minim ut excepteur adipisicing esse aute laboris ipsum. Nulla cupidatat aliqua anim est fugiat nisi cupidatat non quis non. Lorem culpa mollit tempor nostrud occaecat cillum cupidatat id velit.`,
            tags: ["Technology", "Tech"],
        },
        {
            id: 10,
            title: "Technology 2 ",
            author: "J",
            read: "10 min read",
            claps: 400,
            category: "Technology",
            image:
                "https://cutewallpaper.org/21/technology-hd-wallpapers/IDCs-Top-10-technology-predictions-for-2015-SD-Times.jpg",
            date: "January 12 2022",
            text: ` Excepteur et laboris et fugiat cupidatat pariatur nulla nisi proident mollit laborum. Sunt adipisicing nulla consequat et eu nostrud ipsum ullamco nulla. Ipsum nostrud est esse cupidatat et nostrud officia qui commodo tempor occaecat exercitation excepteur. Ut nisi magna eu dolore sint pariatur sunt amet Lorem laborum enim excepteur. Adipisicing adipisicing minim ut excepteur adipisicing esse aute laboris ipsum. Nulla cupidatat aliqua anim est fugiat nisi cupidatat non quis non. Lorem culpa mollit tempor nostrud occaecat cillum cupidatat id velit.`,
            tags: ["Technology", "Tech"],
        },
        {
            id: 11,
            title: "Technology 3 ",
            author: "J",
            read: "10 min read",
            claps: 100,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8&w=1000&q=80",
            text: ` Excepteur et laboris et fugiat cupidatat pariatur nulla nisi proident mollit laborum. Sunt adipisicing nulla consequat et eu nostrud ipsum ullamco nulla. Ipsum nostrud est esse cupidatat et nostrud officia qui commodo tempor occaecat exercitation excepteur. Ut nisi magna eu dolore sint pariatur sunt amet Lorem laborum enim excepteur. Adipisicing adipisicing minim ut excepteur adipisicing esse aute laboris ipsum. Nulla cupidatat aliqua anim est fugiat nisi cupidatat non quis non. Lorem culpa mollit tempor nostrud occaecat cillum cupidatat id velit.`,
            tags: ["Technology", "Tech"],
        },
        {
            id: 12,
            title: "Technology 4 ",
            author: "J",
            read: "10 min read",
            claps: 100,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjBob21lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            date: "January 12 2022",
            text: ` Excepteur et laboris et fugiat cupidatat pariatur nulla nisi proident mollit laborum. Sunt adipisicing nulla consequat et eu nostrud ipsum ullamco nulla. Ipsum nostrud est esse cupidatat et nostrud officia qui commodo tempor occaecat exercitation excepteur. Ut nisi magna eu dolore sint pariatur sunt amet Lorem laborum enim excepteur. Adipisicing adipisicing minim ut excepteur adipisicing esse aute laboris ipsum. Nulla cupidatat aliqua anim est fugiat nisi cupidatat non quis non. Lorem culpa mollit tempor nostrud occaecat cillum cupidatat id velit.`,
            tags: ["Technology", "Tech"],
        },
        {
            id: 13,
            title: "Technology 5 ",
            author: "J",
            read: "10 min read",
            claps: 100,
            category: "Technology",
            image:
                "https://c0.wallpaperflare.com/preview/478/190/341/0rmvjrcci2lomc2inca1csskqh.jpg",
            date: "January 12 2022",
            text: ` Excepteur et laboris et fugiat cupidatat pariatur nulla nisi proident mollit laborum. Sunt adipisicing nulla consequat et eu nostrud ipsum ullamco nulla. Ipsum nostrud est esse cupidatat et nostrud officia qui commodo tempor occaecat exercitation excepteur. Ut nisi magna eu dolore sint pariatur sunt amet Lorem laborum enim excepteur. Adipisicing adipisicing minim ut excepteur adipisicing esse aute laboris ipsum. Nulla cupidatat aliqua anim est fugiat nisi cupidatat non quis non. Lorem culpa mollit tempor nostrud occaecat cillum cupidatat id velit.`,
            tags: ["Technology", "Tech"],
        },
        {
            id: 14,
            title: "Technology 6 ",
            author: "J",
            read: "10 min read",
            claps: 690,
            category: "Technology",
            image:
                "https://c4.wallpaperflare.com/wallpaper/262/350/392/blue-water-light-technology-wallpaper-preview.jpg",

            date: "January 12 2022",
            text: ` Excepteur et laboris et fugiat cupidatat pariatur nulla nisi proident mollit laborum. Sunt adipisicing nulla consequat et eu nostrud ipsum ullamco nulla. Ipsum nostrud est esse cupidatat et nostrud officia qui commodo tempor occaecat exercitation excepteur. Ut nisi magna eu dolore sint pariatur sunt amet Lorem laborum enim excepteur. Adipisicing adipisicing minim ut excepteur adipisicing esse aute laboris ipsum. Nulla cupidatat aliqua anim est fugiat nisi cupidatat non quis non. Lorem culpa mollit tempor nostrud occaecat cillum cupidatat id velit.`,
            tags: ["Technology", "Tech"],
        },
        {
            id: 15,
            title: "Hollywood 1",
            author: "J",
            read: "10 min read",
            claps: 700,
            category: "Hollywood",
            image:
                "https://cdn.wallpapersafari.com/29/84/hNJKcq.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Hollywood", "English"],
        },
        {
            id: 16,
            title: "Hollywood 2",
            author: "J",
            read: "10 min read",
            claps: 300,
            category: "Hollywood",
            image:
                "https://swall.teahub.io/photos/small/25-250333_exists-horror-movie-data-src-horror-movie-background.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Hollywood", "English"],
        },
        {
            id: 17,
            title: "Hollywood 3",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Hollywood",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwNJ7WgrPMT5f1Ni8JIPAAL7G03uXFveoKA&usqp=CAU",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Hollywood", "English"],
        },
        {
            id: 18,
            title: "Hollywood 4",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Hollywood",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSNYW47gB3e7icg1nqCuIFv3tIfAwj0EWYg&usqp=CAU",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Hollywood", "English"],
        },
        {
            id: 19,
            title: "Bollywood 6",
            author: "J",
            read: "10 min read",
            claps: 430,
            category: "Bollywood",
            image:
                "https://www.mangobollywood.com/wp-content/uploads/2018/01/welcome-to-new-york-twitter_650x400_61516294134.jpg",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["bollywood", "India", "entertainment"],
        },
        {
            id: 20,
            title: "Bollywood 7",
            author: "J",
            read: "10 min read",
            claps: 430,
            category: "Bollywood",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2v2_TkHFTVyYKzyYY2icjwrjwgHLua6HwQ&usqp=CAU",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["bollywood", "India", "entertainment"],
        },
        {
            id: 21,
            title: "Bollywood 8",
            author: "J",
            read: "10 min read",
            claps: 430,
            category: "Bollywood",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDU7WZSxKZJ8yOuyREODHBkJPXSF5IKwKyAw&usqp=CAU",
            date: "January 12 2022",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.`,
            tags: ["bollywood", "India", "entertainment"],
        },
        {
            id: 22,
            title: "Technology 7 ",
            author: "J",
            read: "10 min read",
            claps: 690,
            category: "Technology",
            image:
                "https://wallpapercave.com/wp/wp1877426.jpg",
            date: "January 12 2022",
            text: ` Excepteur et laboris et fugiat cupidatat pariatur nulla nisi proident mollit laborum. Sunt adipisicing nulla consequat et eu nostrud ipsum ullamco nulla. Ipsum nostrud est esse cupidatat et nostrud officia qui commodo tempor occaecat exercitation excepteur. Ut nisi magna eu dolore sint pariatur sunt amet Lorem laborum enim excepteur. Adipisicing adipisicing minim ut excepteur adipisicing esse aute laboris ipsum. Nulla cupidatat aliqua anim est fugiat nisi cupidatat non quis non. Lorem culpa mollit tempor nostrud occaecat cillum cupidatat id velit.`,
            tags: ["Technology", "Tech"],
        },
        {
            id: 23,
            title: "Technology 8 ",
            author: "J",
            read: "10 min read",
            claps: 690,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1587071292164-aa5ab1c8c706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvc2V8ZW58MHx8MHx8&w=1000&q=80",

            date: "January 12 2022",
            text: ` Excepteur et laboris et fugiat cupidatat pariatur nulla nisi proident mollit laborum. Sunt adipisicing nulla consequat et eu nostrud ipsum ullamco nulla. Ipsum nostrud est esse cupidatat et nostrud officia qui commodo tempor occaecat exercitation excepteur. Ut nisi magna eu dolore sint pariatur sunt amet Lorem laborum enim excepteur. Adipisicing adipisicing minim ut excepteur adipisicing esse aute laboris ipsum. Nulla cupidatat aliqua anim est fugiat nisi cupidatat non quis non. Lorem culpa mollit tempor nostrud occaecat cillum cupidatat id velit.`,
            tags: ["Technology", "Tech"],
        },
        {
            id: 24,
            title: "Hollywood 5",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Hollywood",
            image:
                "https://wallpaperaccess.com/full/4241751.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Hollywood", "English"],
        },
        {
            id: 25,
            title: "Hollywood 6",
            author: "J",
            read: "10 min read",
            claps: 1200,
            category: "Hollywood",
            image:
                " https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Hollywood", "English"],
        },
        {
            id: 26,
            title: "Hollywood 7",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Hollywood",
            image:
                "https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Hollywood", "English"],
        },
        {
            id: 27,
            title: "Fitness 1",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Fitness",
            image:
                "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Fit", "Healthy"],
        },
        {
            id: 28,
            title: "Fitness 2",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Fitness",
            image:
                "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Fit", "Healthy"],
        },
        {
            id: 29,
            title: "Fitness 3",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Fitness",
            image:
                "https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Fit", "Healthy"],
        },
        {
            id: 30,
            title: "Fitness 4",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Fitness",
            image:
                "https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Fit", "Healthy"],
        },
        {
            id: 31,
            title: "Fitness 5",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Fitness",
            image:
                "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Fit", "Healthy"],
        },
        {
            id: 32,
            title: "Fitness 6",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Fitness",
            image:
                "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",

            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Fit", "Healthy"],
        },
        {
            id: 33,
            title: "Fitness 7",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Fitness",
            image:
                "https://media.istockphoto.com/photos/fit-black-sporty-man-training-in-the-city-picture-id1295949061?b=1&k=20&m=1295949061&s=170667a&w=0&h=5tgauVHiZ6tw3LI6Wn7R6MAllwBbjDnqS_SWaUNcUmQ=",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Fit", "Healthy"],
        },
        {
            id: 34,
            title: "Food 1",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Food",
            image:
                "https://wallpapercave.com/wp/wp1929358.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Food", "Tasty"],
        },
        {
            id: 35,
            title: "Food 2",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Food",
            image:
                "https://c32-cdn.guidingtech.com/optim/assets/189868/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-11_4d470f76dc99e18ad75087b1b8410ea9.jpg?1573743471",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Food", "Tasty"],
        },
        {
            id: 36,
            title: "Food 3",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Food",
            image:
                "https://i.ytimg.com/vi/_7vruX-A7Yk/maxresdefault.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Food", "Tasty"],
        },
        {
            id: 37,
            title: "Food 4",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Food",
            image:
                "https://i.ytimg.com/vi/W6X8cvP8EwY/maxresdefault.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Food", "Tasty"],
        },
        {
            id: 38,
            title: "Food 5",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Food",
            image:
                "https://image.shutterstock.com/image-photo/pav-bhaji-fast-food-dish-260nw-1133164967.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Food", "Tasty"],
        },
        {
            id: 39,
            title: "Food 6",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Food",
            image:
                "https://static2.tripoto.com/media/filter/tst/img/254497/TripDocument/1461690741_cover.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Food", "Tasty"],
        },
        {
            id: 40,
            title: "Food 7",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Food",
            image:

                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlSUk9FLMPjSObOVvgkPZ2F4TpQ_Vh7y03A&usqp=CAU",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Food", "Tasty"],
        },
        {
            id: 41,
            title: "Food 8",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Food",
            image:
                "https://im.rediff.com/getahead/2015/oct/01cuisine-ithaka-sesame-zucchini.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Food", "Tasty"],
        },
        {
            id: 42,
            title: "Fitness 8",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Fitness",
            image:
                "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",

            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Fit", "Healthy"],
        },
        {
            id: 43,
            title: "Hollywood 8",
            author: "J",
            read: "10 min read",
            claps: 200,
            category: "Hollywood",
            image:
                "https://wallpaperaccess.com/full/5919.jpg",
            date: "January 12 2022",
            text: ` Occaecat est nostrud non sint officia reprehenderit commodo ea esse. Excepteur ullamco do in elit et culpa qui commodo Lorem consectetur occaecat. Enim adipisicing ut magna est excepteur et ullamco velit culpa ullamco ipsum qui dolore nostrud.`,
            tags: ["Hollywood", "English"],
        },
    ]

    if (req.query.category) {
        const userData = user.filter((val) = val.category.toLowerCase() === req.query.category.toLowerCase())
        console.log("done");
        res.send(userData)

    } if (req.param.id) {
        console.log(req.params.id);
        const userData = user.filter((val) => val.id === Number(req.params.id))
        res.send(userData)
    }

    else {
        res.send(data)
    }

}

module.exports = appData;
