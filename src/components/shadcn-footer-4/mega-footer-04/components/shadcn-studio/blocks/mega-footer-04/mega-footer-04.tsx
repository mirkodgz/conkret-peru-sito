import {
  ShieldCheckIcon,
  MapPinIcon,
  PhoneCallIcon,
  MailIcon,
  TruckIcon,
  WalletIcon,
  RefreshCcwIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import Logo from '@/components/shadcn-studio/logo'

const MegaFooter = () => {
  return (
    <footer>
      <div className='mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div className='space-y-6 p-6 sm:border-e'>
          <div className='item-center flex justify-center'>
            <Avatar className='size-13'>
              <AvatarFallback className='bg-muted'>
                <TruckIcon className='size-7' />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <h6 className='text-xl font-semibold'>Free delivery</h6>
            <p className='text-center'>
              Get your orders delivered to your doorstep for free. Shop with us and enjoy Your hassle-free shipping on
              every purchase
            </p>
          </div>
        </div>
        <div className='space-y-6 p-6 max-sm:border-t md:border-e'>
          <div className='item-center flex justify-center'>
            <Avatar className='size-13'>
              <AvatarFallback className='bg-muted'>
                <WalletIcon className='size-7' />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <h6 className='text-xl font-semibold'>Online Payment</h6>
            <p className='text-center'>
              Experience hassle-free online payments with secure and convenient options. Pay quickly and effortlessly
              with your method
            </p>
          </div>
        </div>
        <div className='space-y-6 p-6 max-md:border-t sm:max-md:col-span-2'>
          <div className='item-center flex justify-center'>
            <Avatar className='size-13'>
              <AvatarFallback className='bg-muted'>
                <RefreshCcwIcon className='size-7' />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <h6 className='text-xl font-semibold'>Easy Return</h6>
            <p className='text-center'>
              Enjoy easy returns within 30 days of purchase. Use our prepaid label or visit any store for a quick refund
              or exchange!
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-4 lg:px-8'>
        <div className='flex flex-col gap-8'>
          <a href='#'>
            <Logo className='gap-3' />
          </a>
          <div className='space-y-3'>
            <div className='flex items-start gap-2'>
              <MapPinIcon className='size-5 shrink-0' />
              <span>Shop 009A, Level 4, Block A Demo Park, Ottawa</span>
            </div>
            <div className='flex items-center gap-2'>
              <PhoneCallIcon className='size-5 shrink-0' />
              <span>+1-613-598-6981</span>
            </div>
            <div className='flex items-center gap-2'>
              <MailIcon className='size-5 shrink-0' />
              <span>johndoe@gmail.com</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-xl font-semibold'>My Account</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>My Profile</a>
            </li>
            <li>
              <a href='#'>My Order History</a>
            </li>
            <li>
              <a href='#'>Order Tracking</a>
            </li>
            <li>
              <a href='#'>Shopping Cart</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-xl font-semibold'>Shop Departments</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Computer & Accessories</a>
            </li>
            <li>
              <a href='#'>Smartphones & Tablets</a>
            </li>
            <li>
              <a href='#'>TV, Video & Audio</a>
            </li>
            <li>
              <a href='#'>Cameras, Photo & Video</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-xl font-semibold'>Download App</div>
          <div className='flex flex-col items-center gap-6'>
            <Button asChild className='rounded-sm bg-black px-6 py-3 hover:bg-black'>
              <a href='#' className='flex h-16 w-full max-w-87 items-center gap-4'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/apple-icon.png'
                  className='size-8.5 invert'
                  alt='App Store'
                />
                <div>
                  <div className='text-xs font-normal text-white'>Download on the</div>
                  <div className='text-base font-medium text-white'>App Store</div>
                </div>
              </a>
            </Button>
            <Button asChild className='rounded-sm bg-black px-6 py-3 hover:bg-black'>
              <a href='#' className='flex h-16 w-full max-w-87 items-center gap-4'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-play-icon.png'
                  className='size-7.5'
                  alt='Google Play Store'
                />
                <div>
                  <div className='text-xs font-normal text-white'>Download on the</div>
                  <div className='text-base font-medium text-white'>Google Play</div>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Separator />
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-6 sm:px-6 lg:px-8'>
        <Badge variant='outline' className='text-base font-normal'>
          <ShieldCheckIcon className='!size-4.5 text-green-600' /> Secure Payment
        </Badge>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/lemon-squeezy.png'
          alt='Lemon Squeezy'
          className='h-6'
        />
        <img src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png' alt='Visa' className='h-5' />
        <img src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal.png' alt='Paypal' className='h-5' />
        <img src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png' alt='Mastercard' className='h-5' />
      </div>
      <Separator />
      <div className='mx-auto flex max-w-7xl justify-center px-4 py-6 sm:px-6 lg:px-8'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`} <a href='#'>shadcn/studio</a>, Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  )
}

export default MegaFooter
