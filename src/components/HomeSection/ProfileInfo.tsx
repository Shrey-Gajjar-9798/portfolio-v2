import React from 'react'

const ProfileInfo = () => {
    return (
        <div className='flex flex-row items-center justify-between px-16'>
            {/*  Header section */}
            <div className="font-major-mono">
                <p className='text-9xl'>
                    WEB<span className='text-[#4dbbbb]'>3</span>
                </p>
                <p className='text-5xl ml-26'>
                    developer
                </p>
            </div>
            <div className="font-major-mono w-[450px]" >
                <p className='text-4xl break-words leading-14'>
                    Transforming Ideas into Decentralized Web Applications.
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo