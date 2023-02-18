import React from 'react';

const FAQ = ({ children, title }) => {
    return (

        <div className='bg-gray-800'>
             <div className='px-10 md:px-20 py-10'>
                    <h2 className='text-center text-4xl mt-10 font-bold text-teal-500'>Welcome to Our Blogsite</h2>

                    {/* Frist question and answer  */}

                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 md:w-6/12 mx-auto mt-10 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is cors?
                        </div>
                        <div className="collapse-content"> 
                            <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                            <br />
                            <br />
                            In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                            </p>
                        </div>
                        
                    </div>

                    {/* Second quesiton and answer */}

                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 md:w-6/12 mx-auto mt-10 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        Why are you using firebase? What other options do you have to implement authentication
                        </div>
                        <div className="collapse-content"> 
                            <p>
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.

                            One of the time-saving features that you want to explore in Firebase is its authentication service. When you link your app with Firebase, you might not need to create a separate login interface. To save time, you can use its built-in login UI to sign users into your app.
                           </p>
                        </div>
                        
                    </div>

                    {/* Third Question and ans  */}
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 md:w-6/12 mx-auto mt-10 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                          How does the private route work?
                        </div>
                        <div className="collapse-content"> 
                            <p>Fisrt of all we puth that route for example "checkout" route inside of a component when this "checkout" route is requested the component it is inside of will check some condition if it is the authentic user or not if it is then it will allow the user to "checkout" otherwise it will navigate us to login page</p>
                        </div>
                        
                    </div>
    
                    {/* Fourth qustion and ans  */}
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 md:w-6/12 mx-auto mt-10 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                         What is Node? How does Node work?
                        </div>
                        <div className="collapse-content"> 
                            <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

                            <br />

                            <p>
                                <strong>Working of Node.js :</strong> 
                                Node.js basically works on two concept
                                <li>
                                    Asynchronous
                               </li>

                                <li>
                                   Non-blocking I/O
                                </li>
                            </p>

                            <br />

                            <p> <strong>Asynchronous: </strong> Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.</p>

                            <br />

                            <p> <strong>Non-blocking I/o: </strong> Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.</p>
                        
                        </div>
                        
                    </div>
    
                    </div>
             </div>
    );
};

export default FAQ;