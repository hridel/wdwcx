const { PrismaClient } = require('@prisma/client');

const tsTips = [
    {
        title: 'Use Strict Mode',
        description:
            "Enable strict mode by adding <code>'use strict';</code> at the beginning of your JavaScript files to catch common coding errors.",
    },
    {
        title: 'Use <code>const</code> and <code>let</code>',
        description:
            'Avoid using <code>var</code> and prefer <code>const</code> for constants and <code>let</code> for variables that may change.',
    },
    {
        title: 'Arrow Functions',
        description:
            'Use arrow functions for shorter syntax and to avoid issues with <code>this</code> context.',
    },
    {
        title: 'Template Literals',
        description:
            'Use template literals <code>`</code> for string interpolation and multi-line strings.',
    },
    {
        title: 'Destructuring',
        description:
            'Use destructuring to extract values from arrays or properties from objects into distinct variables.',
    },
    {
        title: 'Default Parameters',
        description:
            'Use default parameters to set default values for function parameters.',
    },
    {
        title: 'Spread Operator',
        description:
            'Use the spread operator <code>...</code> to expand arrays or objects.',
    },
    {
        title: 'Rest Parameters',
        description:
            'Use rest parameters <code>...</code> to handle function arguments as an array.',
    },
    {
        title: 'Async/Await',
        description:
            'Use <code>async</code> and <code>await</code> for cleaner and more readable asynchronous code.',
    },
    {
        title: 'Promises',
        description:
            'Use Promises to handle asynchronous operations and avoid callback hell.',
    },
    {
        title: 'Modules',
        description:
            'Use ES6 modules <code>import</code> and <code>export</code> to organize your code.',
    },
    {
        title: 'TypeScript',
        description:
            'Use TypeScript for static type checking and better code quality.',
    },
    {
        title: 'Interfaces',
        description:
            'Use TypeScript interfaces to define the shape of objects.',
    },
    {
        title: 'Generics',
        description:
            'Use TypeScript generics to create reusable and type-safe components.',
    },
    {
        title: 'Union Types',
        description:
            'Use union types to allow a variable to hold more than one type.',
    },
    {
        title: 'Intersection Types',
        description:
            'Use intersection types to combine multiple types into one.',
    },
    {
        title: 'Type Aliases',
        description: 'Use type aliases to create custom types.',
    },
    {
        title: 'Enums',
        description: 'Use TypeScript enums to define a set of named constants.',
    },
    {
        title: 'Type Assertions',
        description:
            'Use type assertions to tell the compiler the type of a variable.',
    },
    {
        title: 'Optional Chaining',
        description:
            'Use optional chaining <code>?.</code> to safely access deeply nested properties.',
    },
    {
        title: 'Nullish Coalescing',
        description:
            'Use nullish coalescing <code>??</code> to provide a default value for <code>null</code> or <code>undefined</code>.',
    },
    {
        title: 'Strict Null Checks',
        description:
            'Enable strict null checks in TypeScript to catch null and undefined errors.',
    },
    {
        title: 'Readonly Properties',
        description: 'Use <code>readonly</code> to make properties immutable.',
    },
    {
        title: 'Private Fields',
        description:
            'Use private fields <code>#</code> to encapsulate class properties.',
    },
    {
        title: 'Decorators',
        description: 'Use decorators to add metadata to classes and methods.',
    },
    {
        title: 'Functional Programming',
        description:
            'Embrace functional programming principles like immutability and pure functions.',
    },
    {
        title: 'Higher-Order Functions',
        description:
            'Use higher-order functions to create more reusable and composable code.',
    },
    {
        title: 'Currying',
        description:
            'Use currying to transform functions with multiple arguments into a sequence of functions with a single argument.',
    },
    {
        title: 'Memoization',
        description:
            'Use memoization to cache the results of expensive function calls.',
    },
    {
        title: 'Event Delegation',
        description:
            'Use event delegation to handle events efficiently by leveraging event bubbling.',
    },
    {
        title: 'Debouncing',
        description:
            'Use debouncing to limit the rate at which a function is executed.',
    },
    {
        title: 'Throttling',
        description:
            'Use throttling to ensure a function is called at most once in a specified time period.',
    },
    {
        title: 'Polyfills',
        description:
            'Use polyfills to add support for modern features in older browsers.',
    },
    {
        title: 'Linting',
        description:
            'Use a linter like ESLint to enforce coding standards and catch errors early.',
    },
    {
        title: 'Prettier',
        description:
            'Use Prettier to automatically format your code for consistency.',
    },
    {
        title: 'Unit Testing',
        description: 'Write unit tests to verify the correctness of your code.',
    },
    {
        title: 'Integration Testing',
        description:
            'Write integration tests to ensure different parts of your application work together.',
    },
    {
        title: 'End-to-End Testing',
        description:
            'Write end-to-end tests to simulate real user interactions with your application.',
    },
    {
        title: 'Code Coverage',
        description:
            'Measure code coverage to ensure your tests cover all code paths.',
    },
    {
        title: 'Continuous Integration',
        description:
            'Use continuous integration to automatically run tests and build your application on every commit.',
    },
    {
        title: 'Version Control',
        description:
            'Use version control systems like Git to track changes and collaborate with others.',
    },
    {
        title: 'Semantic Versioning',
        description:
            'Use semantic versioning to communicate changes in your codebase.',
    },
    {
        title: 'Documentation',
        description:
            'Write documentation to explain how to use your code and its features.',
    },
    {
        title: 'Code Comments',
        description:
            'Use comments to explain complex or non-obvious parts of your code.',
    },
    {
        title: 'Code Reviews',
        description:
            'Participate in code reviews to improve code quality and share knowledge.',
    },
    {
        title: 'Refactoring',
        description:
            'Regularly refactor your code to improve its structure and readability.',
    },
    {
        title: 'Design Patterns',
        description:
            'Use design patterns to solve common problems in software design.',
    },
    {
        title: 'SOLID Principles',
        description:
            'Follow the SOLID principles to write maintainable and scalable code.',
    },
    {
        title: 'DRY Principle',
        description:
            "Follow the DRY (Don't Repeat Yourself) principle to avoid code duplication.",
    },
    {
        title: 'KISS Principle',
        description:
            'Follow the KISS (Keep It Simple, Stupid) principle to write simple and straightforward code.',
    },
];

const phpTips = [
    {
        title: 'Use Strict Types',
        description:
            'Enable strict types by adding <code>declare(strict_types=1);</code> at the beginning of your PHP files to enforce strict type checking.',
    },
    {
        title: 'Use Namespaces',
        description:
            'Organize your code with namespaces to avoid name collisions and improve autoloading.',
    },
    {
        title: 'Autoloading',
        description:
            "Use Composer's autoloading feature to automatically load your classes.",
    },
    {
        title: 'PSR Standards',
        description:
            'Follow PSR (PHP Standards Recommendations) to ensure your code is consistent and interoperable.',
    },
    {
        title: 'Type Hinting',
        description:
            'Use type hinting for function parameters and return types to improve code readability and catch errors early.',
    },
    {
        title: 'Use PDO for Database Access',
        description:
            'Use PDO (PHP Data Objects) for secure and consistent database access.',
    },
    {
        title: 'Prepared Statements',
        description:
            'Use prepared statements to prevent SQL injection attacks.',
    },
    {
        title: 'Error Handling',
        description:
            'Use try-catch blocks to handle exceptions and errors gracefully.',
    },
    {
        title: 'Logging',
        description:
            'Implement logging to keep track of errors and important events in your application.',
    },
    {
        title: 'Use Composer',
        description: "Use Composer to manage your project's dependencies.",
    },
    {
        title: 'Dependency Injection',
        description:
            'Use dependency injection to improve code testability and maintainability.',
    },
    {
        title: 'Unit Testing',
        description:
            'Write unit tests to verify the correctness of your code using PHPUnit.',
    },
    {
        title: 'Integration Testing',
        description:
            'Write integration tests to ensure different parts of your application work together.',
    },
    {
        title: 'End-to-End Testing',
        description:
            'Write end-to-end tests to simulate real user interactions with your application.',
    },
    {
        title: 'Code Coverage',
        description:
            'Measure code coverage to ensure your tests cover all code paths.',
    },
    {
        title: 'Continuous Integration',
        description:
            'Use continuous integration to automatically run tests and build your application on every commit.',
    },
    {
        title: 'Version Control',
        description:
            'Use version control systems like Git to track changes and collaborate with others.',
    },
    {
        title: 'Semantic Versioning',
        description:
            'Use semantic versioning to communicate changes in your codebase.',
    },
    {
        title: 'Documentation',
        description:
            'Write documentation to explain how to use your code and its features.',
    },
    {
        title: 'Code Comments',
        description:
            'Use comments to explain complex or non-obvious parts of your code.',
    },
    {
        title: 'Code Reviews',
        description:
            'Participate in code reviews to improve code quality and share knowledge.',
    },
    {
        title: 'Refactoring',
        description:
            'Regularly refactor your code to improve its structure and readability.',
    },
    {
        title: 'Design Patterns',
        description:
            'Use design patterns to solve common problems in software design.',
    },
    {
        title: 'SOLID Principles',
        description:
            'Follow the SOLID principles to write maintainable and scalable code.',
    },
    {
        title: 'DRY Principle',
        description:
            "Follow the DRY (Don't Repeat Yourself) principle to avoid code duplication.",
    },
    {
        title: 'KISS Principle',
        description:
            'Follow the KISS (Keep It Simple, Stupid) principle to write simple and straightforward code.',
    },
    {
        title: 'YAGNI Principle',
        description:
            "Follow the YAGNI (You Aren't Gonna Need It) principle to avoid over-engineering.",
    },
    {
        title: 'Use PHP 7+',
        description:
            'Use PHP 7 or higher for better performance and new features.',
    },
    {
        title: 'Use Built-in Functions',
        description:
            "Leverage PHP's built-in functions to avoid reinventing the wheel.",
    },
    {
        title: 'Sanitize User Input',
        description:
            'Always sanitize user input to prevent security vulnerabilities.',
    },
    {
        title: 'Validate User Input',
        description:
            "Always validate user input to ensure it meets your application's requirements.",
    },
    {
        title: 'Use HTTPS',
        description:
            'Use HTTPS to encrypt data transmitted between the client and server.',
    },
    {
        title: 'Session Management',
        description:
            'Use secure session management practices to protect user data.',
    },
    {
        title: 'Password Hashing',
        description:
            'Use password hashing functions like <code>password_hash()</code> to securely store user passwords.',
    },
    {
        title: 'Avoid Globals',
        description:
            'Avoid using global variables to prevent unexpected behavior and improve code maintainability.',
    },
    {
        title: 'Use Constants',
        description: 'Use constants to define values that do not change.',
    },
    {
        title: 'Optimize Performance',
        description:
            'Optimize your code for performance by minimizing resource usage and avoiding unnecessary computations.',
    },
    {
        title: 'Cache Results',
        description:
            'Use caching to store the results of expensive operations and improve performance.',
    },
    {
        title: 'Use Output Buffering',
        description:
            'Use output buffering to improve performance and control the output of your scripts.',
    },
    {
        title: 'Avoid Deep Nesting',
        description:
            'Avoid deep nesting of loops and conditionals to improve code readability and maintainability.',
    },
    {
        title: 'Use Short Array Syntax',
        description:
            'Use the short array syntax <code>[]</code> instead of <code>array()</code>.',
    },
    {
        title: 'Use Null Coalescing Operator',
        description:
            'Use the null coalescing operator <code>??</code> to provide default values for null or undefined variables.',
    },
    {
        title: 'Use Ternary Operator',
        description:
            'Use the ternary operator <code>?:</code> for concise conditional expressions.',
    },
    {
        title: 'Use Anonymous Functions',
        description:
            'Use anonymous functions for short, one-time use functions.',
    },
    {
        title: 'Use Closures',
        description: 'Use closures to create functions with private variables.',
    },
    {
        title: 'Use Generators',
        description:
            'Use generators to create iterators in a memory-efficient way.',
    },
    {
        title: 'Use Traits',
        description: 'Use traits to reuse code across multiple classes.',
    },
    {
        title: 'Use Interfaces',
        description:
            'Use interfaces to define the structure of classes and ensure consistency.',
    },
    {
        title: 'Use Abstract Classes',
        description:
            'Use abstract classes to define base classes that cannot be instantiated.',
    },
];

