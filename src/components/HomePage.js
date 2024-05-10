// HomePage.js
import React from 'react';
import {motion, useAnimation} from 'framer-motion'; // for animations
import { useInView } from 'react-intersection-observer';



// Import any additional components you might create for these sections.
const episodes = [
    {
        title: "Finding Your Path",
        summary: "We explore the journey of finding one’s path in life with guest speaker John Doe.",
        image: "/cloud.jpg",
        link: "/episodes/finding-your-path",
    },
    {
        title: "Mindful Habits",
        summary: "Learn about incorporating mindfulness into your daily routine for better focus.",
        image: "/cloud.jpg",
        link: "/episodes/mindful-habits",
    },
    {
        title: "Mindful Habits",
        summary: "Learn about incorporating mindfulness into your daily routine for better focus.",
        image: "/cloud.jpg",
        link: "/episodes/mindful-habits",
    },
    // Add more episodes here...
];

const hosts = [
    {
        name: "John Doe",
        role: "Founder & Host",
        bio: "John is a self-improvement enthusiast with over a decade of experience in coaching and personal development.",
        image: "/cloud.jpg", // Replace with the actual image path
    },
    {
        name: "Jane Smith",
        role: "Co-Host",
        bio: "With a background in psychology, Jane brings a wealth of knowledge on behavioral change and habit formation.",
        image: "/cloud.jpg", // Replace with the actual image path
    },
    // Add more hosts as necessary
];

const eShopVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.6 }
    },
};

