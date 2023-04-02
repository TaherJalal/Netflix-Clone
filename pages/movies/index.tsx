import React, {useState ,Fragment} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Nav from '../Components/Nav'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function index() {
  const {isLoading , error , data} = useQuery({
    queryKey: ['movieIndexData'],
    queryFn: () => axios.get("http://localhost:3000/api/movie")
  })

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message

return (
  <>
    <Nav />
    <div>
<div className=' dark:bg-zinc-950 dark:text-white bg-white text-black pt-5 pb-5'>
<Menu as="div" className="relative inline-block text-left left-[90%]">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
</div>

    </div>
    <div className='font-montserrat pt-8 pl-20 dark:bg-zinc-950 dark:text-white bg-white text-black grid gap-4 grid-cols-5 grid-rows-4'>
    {
      data?.data.results.map((movie:any) => (
        <div className='relative'>
          <Image src={"https://image.tmdb.org/t/p/original" + movie.poster_path == null ? "/next.svg" : "https://image.tmdb.org/t/p/original" + movie.poster_path} width={224} height={224} alt="none" priority={true} />

          <div className='w-56 flex flex-col justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-60'>
              <h5 className='text-sm'>{movie.original_title}</h5>
              <p className='text-xs'>{movie.overview}</p>
          </div>

        </div>
      ))
    }

    </div>
    </>
  )
}

export default index