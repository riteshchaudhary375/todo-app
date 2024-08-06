# Todo App

## About the app

This is a MERN (MongoDB, Express, React.js, Node.js) stack application. It allows to CRUD operation for todo items.

The front-end of the application is built with React and uses React Router for client-side routing. The back-end is built with Node.js and Express.js, and uses MongoDB as the database.

This application is a simple full-stack web application.

## Technology used:

1. React.js
2. Node.js
3. Express.js
4. MongoDB

## Front-end Section

### 1. React.js

- JavaScript library to build Dynamic and interactive user interfaces
- Developed at Facebook in 2011.
- Currently most widely used JS library for front-end development.
- Used to create single page application (page does not re-load).

### Working of React

- No need to worry about querying and updating DOM elements.
- React creates a web page with small and reusable components
- React will take care of creating and updating DOM elements.
- IT saves a lot of time.
- Components help us write reusable, modular and better organized code.

### Including Bootstrap

- Responsive: Mobile-first design for all device sizes.
- Components: Pre-styled elements like buttons and navbars.
- Customizable: Modify default styles as needed.
- Cross-Browser: Consistent look across browsers.
- Open-Source: Free with community support.
- **install:** `npm i bootstrap@latest`
- **import:** `import "bootstrap/dist/css/bootstrap.min.css";`

### CSS Modules

- Localized class names to avoid global conflicts.
- Styles are scoped to individual components.
- Helps in creating component-specific styles.
- Automatically generates unique class names.
- Promotes modular and maintainable CSS.
- Can use alongside global CSS when needed.

### Managing state

- State represents data that changes over time.
- State is local and private to the component.
- State changes cause the component to re-render.
- React Functions that start with word use are called hooks.
- Hooks should only be used inside components.
- Parent components can pass state down to children via props.
- Helps in lifting state up by sharing state between components by moving it to their closest common ancestor.

### State vs Props

**State:**

- Local and mutable data within a component.
- Initialized within the component.
- Can change over time.
- Causes re-render when updated.
- Managed using useState in functional components.

**Props:**

- Passed into a component from its parent.
- Read-only (immutable) within the receiving component.
- Allow parent-to-child component communication.
- Changes in props can also cause a re-render.

### Used react hooks in app

**useState:**

- It allows us to track state in a function component.
- Updating state based on the previous state
- Updating objects and arrays in state
- Avoiding recreating the initial state
- Resetting state with a key
- Storing information from previous renders

**useRef:**

- useRef allows access to DOM elements and retains mutable values without re-renders.
- Used with the ref attribute for direct DOM interactions.
- Can hold previous state or prop values.
- Not limited to DOM references; can hold any value.
- Refs can be passed as props also

**useEffect:**

- In function-based components, useEffect handles side effects like data fetching or event listeners.
- useEffect runs automatically after every render by default.
- By providing a dependency array, useEffect will only run when specified variables change. An empty array means the effect runs once.
- Multiple useEffect hooks can be used in a single component for organizing different side effects separately.
- allow access to DOM elements and retains mutable values without re-renders.
- can hold any value.

**useContext:**

- Global State Management Used to save state globally so the state is available globally in our application.
- This helps keep the UI and business logic separate from each other.

**useReducer:**

- Perform Actions On Global State and allow us to manage complex state logic.
- Particularly useful for managing state in large components or when the next state depends on the previous one.

### Data fetching using Fetch

- **fetch:** Modern JavaScript API for network requests.
- **Promise-Based:** Returns a Promise with a Response object.
- **Usage:** Default is GET. For POST use method: 'POST',For UPDATE use method: 'PUT',For DELETE use method: 'DELETE'
- **Response:** Use .then() and response.json() for JSON data.
- **Errors:** Doesn't reject on HTTP errors. Check response.ok.
- **Headers:** Managed using the Headers API.

### React Router

- React Router is a JavaScript framework that lets us handle client and server-side routing in React applications.
- It makes simple to manage the URL and state of the application.
- It enables the creation of single-page web or mobile apps that allow navigating across multiple pages without refreshing the page.
- A Router in React JS routes using a component-based architecture.
- **Add and set up react router:** Use `npm install react-router-dom` and wrap the app for routing capabilities.

### Route Links

- **Link** Component with **to** property can be used to avoid reloading
- **useNavigate** hook can be used to do navigation programmatically.

## Back-end Technology

## 2. Node.js

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a powerful tool suitable for a wide range of projects. While Node.js is primarily known as a backend technology, it can also be used in the front-end development process. In fact, Node.js has gained popularity as a full-stack technology because of its versatility in handling both client-side and server-side tasks.

### Table of Content

1. What is Node.JS?
2. Why Node.JS?
3. Basic Concepts of Node.JS
4. Node.js Example to Create Web Server
5. How Node.JS Works?
6. Advantages of Node.JS
7. What is Node.JS file?
8. Application of Node.JS
9. Common Use Cases of Node.JS
10. Node.JS Ecosystem

### 1. What is Node.JS?

Node.js is an open-source, cross-platform **JavaScript runtime environment** that executes JavaScript code outside of a web browser. It’s a powerful tool used for various types of projects. Let’s explore some key aspects:

- **JavaScript Runtime:** Node.js runs on the **V8 JavaScript engine**, which is also the core engine behind Google Chrome. However, unlike the browser context, Node.js executes JavaScript code **outside of the browser**.
- **Single Process Model:** A Node.js application operates within a **single process**, avoiding the need to create a new thread for every request. This design choice contributes to Node.js’ performance.
- **Asynchronous I/O:** Node.js provides a set of **asynchronous I/O primitives** in its standard library. These primitives prevent JavaScript code from blocking, making non-blocking behavior the norm. When performing I/O operations (e.g., reading from the network, accessing databases, or the filesystem), Node.js doesn’t waste CPU cycles waiting. Instead, it resumes operations when the response arrives.
- **Concurrency Handling:** Node.js efficiently handles thousands of **concurrent connections** using a single server. It avoids the complexities of managing thread concurrency, which can lead to bugs.
- **JavaScript Everywhere:** Frontend developers familiar with JavaScript can seamlessly transition to writing server-side code using Node.js. You don’t need to learn a different language.
- **ECMAScript Standards:** Node.js supports the latest ECMAScript standards. You can choose the version you want to use, independent of users’ browser updates.

### 2. Why Node.JS?

Node.js is used to build back-end services like **APIs** like Web App, Mobile App or Web Server. A Web Server will open a file on the server and return the content to the client. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart, and so on.

**Reasons to Choose Node.js**

- **Easy to Get Started:** Node.js is beginner-friendly and ideal for prototyping and agile development.
- **Scalability:** It scales both horizontally and vertically.
- **Real-Time Web Apps:** Node.js excels in real-time synchronization.
- **Fast Suite:** It handles operations quickly (e.g., database access, network connections).
- **Unified Language:** JavaScript everywhere—frontend and backend.
- **Rich Ecosystem:** Node.js boasts a large open-source library and supports asynchronous, non-blocking programming.

**Node.js handling file request:**

<code>Send Task -> Returns -> Ready for Next Task</code>

Node.js takes requests from users, processes those requests, and returns responses to the corresponding users, there is no Wait for open and read file phase in Node.js.

### 3.. Basic Concepts of Node.JS

The following diagram depicts some important parts of Node.js that are useful and help us understand it better.
![Node.js](https://media.geeksforgeeks.org/wp-content/uploads/20230726113229/Concept-of-nodejs.webp)

### 4. Node.js Example to Create Web Server

It is the basic code example to create node.js server.

```
----------
JavaScript
----------

// Importing the http module
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
    // Setting the content type to HTML
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // Sending the HTML response
    res.end('<h1>Hello GFG</h1>');
});

// Listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
```

Output:
![Output:](https://media.geeksforgeeks.org/wp-content/uploads/20231229165440/basic-nodejs.png)

**Code Explaination:**

- We use the http **module** to create an **HTTP server**.
- The server listens on the specified port and **hostname**.
- When a new request arrives, the callback function handles it by setting the response status, headers, and content.

### 5. How Node.JS Works?

Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

### 6. Advantages of Node.JS

- **Easy Scalability:** Easily scalable the application in both horizontal and vertical directions.
- **Real-time web apps:** Node.js is much more preferable because of faster synchronization. Also, the event loop avoids HTTP overloaded for Node.js development.
- **Fast Suite:** NodeJS acts like a fast suite and all the operations can be done quickly like reading or writing in the database, network connection, or file system
- **Easy to learn and code:** NodeJS is easy to learn and code because it uses JavaScript.
- **Advantage of Caching:** It provides the caching of a single module. Whenever there is any request for the first module, it gets cached in the application memory, so you don’t need to re-execute the code.

### 7. What is Node.JS file?

Node.js files contain tasks that handle file operations like creating, reading, deleting, etc., Node.js provides an inbuilt module called **FS (File System)**.

### 8. Application of Node.JS

Node.js is suitable for various applications, including:

- Real-time chats
- Complex single-page applications
- Real-time collaboration tools
- Streaming apps
- JSON APIs

### 9. Common Use Cases of Node.JS

Node.js is versatile and finds applications in various domains:

- **Web Servers:** Node.js excels at building lightweight and efficient web servers. Its non-blocking I/O model makes it ideal for handling concurrent connections.
- **APIs and Microservices:** Many companies use Node.js to create **RESTful APIs** and microservices. Express.js simplifies API development.
- **Real-Time Applications:** Node.js shines in real-time scenarios like chat applications, live notifications, and collaborative tools. Socket.io facilitates real-time communication.
- **Single-Page Applications (SPAs):** **SPAs** benefit from Node.js for server-side rendering (SSR) and handling API requests.
- **Streaming Services:** Node.js is well-suited for streaming data, whether it’s video, audio, or real-time analytics.

### 10. Node.JS Ecosystem

Node.js has a vibrant ecosystem with a plethora of libraries, frameworks, and tools. Here are some key components:

- **npm (Node Package Manager):** **npm** is the default package manager for Node.js. It allows developers to install, manage, and share reusable code packages (called modules). You can find thousands of open-source packages on the npm registry.
- **Express.js:** **Express** is a popular web application framework for Node.js. It simplifies routing, middleware handling, and request/response management. Many developers choose Express for building APIs, web servers, and single-page applications.
- **Socket.io:** For real-time communication, **Socket.io** is a go-to library. It enables bidirectional communication between the server and clients using WebSockets or fallback mechanisms.
- **Mongoose:** If you’re working with **MongoDB** (a NoSQL database), Mongoose provides an elegant way to model your data and interact with the database. It offers schema validation, middleware, and query building.

## 3. Express.js

Express.js is a fast, flexible and minimalist web framework for Node.js. It’s effectively a tool that simplifies building web applications and APIs using JavaScript on the server side. Express is an open-source that is developed and maintained by the Node.js foundation.

Express.js offers a robust set of features that enhance your productivity and streamline your web application. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node HTTP objects and facilitates the rendering of dynamic HTTP objects.

### Why learn Express?

Express is a user-friendly framework that simplifies the development process of Node applications. It uses JavaScript as a programming language and provides an efficient way to build web applications and APIs. With Express, you can easily handle routes, requests, and responses, which makes the process of creating robust and scalable applications much easier. Moreover, it is a lightweight and flexible framework that is easy to learn and comes loaded with middleware options. Whether you are a beginner or an experienced developer, Express is a great choice for building your application.

### Getting Started Express

1. **Installation:** Install Express using npm:
   `npm install express`

2. Basic Example of an Express App:

   ```
   const express = require('express');
   const app = express();

   // Define routes and middleware here

   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
   ```

**Explanation:**

- Import the **‘express’** module to create a web application using **Node.js**.
- Initialize an Express app using const **app = express();**.
- Add **routes (endpoints)** and **middleware** functions to handle requests and perform tasks like authentication or logging.
- Specify a **port (defaulting to 3000)** for the server to listen on.

### Key Features of Express

- **Middleware and Routing:** Define clear pathways (routes) within your application to handle incoming **HTTP** requests **(GET, POST, PUT, DELETE)** with ease. Implement reusable functions (middleware) to intercept requests and create responses, adding functionalities like authentication, logging, and data parsing.
- **Minimalistic Design:** Express.js follows a simple and minimalistic design philosophy. This simplicity allows you to quickly set up a server, define routes, and handle **HTTP** requests efficiently. It’s an excellent choice for building web applications without unnecessary complexity.
- **Flexibility and Customization:** Express.js doesn’t impose a strict application architecture. You can structure your code according to your preferences. Whether you’re building a **RESTful API** or a full-fledged web app, Express.js adapts to your needs.
- **Templating Power:** Incorporate templating engines like Jade or **EJS** to generate dynamic **HTML** content, enhancing user experience.
- **Static File Serving:** Effortlessly serve static files like images, **CSS**, and **JavaScript** from a designated directory within your application.
- **Node.js Integration:** Express.js seamlessly integrates with the core functionalities of Node.js, allowing you to harness the power of asynchronous programming and event-driven architecture.

### Applications of Express

Express.js empowers you to construct a wide array of web applications. Here are some captivating examples:

- **RESTful APIs:** Develop robust **APIs** that adhere to the **REST** architectural style, enabling communication with other applications and front-end interfaces.
- **Real-time Applications:** Leverage Express.js’s event-driven nature to create real-time applications like chat or collaborative editing tools.
- **Single-Page Applications (SPAs):** Craft **SPAs** that fetch and update content dynamically on the client-side, offering a seamless user experience.

## 4. MongoDB

MongoDB is a **powerful and flexible solution for handling modern data needs**. As a leading NoSQL database, MongoDB offers a dynamic schema design, enabling developers to store and manage data in a way that aligns seamlessly with contemporary application requirements.

Unlike traditional relational databases, **MongoDB’s document-oriented architecture allows for greater agility and scalability**, making it a preferred choice for businesses and developers aiming to handle large volumes of unstructured or semi-structured data.

### Table of Content

1. What is Mongo-DB?
2. Working of MongoDB
3. Why is MongoDB used?
4. Difference between MongoDB and RDBMS ?
5. Features of MongoDB
6. Uses of MongoDB
7. Advantages of MongoDB
8. Disadvantages of MongoDB
9. MongoDB platforms
10. MongoDB history
11. Conclusion

In this article, we will explore the key features of MongoDB, its advantages over traditional databases, and how it can be leveraged to optimize data management in various applications.

### 1. What is Mongo-DB?

**MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently**. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the MongoDB are not in the form of tables.

**The MongoDB database is developed and managed by MongoDB.Inc under SSPL(Server Side Public License) and initially released in February 2009**. It also provides official driver support for all the popular languages like C, C++, C#, and .Net, Go, Java, Node.js, Perl, PHP, Python, Motor, Ruby, Scala, Swift, Mongoid. So, that you can create an application using any of these languages. Nowadays there are so many companies that used MongoDB like Facebook, Nokia, eBay, Adobe, Google, etc. to store their large amount of data.

### 2. Working of MongoDB

**MongoDB is a database server and the data is stored in these databases**. Or in other words, MongoDB environment gives you a server that you can start and then create multiple databases on it using MongoDB.
Because of its **NoSQL database**, the data is stored in the collections and documents. Hence the database, collection, and documents are related to each other as shown below:

![Database Structure](https://media.geeksforgeeks.org/wp-content/uploads/20200127193216/mongodb-nosql-working.jpg)

- The MongoDB database contains collections just like the **MYSQL database** contains tables. You are allowed to create multiple databases and multiple collections.
- Now inside of the collection we have documents. These documents contain the data we want to store in the MongoDB database and a single collection can contain multiple documents and you are schema-less means it is not necessary that one document is similar to another.
- The documents are created using the fields. Fields are key-value pairs in the documents, it is just like columns in the relation database. The value of the fields can be of any BSON data types like double, string, boolean, etc.
- The data stored in the MongoDB is in the format of **BSON** documents. Here, BSON stands for Binary representation of JSON documents. Or in other words, in the backend, the MongoDB server converts the JSON data into a binary form that is known as BSON and this BSON is stored and queried more efficiently.
- In MongoDB documents, you are allowed to store nested data. This nesting of data allows you to create complex relations between data and store them in the same document which makes the working and fetching of data extremely efficient as compared to SQL. In SQL, you need to write complex joins to get the data from table 1 and table 2. The maximum size of the BSON document is 16MB

<code><b>NOTE:</b> In MongoDB server, you are allowed to run multiple databases.</code>

For example: we have a database named GeeksforGeeks. Inside this database, we have two collections and in these collections we have two documents. And in these documents we store our data in the form of fields. As shown in the below image:
![Database](https://media.geeksforgeeks.org/wp-content/uploads/20200123222337/Untitled-Diagram-57.jpg)

### 3. Why is MongoDB used?

An organization might want to use MongoDB for the following:

- **Storage:** MongoDB can store large structured and unstructured data volumes and is scalable vertically and horizontally. Indexes are used to improve search performance. Searches are also done by field, range and expression queries.
- **Data integration:** This integrates data for applications, including for hybrid and multi-cloud applications.
- **Complex data structures descriptions:** Document databases enable the embedding of documents to describe nested structures (a structure within a structure) and can tolerate variations in data.
- **Load balancing:** MongoDB can be used to run over multiple servers.

### 4. Difference between MongoDB and RDBMS ?

Some major differences in between MongoDB and the RDBMS are as follows:

<table border>
    <thead>
        <tr>
            <td>MongoDB</td>
            <td>RDBMS</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            It is a non-relational and document-oriented database.
            </td>
            <td>
            It is a relational database.
            </td>
        </tr>
        <tr>
            <td>
            It is suitable for hierarchical data storage.
            </td>
            <td>
            It is not suitable for hierarchical data storage.
            </td>
        </tr>
        <tr>
            <td>
            It has a dynamic schema.
            </td>
            <td>
            It has a predefined schema.
            </td>
        </tr>
        <tr>
            <td>
            It centers around the <b>CAP theorem</b> (Consistency, Availability, and Partition tolerance).
            </td>
            <td>
            It centers around <b>ACID</b> properties (Atomicity, Consistency, Isolation, and Durability).
            </td>
        </tr>
        <tr>
            <td>
            In terms of performance, it is much faster than RDBMS.
            </td>
            <td>
            In terms of performance, it is slower than MongoDB.
            </td>
        </tr>
    </tbody>
</table>

### 5. Features of MongoDB

- **Schema-less Database:** It is the great feature provided by the MongoDB. A Schema-less database means one collection can hold different types of documents in it. Or in other words, in the MongoDB database, a single collection can hold multiple documents and these documents may consist of the different numbers of fields, content, and size. It is not necessary that the one document is similar to another document like in the relational databases. Due to this cool feature, MongoDB provides great flexibility to databases.
- **Document Oriented:** In MongoDB, **all the data stored in the documents instead of tables like in RDBMS**. In these documents, the data is stored in fields(key-value pair) instead of rows and columns which make the data much more flexible in comparison to RDBMS. And each document contains its unique object id.
- **Indexing:** In MongoDB database,**every field in the documents is indexed with primary and secondary indices this makes easier and takes less time to get or search data from the pool of the data**. If the data is not indexed, then database search each document with the specified query which takes lots of time and not so efficient.
- **Scalability:** MongoDB **provides horizontal scalability with the help of sharding**. **Sharding** means to distribute data on multiple servers, here a large amount of data is partitioned into data chunks using the shard key, and these data chunks are evenly distributed across shards that reside across many physical servers. It will also add new machines to a running database.
- **Replication:** MongoDB provides high availability and redundancy with the help of replication, it creates multiple copies of the data and sends these copies to a different server so that if one server fails, then the data is retrieved from another server.
- **Aggregation:** It **allows to perform operations on the grouped data and get a single result or computed result**. It is similar to the **SQL GROUPBY** clause. It provides three different **aggregations** i.e, aggregation pipeline, map-reduce function, and single-purpose aggregation methods
- **High Performance:** The performance of MongoDB is very high and data persistence as compared to another database due to its features like scalability, indexing, replication, etc.

### 6. Uses of MongoDB

MongoDB is a popular NoSQL database known for its flexibility, scalability, and performance. It is widely used in various applications across different industries. Here are some common uses of MongoDB:

- **Content Management Systems (CMS):** MongoDB’s flexible schema and powerful query capabilities make it an ideal choice for content management systems. It can efficiently handle diverse content types and structures, enabling dynamic and scalable content management solutions.
- **E-commerce Platforms:** E-commerce platforms benefit from MongoDB’s ability to store and retrieve large amounts of product data quickly. Its flexible schema supports dynamic product catalogs, user profiles, shopping carts, and transaction histories.
- **Real-Time Analytics:** MongoDB is well-suited for real-time analytics applications due to its high-performance data ingestion and querying capabilities. It can handle large volumes of data in real-time, making it ideal for monitoring, fraud detection, and personalized recommendations.
- **Internet of Things (IoT):** IoT applications generate vast amounts of data from sensors and devices. MongoDB’s scalability and flexible data model allow it to efficiently store and process this data, enabling real-time analysis and decision-making for IoT systems.
- **Gaming Applications:** Gaming applications generate complex data structures, such as player profiles, scores, achievements, and game states. MongoDB’s document-based model allows for efficient storage and retrieval of this data, supporting high-performance gaming experiences.
- **Log Management and Analysis:** Organizations use MongoDB to store and analyze log data from various sources. Its ability to handle large volumes of unstructured data makes it ideal for logging, monitoring, and troubleshooting applications and infrastructure.
- **Customer Relationship Management (CRM):** CRM systems use MongoDB to manage customer data, interactions, and sales pipelines. Its ability to handle complex relationships and unstructured data enables more personalized and effective customer engagement strategies.
- **Social Networks:** Social networking applications require a database that can handle complex relationships, user-generated content, and real-time interactions. MongoDB’s flexibility and scalability make it an excellent choice for building social networks and community platforms.
- **Big Data Applications:** MongoDB is used in big data applications for its ability to store and process large volumes of diverse data types. It integrates well with big data technologies like Hadoop and Spark, enabling advanced data analytics and processing.
- **Healthcare Systems:** Healthcare applications use MongoDB to manage patient records, clinical data, and medical images. Its flexible schema allows for the efficient storage of complex healthcare data, supporting better patient care and data analysis.

### 7. Advantages of MongoDB

- It is a schema-less NoSQL database. You need not to design the schema of the database when you are working with **MongoDB**.
- It does not support join operation.
- It provides great flexibility to the fields in the documents.
- It contains heterogeneous data.
- It provides high performance, availability, scalability.
- It supports **Geospatial** efficiently.
- It is a document oriented database and the data is stored in **BSON** documents.
- It also supports multiple document **ACID** transition(string from MongoDB 4.0).
- It does not require any **SQL** injection.
- It is easily integrated with **Big Data Hadoop**

### 8. Disadvantages of MongoDB

- It uses high memory for data storage.
- You are not allowed to store more than **16MB** data in the documents.
- The nesting of data in **BSON** is also limited you are not allowed to nest data more than 100 levels.

### 9. MongoDB platforms

MongoDB is available in community and commercial versions through vendor MongoDB Inc. MongoDB Community Edition is the open source release, while MongoDB Enterprise Server brings added security features, an in-memory storage engine, administration and authentication features, and monitoring capabilities through Ops Manager.

A graphical user interface (GUI) named MongoDB Compass gives users a way to work with document structure, conduct queries, index data and more. The MongoDB Connector for BI lets users connect the NoSQL database to their business intelligence tools to visualize data and create reports using SQL queries.

Following in the footsteps of other NoSQL database providers, MongoDB Inc. launched a cloud database as a service named MongoDB Atlas in 2016. Atlas runs on AWS, Microsoft Azure and Google Cloud Platform. Later, MongoDB released a platform named Stitch for application development on MongoDB Atlas, with plans to extend it to on-premises databases.

![MongoDB](https://cdn.ttgtmedia.com/rms/onlineImages/data_management-nosql.png)

The company also added support for multi-document atomicity, consistency, isolation, and durability **(ACID)** transactions as part of **MongoDB 4.0** in 2018. Complying with the ACID properties across multiple documents expands the types of transactional workloads that MongoDB can handle with guaranteed accuracy and reliability.

### 10. MongoDB history

**MongoDB** was created by **Dwight Merriman** and **Eliot Horowitz**, who encountered development and scalability issues with traditional relational database approaches while building web applications at DoubleClick, an online advertising company that is now owned by Google Inc. The name of the database was derived from the word **humongous** to represent the idea of supporting large amounts of data.

Merriman and Horowitz helped form 10Gen Inc. in 2007 to commercialize MongoDB and related software. The company was renamed MongoDB Inc. in 2013 and went public in October 2017 under the ticker symbol MDB.

The DBMS was released as open source software in 2009 and has been kept updated since.

Organizations like the insurance company MetLife have used MongoDB for customer service applications, while other websites like Craigslist have used it for archiving data. The CERN physics lab has used it for data aggregation and discovery. Additionally, The New York Times has used MongoDB to support a form-building application for photo submissions.

### 11. Conclusion

MongoDB is a powerful and flexible NoSQL database that caters to the needs of modern applications requiring scalable, high-performance data management. Its schema-less design, horizontal scalability, and rich querying capabilities make it a popular choice for developers and businesses alike. Understanding MongoDB’s features and benefits can help organizations efficiently handle large volumes of data and adapt to evolving requirements.
