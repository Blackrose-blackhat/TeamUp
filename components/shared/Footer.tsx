import Image from "next/image"


const Footer = () => {
  return (
    
<footer className="  shadow bg-gray-900 md:m-0 mb-20 w-full -z-10 ">
    <div className="w-full max-w-screen-xl mx-auto py-4">
        <div className="sm:flex sm:items-center sm:justify-between justify-between flex flex-row items-center align-middle">
           
            <ul className="flex flex-row  w-full items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer