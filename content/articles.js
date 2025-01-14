import fastAi from '../public/preview/coding-your-own-ai-2023-with-fastai.png'
import debugVsCode from '../public/preview/debugging-javascript-vscode.png'
import awsGettingStarted3 from '../public/preview/preview3_iZ3HECZAt.png'
import awsGettingStarted2 from '../public/preview/preview2_8ljU3AStslZ.png'
import awsGettingStarted1 from '../public/preview/preview1_bCXvzLuCixG.png'
import craftWebsite from '../public/preview/craft-website_NKUJDYwLo.png'
import reactQuery from '../public/preview/preview_vKvwsCn4S.png'
import yeomanTutorial from '../public/preview/preview_TSicBaLsTso.png'
import staticWebsite from '../public/preview/preview_tFOrvyV60.png'
import recreateWebsites from '../public/preview/4-github-pages_kdFLSpWYBJ_.png'
import noteTakingApps from '../public/preview/3-notebook_UBA90tPOp.jpg'
import reactToggle from '../public/preview/2-react_du62Xdg5s.jpg'
import dynamicVue from '../public/preview/1-vue_GRNjptkThwm.jpg'

const data = [
    {
        id: 13,
        type: 'Article',
        date: 'February 27, 2023',
        headline: 'Coding your own AI in 2023 with fastai',
        description: "This is a guide, which focuses on the critical parts of the fastai course. I'll cover how to set up the ecosystem and how to create, train and deploy an AI model.",
        link: '/blog/coding-your-own-ai-2023-with-fastai',
        previewImage: fastAi,
        shareImage: '/preview/coding-your-own-ai-2023-with-fastai.png',
    },
    {
        id: 12,
        type: 'Article',
        date: 'February 03, 2022',
        headline: 'A guide to debugging JavaScript in Visual Studio Code',
        description: "In this post, I will show how to set up debugging for Javascript in VS Code for Node.js and for React in Firefox or Chrome...",
        link: '/blog/debugging-javascript-vscode',
        previewImage: debugVsCode,
        shareImage: '/preview/debugging-javascript-vscode.png',
    },
    {
        id: 11,
        type: 'Article',
        date: 'July 06, 2020',
        headline: 'Getting Started with Serverless AWS (3/3) - Micro Services using Lambda, DynamoDB & API Gateway',
        description: "In this part, we're creating a DynamoDB. Then we create a Lambda for creating, reading, updating, and deleting entries in that database. And last we create...",
        link: '/blog/aws-getting-started-micro-service-lambda-dynamodb',
        previewImage: awsGettingStarted3,
        shareImage: '/preview/preview3_iZ3HECZAt.png',
    },
    {
        id: 10,
        type: 'Article',
        date: 'June 22, 2020',
        headline: 'Getting Started with Serverless AWS (2/3) - Distribute an S3 Bucket with CloudFront and add a Domain',
        description: "In this part we're going to add CloudFront to deliver our website content with low latency to the user. Afterward, we'll add a domain with HTTPs for our website...",
        link: '/blog/aws-getting-started-cloudfront-and-domain',
        previewImage: awsGettingStarted2,
        shareImage: '/preview/preview2_8ljU3AStslZ.png',
    },
    {
        id: 9,
        type: 'Article',
        date: 'June 15, 2020',
        headline: 'Getting Started with Serverless AWS (1/3) - Deploying a Static Website to S3',
        description: "In this series, we're creating a serverless stack using AWS. In this part, I'll show how to serve a static website through an S3 Bucket and how to deploy from your local machine...",
        link: '/blog/aws-getting-started-deploy-static-website-s3',
        previewImage: awsGettingStarted1,
        shareImage: '/preview/preview1_bCXvzLuCixG.png',
    },
    {
        id: 8,
        type: 'Article',
        date: 'May 29, 2020',
        headline: 'How to craft appealing websites',
        description: "When I started developing websites I never knew where to start, when creating a new one. Over time I came up with a process that helped me not only getting started, but also making the websites...",
        link: '/blog/how-to-craft-appealing-websites',
        previewImage: craftWebsite,
        shareImage: '/preview/craft-website_NKUJDYwLo.png',
    },
    {
        id: 7,
        type: 'Article',
        date: 'April 24, 2020',
        headline: 'Getting started with React Query - Easy server state management in React',
        description: "Handling state, which comes from the server can really cause some headaches in React. There is a lot you have to think about when dealing with asynchronous data, like updating, caching...",
        link: '/blog/react-query-getting-started-tutorial',
        previewImage: reactQuery,
        shareImage: '/preview/preview_vKvwsCn4S.png',
    },
    {
        id: 6,
        type: 'Article',
        date: 'March 09, 2020',
        headline: 'How to speed up kickstarting new projects with Yeoman',
        description: "I found myself often copy pasting code from other projects when starting new projects. This is why I created a Yeoman generator, which setups a nextjs project with styled components...",
        link: '/blog/how-to-create-yeoman-generator',
        previewImage: yeomanTutorial,
        shareImage: '/preview/preview_TSicBaLsTso.png',
    },
    {
        id: 5,
        type: 'Article',
        date: 'February 02, 2020',
        updatedAt: 'March 18, 2022',
        headline: 'How to build a static website without frameworks using npm scripts',
        description: "Sometimes it makes total sense to build an old fashioned static website. It can be not only faster, but also simplier than throwing in a full JavaScript framework just to build a website with only a few pages...",
        link: '/blog/how-to-create-static-website-npm-scripts',
        previewImage: staticWebsite,
        shareImage: '/preview/preview_tFOrvyV60.png',
    },
    {
        id: 4,
        type: 'Article',
        date: 'October 23, 2019',
        headline: '4 Websites to recreate to practice your web development skills',
        description: "The best way to learn web development is by practice. But when you get started you might feel lost. There are just so many things to learn, which makes it hard to choose the right project to get started. In the following I'll share some…",
        link: '/blog/4-websites-to-recreate-to-practice-your-web-development-skills',
        previewImage: recreateWebsites,
        shareImage: '/preview/4-github-pages_kdFLSpWYBJ_.png',
    },
    {
        id: 3,
        type: 'Article',
        date: 'October 16, 2019',
        updatedAt: 'June 19, 2020',
        headline: 'The best note taking apps for developers',
        description: "There are tons of note taking apps out there. But which ones are best suitable for developers? In the following I'll introduce three note taking apps for developers with good code support. + Available for: Mac, Windows, Android, iOS + Nice Code editor with a…",
        link: '/blog/the-best-note-taking-apps-for-developers',
        previewImage: noteTakingApps,
        shareImage: '/preview/3-notebook_UBA90tPOp.jpg',
    },
    {
        id: 2,
        type: 'Article',
        date: 'March 23, 2019',
        headline: 'How to toggle an array item with Javascript in React State',
        description: "In this short article I will demonstrate how to write a function to toggle array items with Javascript and inside of React state. First of all let’s have a look how to toggle an array item with Javascript (ES6): This function will get an array and…",
        link: '/blog/how-to-toggle-an-array-item-in-react-state',
        previewImage: reactToggle,
        shareImage: '/preview/2-react_du62Xdg5s.jpg',
    },
    {
        id: 1,
        type: 'Article',
        date: 'July 27, 2018',
        headline: 'Widget based website with dynamic Vue.js components',
        description: 'In this post I will explain how to generate a webpage using dynamic Vue.js components. This could be the foundation of a CMS based on Vue. The finished project can be found here First of all install the vue-cli if you havent already. To do so open…',
        link: '/blog/widget-based-website-with-dynamic-vuejs-components',
        previewImage: dynamicVue,
        shareImage: '/preview/1-vue_GRNjptkThwm.jpg',
    }
]

export default data