const nextJsTips = [
    {
        title: 'Use Static Generation',
        description:
            'Use static generation with <code>getStaticProps</code> for better performance and SEO.',
    },
    {
        title: 'Use Server-Side Rendering',
        description:
            'Use server-side rendering with <code>getServerSideProps</code> for dynamic content that needs to be updated on each request.',
    },
    {
        title: 'API Routes',
        description:
            'Use API routes to create backend endpoints in your Next.js application.',
    },
    {
        title: 'Dynamic Routing',
        description:
            'Use dynamic routing to create pages with dynamic content based on URL parameters.',
    },
    {
        title: 'Custom Document',
        description:
            'Customize the HTML document structure by overriding the <code>_document.js</code> file.',
    },
    {
        title: 'Custom App',
        description:
            'Customize the default App component by overriding the <code>_app.js</code> file.',
    },
    {
        title: 'Image Optimization',
        description:
            'Use the Next.js <code>Image</code> component for automatic image optimization.',
    },
    {
        title: 'CSS Modules',
        description:
            'Use CSS Modules for scoped and modular CSS in your Next.js application.',
    },
    {
        title: 'Environment Variables',
        description:
            'Use environment variables to manage configuration settings for different environments.',
    },
    {
        title: 'Incremental Static Regeneration',
        description:
            'Use Incremental Static Regeneration to update static content without rebuilding the entire site.',
    },
    {
        title: 'Middleware',
        description:
            'Use middleware to run code before a request is completed.',
    },
    {
        title: 'Custom Error Pages',
        description:
            'Create custom error pages by overriding the <code>_error.js</code> file.',
    },
    {
        title: 'API Middleware',
        description:
            'Use API middleware to add custom logic to your API routes.',
    },
    {
        title: 'Prefetching',
        description:
            'Use prefetching to load pages in the background for faster navigation.',
    },
    {
        title: 'Static File Serving',
        description:
            'Serve static files from the <code>public</code> directory.',
    },
    {
        title: 'Custom Headers',
        description:
            'Add custom headers to your responses using the <code>next.config.js</code> file.',
    },
    {
        title: 'Redirects',
        description:
            'Set up redirects in the <code>next.config.js</code> file.',
    },
    {
        title: 'Rewrites',
        description:
            'Set up URL rewrites in the <code>next.config.js</code> file.',
    },
    {
        title: 'TypeScript Support',
        description:
            'Use TypeScript for type safety and better developer experience.',
    },
    {
        title: 'Custom Babel Configuration',
        description:
            'Customize Babel configuration by creating a <code>babel.config.js</code> file.',
    },
    {
        title: 'Custom Webpack Configuration',
        description:
            'Customize Webpack configuration by extending the <code>next.config.js</code> file.',
    },
    {
        title: 'Static Export',
        description:
            'Export your Next.js application as a static site using <code>next export</code>.',
    },
    {
        title: 'Internationalization',
        description:
            'Use Next.js built-in internationalization support for multi-language applications.',
    },
    {
        title: 'Analytics',
        description:
            'Integrate analytics tools like Google Analytics with your Next.js application.',
    },
    {
        title: 'Performance Optimization',
        description:
            'Optimize performance by using code splitting, lazy loading, and other techniques.',
    },
];

const html5Tips = [
    {
        title: 'Use Semantic Elements',
        description:
            'Use semantic elements like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> to improve the structure and accessibility of your HTML.',
    },
    {
        title: 'Use <code>&lt;main&gt;</code> Element',
        description:
            'Wrap the main content of your page in a <code>&lt;main&gt;</code> element to improve accessibility.',
    },
    {
        title: 'Use <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code>',
        description:
            'Use <code>&lt;figure&gt;</code> to group media content and <code>&lt;figcaption&gt;</code> to provide a caption for the content.',
    },
    {
        title: 'Use <code>&lt;nav&gt;</code> for Navigation',
        description:
            'Use the <code>&lt;nav&gt;</code> element to define navigation links.',
    },
    {
        title: 'Use <code>&lt;aside&gt;</code> for Side Content',
        description:
            'Use the <code>&lt;aside&gt;</code> element for content that is tangentially related to the main content.',
    },
    {
        title: 'Use <code>&lt;time&gt;</code> for Dates and Times',
        description:
            'Use the <code>&lt;time&gt;</code> element to mark up dates and times.',
    },
    {
        title: 'Use <code>&lt;progress&gt;</code> for Progress Bars',
        description:
            'Use the <code>&lt;progress&gt;</code> element to display progress bars.',
    },
    {
        title: 'Use <code>&lt;meter&gt;</code> for Measurements',
        description:
            'Use the <code>&lt;meter&gt;</code> element to display measurements within a known range.',
    },
    {
        title: 'Use <code>&lt;datalist&gt;</code> for Input Suggestions',
        description:
            'Use the <code>&lt;datalist&gt;</code> element to provide input suggestions for text fields.',
    },
    {
        title: 'Use <code>&lt;output&gt;</code> for Calculation Results',
        description:
            'Use the <code>&lt;output&gt;</code> element to display the result of a calculation.',
    },
    {
        title: 'Use <code>&lt;template&gt;</code> for Client-Side Templates',
        description:
            'Use the <code>&lt;template&gt;</code> element to define client-side templates that can be instantiated using JavaScript.',
    },
    {
        title: 'Use <code>&lt;picture&gt;</code> for Responsive Images',
        description:
            'Use the <code>&lt;picture&gt;</code> element to provide different images for different devices and resolutions.',
    },
    {
        title: 'Use <code>&lt;source&gt;</code> for Media Sources',
        description:
            'Use the <code>&lt;source&gt;</code> element to specify multiple media sources for <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements.',
    },
    {
        title: 'Use <code>&lt;track&gt;</code> for Subtitles',
        description:
            'Use the <code>&lt;track&gt;</code> element to add subtitles and captions to <code>&lt;video&gt;</code> elements.',
    },
    {
        title: 'Use <code>&lt;audio&gt;</code> for Audio Content',
        description:
            'Use the <code>&lt;audio&gt;</code> element to embed audio content in your web pages.',
    },
    {
        title: 'Use <code>&lt;video&gt;</code> for Video Content',
        description:
            'Use the <code>&lt;video&gt;</code> element to embed video content in your web pages.',
    },
    {
        title: 'Use <code>&lt;canvas&gt;</code> for Drawing',
        description:
            'Use the <code>&lt;canvas&gt;</code> element to draw graphics on the fly using JavaScript.',
    },
    {
        title: 'Use <code>&lt;svg&gt;</code> for Vector Graphics',
        description:
            'Use the <code>&lt;svg&gt;</code> element to embed scalable vector graphics in your web pages.',
    },
    {
        title: 'Use <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code>',
        description:
            'Use the <code>&lt;details&gt;</code> element to create collapsible content and the <code>&lt;summary&gt;</code> element to provide a summary for the content.',
    },
    {
        title: 'Use <code>&lt;mark&gt;</code> for Highlighting',
        description:
            'Use the <code>&lt;mark&gt;</code> element to highlight text.',
    },
    {
        title: 'Use <code>&lt;wbr&gt;</code> for Line Break Opportunities',
        description:
            'Use the <code>&lt;wbr&gt;</code> element to specify where a line break can occur.',
    },
    {
        title: 'Use <code>&lt;abbr&gt;</code> for Abbreviations',
        description:
            'Use the <code>&lt;abbr&gt;</code> element to mark up abbreviations and acronyms.',
    },
    {
        title: 'Use <code>&lt;data&gt;</code> for Machine-Readable Data',
        description:
            'Use the <code>&lt;data&gt;</code> element to associate machine-readable data with its human-readable counterpart.',
    },
    {
        title: 'Use <code>&lt;bdi&gt;</code> for Bi-Directional Text',
        description:
            'Use the <code>&lt;bdi&gt;</code> element to isolate a span of text that might be formatted in a different direction from other text outside it.',
    },
    {
        title: 'Use <code>&lt;bdo&gt;</code> for Text Direction',
        description:
            'Use the <code>&lt;bdo&gt;</code> element to override the current text direction.',
    },
];

