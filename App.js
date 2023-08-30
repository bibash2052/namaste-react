import React from "react";
import ReactDOM from "react-dom/client";
import image from './food.jpeg';
import data from './data.json';

const ApplicationName = "Food App"
const Header = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-10 p-4">
                <a href="#" className="flex items-center">
                    <img src={image} className="h-10 mr-3" alt="Food Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{ApplicationName}</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                               aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const Card = (props) => {
    const {resData} = props;
    return (
        <div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-3 rounded-t-lg" src={resData.info.image.url} alt="product image"/>
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <div className="flex justify-between items-center">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{resData.info.name}</h5>
                        <div className="flex">
                        <span
                            className="h-8 flex justify-center items-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{resData.info.rating.aggregate_rating}
                            <svg className="bg-transparent w-4 h-4 mx-2 text-yellow-300 mr-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </span>
                        </div>
                    </div>
                </a>
                <div className='flex text-gray-300 text-opacity-50 my-1'>{resData.info.locality.address}</div>
                <div className="inline-flex flex-wrap">
                    {resData.info.cuisine.map(c =>
                        <a href={c.url} target={"_blank"}>
                            <div
                                className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
                                <div
                                    className="flex-initial w-auto leading-none text-xs font-normal bg-transparent">{c.name}</div>
                            </div>
                        </a>
                    )

                    }
                </div>
                <div className="flex items-center justify-between my-5">
                    <span className="text-xl font-light text-gray-300 dark:text-white">{resData.info.cft.text}</span>
                    <a href="#"
                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                        to cart</a>
                </div>
            </div>
        </div>
    )
}

const Search = () => {
    return (
        <form className="flex items-center">
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <input type="text"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search your favourite food" required/>
            </div>
            <button type="submit"
                    className="inline-flex items-center py-3.5 px-4 ml-4 mr-8 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
            </button>
        </form>
    );
}
const Body = () => {
    return (
        <div className="w-full my-4">
            <div className="ml-4 mr-4w-full w-[100%] ">
                <Search/>
            </div>
            <div className="grid gap-4 grid-cols-3 h-fit pl-10 pr-10 my-5 mx-4">
                {data.sections.SECTION_SEARCH_RESULT.map(d => <Card resData={d}/>)}
            </div>
        </div>
    )
}


const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0">
                        <img src={image} className="h-8 mr-3 rounded-full" alt="Food App Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{ApplicationName}</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Careers</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                    href="#" className="hover:underline">{ApplicationName}™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}
const AppLayout = () => {
    return (
        <div className="app">
            {/* {Header()} */}
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
