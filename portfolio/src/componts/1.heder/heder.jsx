import React, { useState } from 'react';
import "./heder.css"; 
import { FaMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Header() {
    // تم نقل الـ useState إلى هنا ليكون داخل جسم الدالة (الحل الصحيح)
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <header>
                
                <button className="show-model" onClick={() => setShowMenu(true)}>
                    <IoMenu />
                </button>
                <nav>
                    <ul className='ul'>
                     <li><a href="">home</a></li>
                    <li><a href="">home</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">achieving</a></li>
                    <li><a href="">uses</a></li>
                </ul>
                </nav>
                {/* زر القمر (بقي كما هو) */}
                <button className="moon">
                    <FaMoon />
                </button>

                {/* منطق ظهور القائمة */}
                {showMenu && (
                     <ul className="model-border">
                        <div>
                            <li><a href="">about</a></li>
                            <button className="close" onClick={() => setShowMenu(false)}>
                                &times;
                            </button>
                        </div>
                        <hr />
                        <li><a href="">home</a></li>
                        <hr />
                        <li><a href="">home</a></li>
                        <hr />
                        <li><a href="">projects</a></li>
                        <hr />
                        <li><a href="">achieving</a></li>
                        <hr />
                        <li><a href="">uses</a></li>
                    </ul>
                )}
            </header>
        </div>
    );
}

export default Header;