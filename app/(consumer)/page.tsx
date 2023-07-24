import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative h-screen'>
      <Image
        className='object-cover w-full h-full'
        src='/assets/images/Landing Page.png'
        width={800}
        height={844}
        alt=''
      />
      <div className='absolute inset-0 flex mt-[20%] flex-col items-center w-full origin-top scale-75 xs:scale-100 '>
        <h1 className='pb-3 text-3xl font-bold text-center uppercase text-secondary font-bowlby'>
          Skip the line
          <br />
          at the bar
        </h1>
        <button className='px-5 py-1 text-xl rounded-lg bg-secondary text-background'>
          Login/Register
        </button>
      </div>
    </div>
  );
}
