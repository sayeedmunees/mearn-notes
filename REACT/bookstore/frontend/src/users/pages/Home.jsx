import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <header className="flex justify-center items-center">
        <div id="main" className="flex justify-center items-center w-full">
          <div className="md:grid grid-cols-3">
            <div></div>
            <div className="text-white text-center flex flex-col justify-center items-center ">
              <h3 className="text-3xl font-semibold tracking-wider lg:text-5xl">Wonderful Gifts</h3>
              <p className="font-semibold tracking-wider">Give your family and friends a book</p>
              <div className="flex mt-10 w-full bg-white rounded-3xl items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Search Books"
                  className=" placeholder-gray-600 w-full focus:outline-0 text-black"
                />
                <FontAwesomeIcon
                  className="text-green-950"
                  icon={faMagnifyingGlass}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </header>

      {/* New Arrivals */}
      <section className="flex justify-center items-center flex-col md:p-10 md:px-40 p-5 my-10">
        <h2 className="text-xl text-center uppercase">New Arrivals</h2>
        <h4 className="text-3xl mb-5 text-center">
          Explore Our Latest Collections
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full my-5">
          <div className="p-3 shadow col-span-1">
            <img
              src="https://m.media-amazon.com/images/I/71XJ8xwLPpL.jpg"
              alt="Book cover"
            />
            <div className="flex flex-col justify-center items-center mt-3">
              <p>Author</p>
              <h3>Title</h3>
              <p>$Price</p>
            </div>
          </div>
          <div className="p-3 shadow col-span-1">
            <img
              src="https://m.media-amazon.com/images/I/71XJ8xwLPpL.jpg"
              alt="Book cover"
            />
            <div className="flex flex-col justify-center items-center mt-3">
              <p>Author</p>
              <h3>Title</h3>
              <p>$Price</p>
            </div>
          </div>
          <div className="p-3 shadow col-span-1">
            <img
              src="https://m.media-amazon.com/images/I/71XJ8xwLPpL.jpg"
              alt="Book cover"
            />
            <div className="flex flex-col justify-center items-center mt-3">
              <p>Author</p>
              <h3>Title</h3>
              <p>$Price</p>
            </div>
          </div>
          <div className="p-3 shadow col-span-1">
            <img
              src="https://m.media-amazon.com/images/I/71XJ8xwLPpL.jpg"
              alt="Book cover"
            />
            <div className="flex flex-col justify-center items-center mt-3">
              <p>Author</p>
              <h3>Title</h3>
              <p>$Price</p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <Link to={"/all-books"}>
            <button className="bg-green-950 border border-green-950 hover:bg-white text-white hover:text-green-950 font-semibold px-6 py-4">
              Explore More
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="flex justify-center items-center flex-col md:p-10 md:px-40 p-5 my-10">
        <div>
          <h2 className="text-xl text-center">FEATURED AUTHORS</h2>
          <h4 className="text-3xl mb-10 text-center">
            Captivates with every word
          </h4>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-start">
          <div className="flex-1">
            <p>
              Authors in a bookstore application are the visionaries behind the
              books that fill the shelves, each contributing their own unique
              voice, creativity, and perspective to the world of literature.
              Whether writing fiction, non-fiction, poetry, or educational
              works, authors bring stories, ideas, and knowledge to life in ways
              that resonate with readers of all backgrounds. Their work spans a
              wide array of genres, from thrilling mysteries and heartwarming
              romances to thought-provoking memoirs and insightful self-help
              books. Through their words, authors not only entertain and inform
              but also inspire and challenge readers to think deeply, reflect,
              and grow. In a bookstore application, authors' works become
              accessible to readers everywhere, offering a diverse and rich
              tapestry of voices and experiences, all of which contribute to the
              evolving landscape of modern literature.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              className="h-full w-full"
              src="https://www.eaglestalent.com/wp-content/uploads/2019/07/ryan-holiday.jpg"
              alt="author"
            />
          </div>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="flex justify-center items-center flex-col md:p-10 md:px-40 p-5 my-10">
        <div>
          <h2 className="text-xl text-center">TESTIMONIALS</h2>
          <h4 className="text-3xl mb-5 text-center">
            See What Others Are Saying
          </h4>

          <div className=" flex justify-center items-center text-center flex-col md:p-10 p-5">
            <img
              className="cover rounded-full"
              src="https://www.eaglestalent.com/wp-content/uploads/2019/07/ryan-holiday.jpg"
              alt="author"
              style={{ height: "200px", width: "200px" }}
            />
            <h2 className="text-2xl font-bold">Ryan Holiday</h2>
            <p className="max-w-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              illo sit debitis molestias reprehenderit voluptates obcaecati
              harum, necessitatibus optio quam distinctio perferendis ad
              deleniti quasi soluta! Vitae dolorum labore quis?
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