const cssTips = [
    {
        title: 'CSS Grid Layout',
        description:
            'Use CSS Grid Layout to create complex, responsive grid-based layouts with ease.',
    },
    {
        title: 'Flexbox',
        description:
            'Use Flexbox to create flexible and responsive layouts without using floats or positioning.',
    },
    {
        title: 'Custom Properties (CSS Variables)',
        description:
            'Use CSS custom properties to define reusable values and make your CSS more maintainable.',
    },
    {
        title: 'CSS Transitions',
        description:
            'Use CSS transitions to animate changes to CSS properties smoothly.',
    },
    {
        title: 'CSS Animations',
        description:
            'Use CSS animations to create complex animations with keyframes.',
    },
    {
        title: 'CSS Transforms',
        description:
            'Use CSS transforms to rotate, scale, skew, or translate elements.',
    },
    {
        title: 'CSS Filters',
        description:
            'Use CSS filters to apply graphical effects like blur, brightness, and contrast to elements.',
    },
    {
        title: 'CSS Grid Areas',
        description:
            'Use named grid areas in CSS Grid Layout to simplify the placement of elements.',
    },
    {
        title: 'CSS Shapes',
        description:
            'Use CSS Shapes to create non-rectangular float areas for text wrapping.',
    },
    {
        title: 'CSS Clip-Path',
        description:
            'Use the clip-path property to create complex shapes and mask elements.',
    },
    {
        title: 'CSS Variables with JavaScript',
        description:
            'Manipulate CSS custom properties with JavaScript to create dynamic styles.',
    },
    {
        title: 'CSS Scroll Snap',
        description:
            'Use CSS Scroll Snap to create smooth scrolling experiences with snap points.',
    },
    {
        title: 'CSS Grid Template Areas',
        description:
            'Define grid template areas to create complex layouts with named areas.',
    },
    {
        title: 'CSS Aspect Ratio',
        description:
            'Use the aspect-ratio property to maintain the aspect ratio of elements.',
    },
    {
        title: 'CSS Subgrid',
        description:
            "Use the subgrid value in CSS Grid Layout to create nested grids that inherit the parent grid's layout.",
    },
    {
        title: 'CSS Logical Properties',
        description:
            'Use logical properties to create layouts that adapt to different writing modes and text directions.',
    },
    {
        title: 'CSS Scrollbar Styling',
        description:
            'Customize the appearance of scrollbars using the ::-webkit-scrollbar pseudo-element.',
    },
    {
        title: 'CSS Grid Auto-Placement',
        description:
            'Use the auto-placement feature in CSS Grid Layout to automatically place grid items.',
    },
    {
        title: 'CSS Multi-Column Layout',
        description:
            'Use the multi-column layout module to create multi-column text layouts.',
    },
    {
        title: 'CSS Object-Fit',
        description:
            'Use the object-fit property to control how replaced content (like images) is resized to fit its container.',
    },
    {
        title: 'CSS Object-Position',
        description:
            'Use the object-position property to control the position of replaced content within its container.',
    },
    {
        title: 'CSS Grid Line Naming',
        description:
            'Name grid lines in CSS Grid Layout to simplify the placement of grid items.',
    },
    {
        title: 'CSS Grid Fractional Units',
        description:
            'Use fractional units (fr) in CSS Grid Layout to create flexible grid tracks.',
    },
    {
        title: 'CSS Grid Minmax Function',
        description:
            'Use the minmax function in CSS Grid Layout to create grid tracks with flexible minimum and maximum sizes.',
    },
    {
        title: 'CSS Grid Repeat Function',
        description:
            'Use the repeat function in CSS Grid Layout to create repeating grid tracks.',
    },
];

