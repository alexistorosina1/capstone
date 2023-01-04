import Login from "./Login"
import { Link } from "react-router-dom";
import { useState } from "react";
const quotes = [
    {
        quote:
        "The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion. There is no magic pill.",
        cite: "- Arnold Schwarzenegger, seven-time Mr. Olympia"
    },
    {
        quote: "I have nothing in common with lazy people who blame others for their lack of success. Great things come from hard work and perseverance. No excuses.",
        cite: "- Kobe Bryant, 5-time NBA Championship winner"
    }, 
    {
        quote: "You shall gain, but you shall pay with sweat, blood, and vomit.",
        cite: "- Pavel Tsatsouline"
    },
    {
        quote: "Success is usually the culmination of controlling failure.",
        cite: "- Sylvester Stallone"
    },
    {
        quote: "Don’t be afraid of failure. This is the way to succeed.",
        cite: "- LeBron James, three-time NBA Championship winner"
    },
    {
        quote: "You dream. You plan. You reach. There will be obstacles. There will be doubters. There will be mistakes. But with hard work, with belief, with confidence and trust in yourself and those around you, there are no limits.",
        cite: "- Michael Phelps, swimmer and 18-time Olympic gold medalist"
    },
    {
        quote: "Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out. Exercise is king and nutrition is queen. Together you have a kingdom.",
        cite: `- Jack LaLanne, bodybuilder known as the “Godfather of Fitness”`
    },
    {
        quote: "I am the greatest, I said that even before I knew I was.",
        cite: "- Muhammad Ali, champion boxer"
    },
    {
        quote: "If you take time to realize what your dream is and what you really want in life — no matter what it is, whether it’s sports or in other fields — you have to realize that there is always work to do, and you want to be the hardest working person in whatever you do, and you put yourself in a position to be successful. And you have to have a passion about what you do.",
        cite: "- Stephen Curry, 3-time NBA Championship winner"
    },
    {
        quote: "You miss one hundred percent of the shots you don't take.",
        cite: "- Wayne Gretzky, 4-time Stanley Cup winner"
    }
]
function Home ({ user, onLogin }){
  const [index, setIndex] = useState();

  const generate = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setIndex(index);
  };

  return (
    <div class="main-container">
      {/* {user ? 
        <h1 class="text-right text-sky-400">Welcome back {user.username}</h1>
       : 
        <></>
      } */}
      <div >
        {user ? 
          <span class="quotes-container">
            <p class="text-xl italic font-semibold text-white dark:text-white">
              {quotes[index] && quotes[index].quote}
            </p>
            <p class="text-xl italic font-semibold text-white dark:text-white">
              {quotes[index] && quotes[index].cite}
            </p>
            <button class="btn btn-blue" onClick={generate}>
              Generate
            </button>
            {/* <h1 class="text-right text-sky-400">Welcome back {user.username}</h1>  */}
          </span>
         : 
        <div>
          <Login onLogin={onLogin} />
        </div>
        }
        {/* <Link to="/signup">Create an account</Link> */}
      </div>
    </div>
  );
}
export default Home;