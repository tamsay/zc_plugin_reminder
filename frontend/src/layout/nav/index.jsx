import React from 'react'
import Sortbar from './sortbar'
import Searchbar from './searchbar'
import Button from './button'

const Nav = () => {
	return (
		<nav className="space-y-1 md:space-y-0">
			<div className="flex justify-between py-5 md:w-4/6 items-center">
				<p className="font-bold text-2xl">Deadlines</p>
				<div className="hidden xl:relative xl:left-48 lg:left-40 md:flex md:left-0 flex-col space-y-2 sm:space-y-0 sm:flex-row">
					<div className="sm:mx-1 lg:block">
						<Searchbar />
					</div>
					<div className="md:mx-5 md:flex-grow-0">
						<Sortbar />
					</div>
				</div>
				<div className="xl:relative xl:left-96 xl:top-0 lg:top-6 md:absolute md:right-6 md:top-5 md:left-9/12 xl:right-5">
					<Button />
				</div>
			</div>
			<div className="md:hidden flex flex-col space-y-2 sm:space-y-0 sm:flex-row">
				<div className="sm:mx-1 lg:block">
					<Searchbar />
				</div>
				<div className="md:mx-5 md:flex-grow-0">
					<Sortbar />
				</div>
			</div>
		</nav>
	)
}

export default Nav