const gitTips = [
    {
        title: 'Use Branches',
        description:
            'Create separate branches for new features, bug fixes, and experiments to keep your main branch stable.',
    },
    {
        title: 'Write Descriptive Commit Messages',
        description:
            'Write clear and descriptive commit messages to explain the changes you made.',
    },
    {
        title: 'Use .gitignore',
        description:
            'Use a .gitignore file to exclude files and directories that should not be tracked by Git.',
    },
    {
        title: 'Rebase Instead of Merge',
        description:
            'Use rebase to keep a clean commit history by avoiding unnecessary merge commits.',
    },
    {
        title: 'Use Stash',
        description:
            'Use git stash to save your changes temporarily and apply them later.',
    },
    {
        title: 'Review Changes Before Committing',
        description:
            'Use git diff to review your changes before committing them.',
    },
    {
        title: 'Use Tags for Releases',
        description:
            'Use Git tags to mark specific points in your commit history as important, such as releases.',
    },
    {
        title: 'Use Pull Requests',
        description:
            'Use pull requests to review and discuss code changes before merging them into the main branch.',
    },
    {
        title: 'Keep Commits Small',
        description:
            'Make small, incremental commits to make it easier to track changes and identify issues.',
    },
    {
        title: 'Use Git Hooks',
        description:
            'Use Git hooks to automate tasks like running tests or formatting code before committing.',
    },
    {
        title: 'Squash Commits',
        description:
            'Squash commits to combine multiple small commits into a single, meaningful commit.',
    },
    {
        title: 'Use Git Bisect',
        description:
            'Use git bisect to find the commit that introduced a bug by performing a binary search.',
    },
    {
        title: 'Use Git Blame',
        description:
            'Use git blame to find out who made changes to a specific line of code.',
    },
    {
        title: 'Use Git Log',
        description:
            "Use git log to view the commit history and understand the project's evolution.",
    },
    {
        title: 'Use Git Aliases',
        description: 'Create Git aliases to simplify frequently used commands.',
    },
    {
        title: 'Use Git Cherry-Pick',
        description:
            'Use git cherry-pick to apply specific commits from one branch to another.',
    },
    {
        title: 'Use Git Reflog',
        description:
            'Use git reflog to recover lost commits and track changes to the HEAD.',
    },
    {
        title: 'Use Git Submodules',
        description:
            'Use Git submodules to include and manage external repositories within your project.',
    },
    {
        title: 'Use Git Clean',
        description:
            'Use git clean to remove untracked files and directories from your working directory.',
    },
    {
        title: 'Use Git Reset',
        description:
            'Use git reset to undo changes and move the HEAD to a specific commit.',
    },
    {
        title: 'Use Git Revert',
        description:
            'Use git revert to create a new commit that undoes the changes from a previous commit.',
    },
    {
        title: 'Use Git Fetch',
        description:
            'Use git fetch to download changes from a remote repository without merging them.',
    },
    {
        title: 'Use Git Pull',
        description:
            'Use git pull to fetch and merge changes from a remote repository.',
    },
    {
        title: 'Use Git Push',
        description:
            'Use git push to upload your local changes to a remote repository.',
    },
    {
        title: 'Use Git Config',
        description:
            'Use git config to customize Git settings and preferences.',
    },
];

const prisma = new PrismaClient();

async function main() {
    // DevTips
    const existingDevTips = await prisma.devTip.findFirst();
    if (!existingDevTips) {
        console.log('DevTips table has no data, lets seed it...');
        await prisma.devTip.createMany({
            data: [
                ...tsTips.map(
                    (tip: { title: string; description: string }) => ({
                        ...tip,
                        tags: ['typescript'],
                    })
                ),
                ...phpTips.map(
                    (tip: { title: string; description: string }) => ({
                        ...tip,
                        tags: ['php'],
                    })
                ),
                ...html5Tips.map(
                    (tip: { title: string; description: string }) => ({
                        ...tip,
                        tags: ['html5'],
                    })
                ),
                ...gitTips.map(
                    (tip: { title: string; description: string }) => ({
                        ...tip,
                        tags: ['git'],
                    })
                ),
                ...nextJsTips.map(
                    (tip: { title: string; description: string }) => ({
                        ...tip,
                        tags: ['nextjs'],
                    })
                ),
                ...cssTips.map(
                    (tip: { title: string; description: string }) => ({
                        ...tip,
                        tags: ['css'],
                    })
                ),
            ],
        });
    } else {
        console.log('DevTips table already has a data. Skip seeding...');
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
