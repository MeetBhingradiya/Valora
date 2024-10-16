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
        **Next.js** offers a powerful and simple routing system that lets you create pages by just creating files in the **pages** directory. This file-based routing makes it easy to add new pages.
  
        ### Static Routing
        Each file you create in the **pages** directory becomes a route:
        - **/index.js** → **/** (Homepage)
        - **/about.js** → **/about**
  
        ### Dynamic Routing
        For **dynamic routes**, use brackets (\`[param]\`). For example:
        \`\`\`jsx
        // File: /pages/post/[id].js
        import { useRouter } from 'next/router';
  
        const Post = () => {
          const { id } = useRouter().query;
          return <div>Post ID: {id}</div>;
        };
  
        export default Post;
        \`\`\`
        This route will match URLs like **/post/1** or **/post/hello**, giving you flexibility.
  
        ### API Routes
        You can create **API routes** by adding files to the **pages/api** directory. For example:
        \`\`\`jsx
        export default function handler(req, res) {
          res.status(200).json({ message: "Hello, World!" });
        }
        \`\`\`
  
        ### Link Component
        Use the **Link** component for navigation without reloading the page:
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
        Linking without reload improves user experience by making navigation faster.
  
        ### Benefits of Next.js Routing
        - **Automatic Code Splitting**: Pages load only when needed, improving performance.
        - **SEO-friendly**: Static pages enhance search engine optimization.
        - **Simplified Routing**: Just create a file, and it becomes a route.
  
        Next.js provides a simple yet powerful routing system for modern web applications.
      `,
        image: '/images/nextjs-routing.jpg',
    },
];

export default blogs;