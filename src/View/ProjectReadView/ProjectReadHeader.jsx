import React from 'react'

const ProjectReadHeader = () => {
  return (
    <div className='container'>
      <div className='flex xl:justify-center pt-8 md:pt-10 lg:pt-14 xl:pt-16 bg-slate-400'>
        <div className='xl:max-w-[930px] bg-red-300 flex flex-col gap-4 md:gap-2 lg:gap-4 lg:w-full'>
          <div className='flex flex-col-reverse gap-2 items-center xl:text-[16px]  xl:gap-6 font-bold lg:flex md:flex-row md:gap-3 lg:gap-4 '>
            <hr className="flex h-1  bg-[#1D2130]  border-[#1D2130]  w-16 " />
            <h2 className='uppercase'>our project</h2>
          </div>

          <div className='xl:max-w-[832px] xl:pl-[85px] gap-4 flex flex-col xl:gap-4 md:pl-0 lg:max-w-full'>
            <div className='flex flex-col gap-5 md:gap-4 lg:gap-5 xl:gap-8'>
              <h1 className='text-[#1D2130] text-[32px] xl:text-[56px] font-Roboto font-extrabold md:text-[46px] lg:text-[50px]'>Mission Smile 1k: Outdoor charity outreach</h1>
              <div className='flex flex-col gap-3 xl:gap-7 md:gap-3 lg:gap-5'>

                <p className='xl:text-[15px] leading-5 text-[12px] md:text-[13px] text-[#525560] font-Roboto'>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>

                <div className='flex flex-col gap-1 xl:gap-2'>
                  <p className='xl:text-[15px] text-[12px] leading-5 md:text-[13px] text-[#525560] font-Roboto'>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</p>
                  <p className='xl:text-[15px] text-[12px] leading-5 md:text-[13px] text-[#525560] font-Roboto'>Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>
                </div>
                <p className='xl:text-[15px] text-[12px] leading-5 text-[#525560] md:text-[13px] font-Roboto'>Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</p>
              </div>
              <div className='max-w-full flex mx-auto'>
                <img src="assets/images/projectimg.png" alt="project-image" />
              </div>
            </div>

            <div className='max-w-full flex flex-col gap-1 xl:gap-4 md:gap-2 lg:gap-3 '>
              <div className='max-w-[413px]'>
                <h2 className='xl:text-[48px] text-[32px] md:text-[40px] lg:text-[42px] font-Roboto font-extrabold text-[#1D2130]'>Some cool heading</h2>
              </div>

              <div className='max-w-full flex flex-col gap-4 md:gap-2 lg:gap-3'>
                <p className='xl:text-[15px] text-[12px] text-[#525560] font-Roboto md:text-[13px]'>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et quisque. Semper commodo viverra donec magna egestas nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus suscipit sagittis, ultrices ut dui.</p>
                <ul className='list-disc pl-7 xl:text-[15px] md:text-[13px] text-[12px] font-Roboto font-extrabold'>
                  <li>Posuere sed pulvinar enim faucibus justo, cursus. </li>
                  <li>In diam facilisi at sit convallis blandit blandit in.</li>
                  <li>Maecenas odio orci lectus urna ante consequat erat non morbi.</li>
                </ul>

                <p className='xl:text-[15px] text-[#525560] font-Roboto md:text-[13px] text-[12px]'>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectReadHeader