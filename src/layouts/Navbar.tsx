import Logo from "../assets/Logo.png";
import yellowdot from "../assets/yellowdot.png";

const Navbar = () => {
    return (
        <div>
            <div className="bg-neutral-100">
                <div className="p-5 px-20 flex justify-between items-center">
                    <img className="w-40" src={Logo} alt="titanleaplogo" />

                    <div>
                        <ul className="flex gap-10 text-lg font-semibold text-purple-300  leading-[171.429%]">
                            <li className="cursor-pointer relative group  hover:text-primary">
                                Home
                                <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
                            </li>
                            <li className="cursor-pointer relative group hover:text-primary">
                                About Us
                                <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
                            </li>
                            <li className="cursor-pointer relative group hover:text-primary">
                                Our Work
                                <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
                            </li>
                            <li className="cursor-pointer relative group hover:text-primary">
                                Clients
                                <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
                            </li>
                            <li className="cursor-pointer relative group hover:text-primary">
                                Services
                                <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
                            </li>
                            <li className="cursor-pointer relative group hover:text-primary">
                                Contact
                                <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <button className="border-2 border-primary p-2 rounded-xl text-primary font-bold">Let&apos;s talk</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
