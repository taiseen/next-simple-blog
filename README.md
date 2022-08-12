> 16 - Jun - 2022

## Simple Blog | [Live Link][link]
[link]: https://next-simple-blog-bd.vercel.app


# NextJs + TailwindCss


## Yarn | Dependencies...
|No| Package Installs          | Use for...          |
|--|---------------------------|---------------------|
| 1| yarn add `swiper`         | slider              |
| 2| yarn add `react-icons`    | icon display at UI  |
| 3| yarn add `react-spinners` | loading spinner     |
| 4| yarn add `swr`            | React Hooks library for remote data fetching |


<br/>


## Project Structure
    🟨
    src
    ├── components
    |   ├── _child
    |   |   ├── Author.jsx
    |   |   ├── Error.jsx
    |   |   ├── NewsLetter.jsx
    |   |   ├── Related.jsx
    |   |   └── Spinner.jsx
    |   |
    |   ├── CategoryPost.jsx
    |   ├── Footer.jsx
    |   ├── Header.jsx
    |   ├── HeroSection.jsx
    |   ├── index.js
    |   ├── LatestPost.jsx
    |   ├── Layout.jsx          |🟡| <Header /> ➕ { children } ➕ <Footer /> |🟡|
    |   └── MostPopular.jsx
    |
    |
    ├── lib                     |🟠| Fetcher |🟠|
    |   ├── fetcher.js          |🟠| Fetcher |🟠|
    |   └── helper.js           |🟠| Fetcher |🟠|
    |
    |
    ├── pages
    |   |
    |   ├── api                 |🟨| BackEnd |🟨|
    |   |   |                   |🟨| BackEnd |🟨|
    |   |   ├── db              |🟨| BackEnd |🟨|
    |   |   |   └── data.js     |🟨| BackEnd |🟨|
    |   |   |                   |🟨| BackEnd |🟨|
    |   |   ├── popular         |🟨| BackEnd |🟨|
    |   |   |   ├── index.js    |🟨| BackEnd |🟨| 
    |   |   |   └── [id].js     |🟨| BackEnd |🟨|
    |   |   |                   |🟨| BackEnd |🟨|
    |   |   ├── post            |🟨| BackEnd |🟨|
    |   |   |   ├── index.js    |🟨| BackEnd |🟨|
    |   |   |   └── [id].js     |🟨| BackEnd |🟨|
    |   |   |                   |🟨| BackEnd |🟨|
    |   |   ├── trending        |🟨| BackEnd |🟨|
    |   |   |   ├── index.js    |🟨| BackEnd |🟨|
    |   |   |   └── [id].js     |🟨| BackEnd |🟨|
    |   |   |                   |🟨| BackEnd |🟨|
    |   |   └── index.js        |🟨| BackEnd |🟨|
    |   |                       
    |   |
    |   |
    |   ├── popular
    |   |   └── [id].js
    |   |
    |   ├── post
    |   |   └── [id].js
    |   |
    |   ├── trending
    |   |   └── [id].js
    |   |
    |   ├── _app.js             |✅| <Layout /> |✅|
    |   └── index.js
    |
    |
    |
    └── styles
        └── globals.css
    🟨
<br/>


## Learning context by developing this app:
|No| Context learn by building this project...          | 
|--|----------------------------------------------------|
| 1| Layout Component architecture                      | 
| 2| Responsive thinking... `w-fit - sm:w-96`           | 
| 3| `flex-wrap-reverse` equivalent into `grid - order` | 
| 4| `swiper slider` > usage, importing jsx + css files | 
| 5| `swiper slider` > navigation                       | 
| 6| `swiper slider` > pagination                       | 
| 7| `swiper slider` > autoPlay interaction...          | 
| 8| `swiper slider` > responsive breakpoints           | 
| 9| `swiper slider` > bullet pointer `color change`    | 
|10| `swiper slider` > navigation handle `color change` | 
|11| Fav icon set > `Layout > Head > link` <> `public/fav.ico`  |
|12| set `padding bottom` at swiper slider container for `bullet pointer` go little down | 
|13| Functional style, JXS written (modular system) & call that for displaying at UI     |
|14| `BackEnd` > Folder Structure + File naming convention meaning                       |
|15| `BackEnd` > Folder name become `URL endpoint` &...                                  | 
|16| `BackEnd` > then inside this Folder must have `index.js` file for `default response` from this `URL endpoint` |
|17| Tailwind CSS + `Custom CSS` writing together       |
|18| Custom Spinner Component + Loader animation create | 
|19| Custom Error Component                             | 


> * now i can create my own API EndPoint for accessing BackEnd Data...
> * & fetch those Data from FrontEnd... for displaying into UI...
