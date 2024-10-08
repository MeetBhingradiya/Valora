const blogs = [
    {
      slug: 'understanding-react-hooks',
      title: 'Understanding React Hooks',
      summary: 'Learn how React hooks can simplify your components...',
      content: `
        **React hooks** are functions that let you use state and other React features in functional components. Hooks simplify the way we handle state, side effects, and other functionalities, making functional components more powerful.
  
        ### **1. useState**
        The **useState** hook allows you to add state to functional components. It returns a state variable and a function to update it.
        \`\`\`jsx
        const [count, setCount] = useState(0);
        \`\`\`
        - **count**: The current value of the state.
        - **setCount**: A function to update the value of \`count\`.
        
        This hook is ideal when managing values like **form inputs**, **counters**, or any data that can change.
  
        ### **2. useEffect**
        The **useEffect** hook lets you perform side effects in functional components, such as:
        - Fetching data from an API.
        - Manually changing the **DOM**.
        - Setting up subscriptions.
  
        It runs **after the first render** and after every update, by default.
        \`\`\`jsx
        useEffect(() => {
          // Code to run after the component renders or updates
        }, []);
        \`\`\`
        - The **dependency array** controls when the side effect is executed.
        - Passing an empty array **(\`[]\`)** means it runs only after the initial render.
  
        Hooks like **useState** and **useEffect** help bring simplicity and flexibility to your code, replacing the need for class components in many situations.
  
        ### **Benefits of Using Hooks**
        - **Simplifies State Management**: You can add and manage component state with **less boilerplate**.
        - **Code Reusability**: Extract reusable **logic** into custom hooks.
        - **Functional Components**: All components can be functional, which simplifies the component structure.
  
        React hooks have become an essential part of the React ecosystem, providing developers with **easier**, **more readable**, and **more maintainable** code.
      `,
      image: '/assets/blog/React_Hooks.webp',
    },
    {
      slug: 'next-js-routing-explained',
      title: 'Next.js Routing Explained',
      summary: 'A deep dive into routing in Next.js for building modern web apps...',
      content: `
        **Next.js** has a powerful and simple routing system that allows you to create pages by just creating files in the **pages** directory. The routing system is built on the concept of **file-based routing**, making it straightforward to add new pages to your application.
  
        ### **Static Routing**
        Each file you create in the **pages** directory becomes a route:
        - **/index.js** → **/** (Homepage)
        - **/about.js** → **/about**
  
        This approach is easy to understand and maintain as your project grows.
  
        ### **Dynamic Routing**
        If you need **dynamic routes**, use brackets (\`[param]\`) to define the route. For example:
        \`\`\`jsx
        // File: /pages/post/[id].js
        import { useRouter } from 'next/router';
  
        const Post = () => {
          const router = useRouter();
          const { id } = router.query;
  
          return <div>Post ID: {id}</div>;
        };
  
        export default Post;
        \`\`\`
        The route \`/post/[id]\` will dynamically match routes like **/post/1** or **/post/hello**, giving you flexibility.
  
        ### **API Routes**
        **API routes** are available in Next.js, and you can create serverless functions by adding JavaScript files to the **pages/api** directory. For example:
        - **/pages/api/hello.js**:
        \`\`\`jsx
        export default function handler(req, res) {
          res.status(200).json({ message: "Hello, World!" });
        }
        \`\`\`
  
        ### **Link Component**
        The **Link** component in Next.js is used to navigate between pages without a full reload:
        \`\`\`jsx
        import Link from 'next/link';
  
        export default function Home() {
          return (
            <Link href="/about">
              <a>Go to About Page</a>
            </Link>
          );
        }
        \`\`\`
        - **Linking without reload** improves the user experience by making navigation faster and smoother.
  
        ### **Benefits of Next.js Routing**
        - **Automatic Code Splitting**: Pages are loaded only when they are needed, leading to faster load times.
        - **SEO-friendly**: Static pages improve **search engine optimization**.
        - **Simplified Routing**: Just by creating a file, you have a route.
  
        Next.js’s routing system combines **simplicity**, **flexibility**, and **power** to provide a seamless developer experience for building modern, optimized web applications.
      `,
      image: '/images/nextjs-routing.jpg',
    },
    // More blog entries...
  ];
  
  export default blogs;