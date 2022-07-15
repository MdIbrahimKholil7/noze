import React from 'react';
import logo from '../../assets/logo.svg'
import Order from '../Order/Order';
import Overview from '../Overview/Overview';
const Header = ({ children }) => {

    return (
        <div>
            <div class="drawer">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col relative">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar bg-base-100 border-solid border-b-[0.5px]  border-[#654a9b] ">
                        
                        <div class="flex-1 px-2 mx-2">
                            <img src={logo} alt="logoImage" />
                            <div className='ml-5 lg:block hidden'>
                                <Overview/>
                            </div>
                        </div>
                        <div class="flex-none hidden lg:block">
                            {/* <ul class="menu menu-horizontal">
                                <!-- Navbar menu content here -->
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>
                            </ul> */}
                            <div>
                                <Order/>
                            </div>
                        </div>
                        <div class="flex-none lg:hidden">
                            <div>
                                <Overview/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                    {/* Content */}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Header;