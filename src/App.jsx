// src/App.jsx
import './index.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import './App.css'; // Tailwind CSS is included here
import prevention from './images/prevention.jpeg'
import exer from './images/exer.jpeg'
import heal from './images/heal.jpeg'



const App = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState(0);

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Learn More section
  const [showMore, setShowMore] = useState(false);

  // Testimonial state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    "This campaign changed my life! - Akshu",
    "A great initiative for heart health awareness. - Shivani",
    "I feel more informed and motivated now. - Sonu",
    "World Heart Day (29 September) is an opportunity for everyone to stop and consider how best to use ❤️. -Prachi"
  ];

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('2024-09-29T00:00:00');
    const updateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft(difference);
      } else {
        setTimeLeft(0);
      }
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && email && date) {
      setIsFormSubmitted(true);
    }
  };

  // Format time
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // Testimonials rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <header className="w-full py-8 px-6 bg-red-600 text-white text-center">
        <button
          className="absolute top-4 right-4 px-3 py-1 bg-gray-800 text-white rounded"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <h1 className="text-4xl font-bold mb-2">Heart Health Awareness Campaign</h1>
        <p className="text-lg mb-4">Join us in making a difference for World Heart Day!</p>
        <button 
          className="bg-white text-red-600 py-2 px-6 rounded shadow-md hover:bg-gray-200 transition ease-in-out"
          onClick={() => document.getElementById('signup-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Join the Campaign
        </button>
      </header>

      {/* Countdown Timer */}
      <section className="w-full py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Countdown to World Heart Day</h2>
        <p className="text-xl">{formatTime(timeLeft)}</p>
      </section>

      {/* Importance of Heart Health */}
      <section className="w-full py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Heart Health Matters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className={`p-6 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white'} shadow-md rounded-lg flex flex-col items-center`}>
            <img src={prevention} alt="Heart icon" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Prevention</h3>
            <p className="text-center">Learn how to prevent heart disease with a healthy lifestyle.</p>
          </div>
          <div className={`p-6 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white'} shadow-md rounded-lg flex flex-col items-center`}>
            <img src={exer} alt="Exercise icon" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exercise</h3>
            <p className="text-center">Discover the benefits of regular physical activity for heart health.</p>
          </div>
          <div className={`p-6 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white'} shadow-md rounded-lg flex flex-col items-center`}>
            <img src={heal} alt="Nutrition icon" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nutrition</h3>
            <p className="text-center">Find out how a balanced diet can support a healthy heart.</p>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="w-full py-12 px-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">Learn More</h2>
        <div class="flex justify-center items-center ">
        <button
          className="  bg-red-600 text-white py-2 px-4 rounded shadow-md hover:bg-red-700 transition ease-in-out"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        </div>
        {showMore && (
          <div className=" flex justify-center items-center text-center mt-4 text-left prose lg:prose-xl">
            <p>Understanding heart health is crucial for preventing cardiovascular diseases. Regular check-ups, a healthy diet, and exercise can significantly reduce the risk of heart disease. Engaging in community activities and spreading awareness about heart health can also contribute to a healthier society.</p>
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section className={`${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}w-full py-12 px-6 bg-gray-100 dark:bg-gray-800`} >
        <h2 className="text-3xl font-semibold mb-4 text-center">What People Are Saying</h2>
        <div className="text-center">
          <p className="italic text-lg">{testimonials[currentTestimonial]}</p>
        </div>
      </section>

      {/* Sign-Up Form */}
      <section id="signup-form" className="`w-full py-12 px-6 max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">Sign Up for the Campaign</h2>
        {isFormSubmitted && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">
            <p>Thank you for signing up! You will receive a confirmation email shortly.</p>
          </div>
        )}
        <form onSubmit={handleFormSubmit} className={`${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} p-6 shadow-md rounded-lg`}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-left text-gray-700">Preferred Date</label>
            <input 
              type="date" 
              id="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required 
            />
          </div>
          <div className="mb-0 items-center">
          <button 
            type="submit" 
            className="bg-red-600 text-white py-2 px-6 rounded hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out ml-24 "
          >
            Submit
          </button>
          </div>
        </form>
      </section>

      {/* Scroll-to-Top Button */}
      <button 
        className="fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-700 transition ease-in-out"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        &uarr;
      </button>

      {/* Footer */}
      <footer className="bg-red-600 w-full py-4 text-white text-center mt-8">
        <p>&copy; 2024 Heart Health Awareness Campaign. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
