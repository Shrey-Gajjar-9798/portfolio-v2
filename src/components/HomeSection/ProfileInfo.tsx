import React from 'react'

const ProfileInfo = () => {
    return (
        <div className='flex flex-row max-sm:flex-col h-[100vh] w-full  items-center justify-between max-sm:items-end max-sm:justify-end px-16'>
            {/*  Header section */}
            <div className="font-major-mono max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col max-sm:mb-3 max-sm:mr-0 max-sm:w-full">
                <p className='text-9xl max-sm:text-7xl '>
                    WEB<span className='text-[#4dbbbb]'>3</span>
                </p>
                <p className='text-5xl ml-26 max-sm:ml-0 max-sm:text-3xl mt-2 text-center'>
                    developer
                </p>
            </div>
            <div className="font-major-mono w-[450px] max-sm:w-full max-sm:text-center ">
                <p className='text-4xl max-sm:text-sm break-words max-sm:break-normal lg:leading-14 '>
                    Transforming Ideas into Decentralized Web Applications.
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo