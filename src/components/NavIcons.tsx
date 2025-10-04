"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import CartModal from "./CartModal"
import { useWixClient } from "@/hooks/useWixClient"
import Cookies from "js-cookie"
import { useCartStore } from "@/hooks/useCartStore"

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();
  const wixClient = useWixClient();

  const isLoggedIn = wixClient.auth.loggedIn();


  // TEMPORARY
  // const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
    setIsProfileOpen((prev) => !prev);
  }}

  // AUTH WITH WIX-MANAGED AUTH

  // const wixClient = useWixClient();
  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     "http://localhost:3000"
  //   );
  //   console.log(loginRequestData);
  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
  //   const {authUrl} = await wixClient.auth.getAuthUrl(loginRequestData);
  //   window.location.href = authUrl;
  // };

  console.log(pathName)
  const handleLogout = async () => {
    setIsloading(true);
    Cookies.remove('refreshToken');
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    router.push(logoutUrl);
    setIsloading(false);
    setIsProfileOpen(false);
  }

  
    const { cart, counter, getCart } = useCartStore();

    useEffect(() => {
        getCart(wixClient);
     }, [wixClient, getCart]);

    console.log(cart);
    
    return (
      <div className="flex items-center gap-4 xl:gap-6 relative">
        <Image
          src="/profile.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={handleProfile}         
        />
        {isProfileOpen && (
          <div className="absolute p-4 rounded-md  bg-white top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            <Link href="/">Profile</Link>
            <div className="mt-2 cursor-pointer" onClick={handleLogout}>{isLoading ? "Logging Out" : "Logout"}</div>
          </div>
        )}
        <Image
          src="/notification.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
          <Image
            src="/cart.png"
            alt=""
            width={22}
            height={22}             
          />
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">{counter}</div>
        </div>
        {isCartOpen && <CartModal />}
      </div>
    );
}

export default NavIcons