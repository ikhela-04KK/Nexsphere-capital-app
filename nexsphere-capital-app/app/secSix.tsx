

export default function SecSix() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                <div className="grid grid-cols-10 grid-rows-10 gap-2 bg-white">
                    <h1 className="col-span-8 row-span-2 col-start-2 row-start-2 font-bold text-6xl text-custom-green mb-10">
                        {" "}
                        Wed love to hear from you
                    </h1>
                    <div className=" col-span-8 row-span-2 col-start-2 row-start-4 ">
                        <p className="font-light">Email Address</p>
                        <p className="text-custom-green">+1 (123) 456-7890</p>
                    </div>

                    <div className="col-span-8 row-span-2 col-start-2 row-start-6">
                        <p className="font-light">Headquarters Address</p>
                        <p className="text-custom-green">
                            123 Main Street, Suite 456, Cityville, 12345
                        </p>
                    </div>

                    <div className="col-span-8 row-span-2 col-start-2 row-start-8">
                        <p className="font-light">Business Hours</p>
                        <p className="text-custom-green">Monday-Friday</p>
                        <p className="text-custom-green">9:00 AM to 5:00 PM</p>
                    </div>
                </div>

                <div className="bg-[#f0f1ec] dark:bg-gray-900 text-custom-green p-90">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
                        <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-left text-gray-900 dark:text-white ">
                            Contact Us
                        </h2>
                        <form action="#" className="space-y-8">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Full name
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="name@flowbite.com"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <label
                                    htmlFor="subject"
                                    className="w-5/12 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Email adress
                                    <input
                                        type="text"
                                        id="subject"
                                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        placeholder="Let us know how we can help you"
                                        required
                                    />
                                </label>
                                <label
                                    htmlFor="subject"
                                    className="w-5/12 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Phone number
                                    <input
                                        type="text"
                                        id="subject"
                                        className=" block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        placeholder="Let us know how we can help you"
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Company name
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-1/2 block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-custom-green hover:bg-blue-700 rounded"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}