const HomePage = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 dark:bg-gray-800">
            <div className="relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/cloud.jpg")'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-600 opacity-75"></div>

                {/* Hero Section */}
                <section className="text-center pt-10 pb-8 relative z-10">
                    <motion.h1 initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}}
                               transition={{duration: 0.5}} className="text-4xl md:text-5xl font-bold text-white">Head
                        in the Clouds
                    </motion.h1>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2, duration: 0.5}}
                              className="mt-3 text-white text-lg md:text-xl">A journey through self-discovery and
                        personal growth.
                    </motion.p>
                    <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                   className="mt-5 bg-white hover:bg-gray-200 text-blue-700 font-bold py-2 px-4 rounded shadow-lg transition ease-in-out duration-150"
                                   aria-label="Listen Now">Listen Now
                    </motion.button>
                </section>

                {/* Featured Episodes */}
                <motion.section initial="hidden" animate="visible" variants={{
                    hidden: {opacity: 0, scale: 0.8},
                    visible: {opacity: 1, scale: 1, transition: {delayChildren: 0.3, staggerChildren: 0.2}}
                }} className="container mx-auto p-8 relative z-10">
                    <h2 className="text-3xl font-semibold mb-5 text-white">Featured Episodes</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {episodes.map((episode, index) => (
                            <motion.div key={index}
                                        variants={{hidden: {y: 20, opacity: 0}, visible: {y: 0, opacity: 1}}}
                                        className="card bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <img src={episode.image} alt={episode.title} className="w-full h-48 object-cover"/>
                                <div className="p-5">
                                    <h3 className="text-2xl font-bold mb-2">{episode.title}</h3>
                                    <p className="text-gray-700 mb-4">{episode.summary}</p>
                                    <motion.a href={episode.link}
                                              whileHover={{scale: 1.05}}
                                              whileTap={{scale: 0.95}}
                                              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition ease-in-out duration-300"
                                    >Listen now
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>

            {/* About the Podcast */}
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}>

                <section className="py-8 px-4 bg-purple-50 text-gray-800">
                    <div className="container mx-auto p-8">
                        <h2 className="text-3xl font-semibold mb-5 text-center">About Head in the Clouds</h2>
                        <p className="text-lg text-center mb-4">
                            Discover self-improvement with "Head in the Clouds," a podcast dedicated to enhancing your
                            mindset, habits, and productivity. Join us on this journey of growth and exploration.
                        </p>
                        <div className="flex justify-center">
                            <a href="/about"
                               className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn
                                More</a>
                        </div>
                    </div>
                </section>


                {/* Meet the Producers */}
                <section className="py-8 px-4 bg-purple-50 text-gray-800">
                    <div className="container mx-auto p-8">
                        <h2 className="text-3xl font-semibold mb-5 text-center">Meet the Producers</h2>
                        <div className="flex flex-wrap justify-center items-stretch">
                            {hosts.map((host, index) => (
                                <div key={index}
                                         className="mb-4 p-4 md:w-2/3 lg:w-1/2 xl:w-1/2 rounded-lg shadow-lg bg-white mx-2">
                                        <div className="flex flex-col items-center">
                                            <img src={host.image} alt={host.name} className="w-24 h-24 rounded-full"/>
                                            <div className="text-center mt-2">
                                                <h3 className="text-xl font-semibold">{host.name}</h3>
                                                <p className="text-blue-600">{host.role}</p>
                                                <p className="text-gray-600 mt-2">{host.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                </section>


                {/* eShop Section */}
                <section ref={ref} className="py-8 px-4 bg-purple-50 text-gray-800">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={eShopVariants}
                        className="container mx-auto px-6 md:px-10"
                    >
                        <div className="container mx-auto px-6 md:px-10">
                            <div className="text-center">
                                <h2 className="text-3xl font-semibold mb-2">Visit Our eShop</h2>
                                <p className="text-gray-600 mb-6">Discover our exclusive collection of resources and
                                    merchandise to support your journey towards personal growth.</p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                                {/* Product Card 1 */}
                                <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                                    <div
                                        className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                        <img src="/cloud.jpg" alt="Product Name"
                                             className="w-full h-48 object-cover object-center"/>
                                        <div className="p-5">
                                            <h3 className="text-xl font-semibold mb-3">Mindfulness Guide</h3>
                                            <p className="text-gray-700 mb-4">A comprehensive guide to integrating
                                                mindfulness into your daily routine.</p>
                                            <a href="/eshop/mindfulness-guide"
                                               className="text-blue-600 hover:text-blue-800 transition duration-300">View
                                                Product</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Product Card 2 */}
                                <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                                    <div
                                        className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                        <img src="/cloud.jpg" alt="Product Name"
                                             className="w-full h-48 object-cover object-center"/>
                                        <div className="p-5">
                                            <h3 className="text-xl font-semibold mb-3">Productivity Planner</h3>
                                            <p className="text-gray-700 mb-4">Elevate your productivity with our
                                                specially
                                                designed planner.</p>
                                            <a href="/eshop/productivity-planner"
                                               className="text-blue-600 hover:text-blue-800 transition duration-300">View
                                                Product</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Product Card 3 */}
                                <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                                    <div
                                        className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                        <img src="/cloud.jpg" alt="Product Name"
                                             className="w-full h-48 object-cover object-center"/>
                                        <div className="p-5">
                                            <h3 className="text-xl font-semibold mb-3">Productivity Planner</h3>
                                            <p className="text-gray-700 mb-4">Elevate your productivity with our
                                                specially
                                                designed planner.</p>
                                            <a href="/eshop/productivity-planner"
                                               className="text-blue-600 hover:text-blue-800 transition duration-300">View
                                                Product</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <a href="/eshop"
                                   className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore
                                    the eShop</a>
                            </div>
                        </div>
                    </motion.div>
                </section>


                {/* Subscribe Section */}
                <section className="text-center bg-blue-50 text-gray-800 py-8 px-4">
                    <h2 className="text-3xl font-semibold">Stay Updated</h2>
                    <p className="mt-3 mb-5">Subscribe to our newsletter for the latest episodes and exclusive
                        content.</p>
                    <form className="flex justify-center">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded-l"/>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r">
                            Subscribe
                        </button>
                    </form>
                </section>


                {/* Footer */}
                <footer className="bg-purple-900 p-4 text-white">

                    <div className="container mx-auto text-center">
                        <p>&copy; 2024 Head in the Clouds</p>
                        <p className="text-sm mt-2">Designed by Ioannis Pegiadis</p>
                    </div>
                </footer>
            </motion.div>
        </div>
    );
};

export default HomePage;
