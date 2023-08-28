import image from '../assets/Image.jpg'
import linechart from '../assets/linechart.jpg'

function XLComponents() {
  const Array = [{}, {}, {}]
  const cardArr = [{}, {}]
  return (
    <>
      <div className='max-w-5xl mx-auto flex flex-row justify-center pb-24'>
        <div className='m-auto space-y-6'>
          <div className='text-5xl font-poppins font-semibold leading-normal'>
            Create the next generation crypto exchange website
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-3 focus:outline-none mr-5"
            />
            <button className="text-white bg-primary p-6 py-3 rounded hover:bg-black focus:outline-none font-medium underline">
              Get Started
            </button>
          </div>

        </div>

        <div className="w-full">
          {/* Image */}
          <img src={image} className="w-full h-full object-contain" alt="React logo" />
        </div>
      </div>



      <div className='flex max-w-5xl mx-auto justify-between overflow-visible pb-24' >
        {Array.map(() => {
          return (
            <>
              <div className="flex flex-col space-y-4 border-2 rounded-md shadow-xl p-10">
                <h2 className='font-poppins font-semibold'>Trending</h2>
                <div className="flex flex-row space-x-3">
                  
                  <h2 className="">1.</h2>
                  <img src='https://cdn.animaapp.com/projects/624bf82149c7baaee137f21d/releases/624c0e843d84adb832e1dcaf/img/bitcoin-icon@2x.png'
                    alt="Bitcoin"
                    className='w-6 h-6' />
                  <p className='font-semibold font-poppins'>Bitcoins</p>
                  <p className=' font-poppins font-light'>BTC</p>
                  <p className='text-green'>+1.41%</p>
                </div>

                <div className="flex flex-row space-x-3">
                  <h2 className="">1.</h2>
                  <img src='https://cdn.animaapp.com/projects/624bf82149c7baaee137f21d/releases/624c0e843d84adb832e1dcaf/img/bitcoin-icon@2x.png'
                    alt="Bitcoin"
                    className='w-6 h-6' />
                  <p className='font-semibold font-poppins'>Bitcoins</p>
                  <p className=' font-poppins font-light'>BTC</p>
                  <p className='text-red'>-1.41%</p>
                </div>

                <div className="flex flex-row space-x-3">
                  <h2 className="">1.</h2>
                  <img src='https://cdn.animaapp.com/projects/624bf82149c7baaee137f21d/releases/624c0e843d84adb832e1dcaf/img/bitcoin-icon@2x.png'
                    alt="Bitcoin"
                    className='w-6 h-6' />
                  <p className='font-semibold font-poppins'>Bitcoins</p>
                  <p className=' font-poppins font-light'>BTC</p>
                  <p className='text-green'>+1.41%</p>
                </div>
              </div>

            </>
          )
        })}


      </div>


      <div className='max-w-5xl mx-auto space-y-10 pb-24'>
        <div className='font-poppins font-semibold text-4xl'>Market Trends</div>
        <div class="flex flex-col justify-center items-start flex-shrink-0 py-1 overflow-visible">
          <table class="w-full border-collapse">
            <thead>
              <tr class="font-poppins font-normal">
                <th class="p-6 pb-8 font-poppins text-left font-normal text-grey">Name</th>
                <th class="p-6 pb-8 font-poppins text-left font-normal text-grey">Last Price</th>
                <th class="p-6 pb-8 font-poppins text-left font-normal text-grey">Change</th>
                <th class="p-6 pb-8 hidden lg:table-cell font-poppins text-left font-normal text-grey">Chart</th>
                <th class="p-6 pb-8 hidden lg:table-cell font-poppins text-left font-normal text-grey">Trade</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="p-6">
                  <div className="flex">
                    <img src='https://cdn.animaapp.com/projects/624bf82149c7baaee137f21d/releases/624c0e843d84adb832e1dcaf/img/bitcoin-icon@2x.png'
                      alt="Bitcoin"
                      className='w-10 h-10 mr-2' />
                    <p className='font-semibold pt-3 font-poppins md:pr-1'>Bitcoin</p>
                    <p className='md:pr-20 pt-3'>BTC</p>

                  </div>
                </td>
                <td class="px-2 pb-4">$56,623.54</td>
                <td class="p-6 text-green pb-4">+1.41%</td>
                <td class="px-2 pb-4 hidden lg:table-cell">
                  <a href="https://react.dev" target="_blank">
                    <img src={linechart} className="logo react" alt="React logo" />
                  </a>
                </td>
                <td class="px-2 pb-4 hidden lg:table-cell"><button className="text-white bg-primary p-6 py-2 rounded hover:bg-black focus:outline-none font-medium underline">Trade</button></td>
              </tr>


              <tr class="bg-gray-100">
                <td class="p-6">
                  <div className="flex">
                    <img src='https://cdn.animaapp.com/projects/624bf82149c7baaee137f21d/releases/624c0e843d84adb832e1dcaf/img/bitcoin-icon@2x.png'
                      alt="Bitcoin"
                      className='w-10 h-10 mr-2' />
                    <p className='font-semibold pt-3 font-poppins md:pr-1'>Bitcoin</p>
                    <p className='md:pr-20 pt-3'>BTC</p>

                  </div>
                </td>
                <td class="px-2 pb-4">$56,623.54</td>
                <td class="p-6 pb-4 text-green">+1.41%</td>
                <td class="px-2 pb-4 hidden lg:table-cell">
                  <a href="https://react.dev" target="_blank">
                    <img src={linechart} className="logo react" alt="React logo" />
                  </a></td>
                <td class="px-2 pb-4 hidden lg:table-cell"><button className="text-white bg-primary p-6 py-2 rounded hover:bg-black focus:outline-none font-medium underline">Trade</button></td>
              </tr>


              <tr class="bg-white">
                <td class="p-6">
                  <div className="flex">
                    <img src='https://cdn.animaapp.com/projects/624bf82149c7baaee137f21d/releases/624c0e843d84adb832e1dcaf/img/bitcoin-icon@2x.png'
                      alt="Bitcoin"
                      className='w-10 h-10 mr-2' />
                    <p className='font-semibold pt-3 font-poppins md:pr-1'>Bitcoin</p>
                    <p className='md:pr-20 pt-3'>BTC</p>

                  </div>
                </td>
                <td class="px-2 pb-4">$56,623.54</td>
                <td class="p-6 pb-4 text-green">+1.41%</td>
                <td class="px-2 pb-4 hidden lg:table-cell">
                  <a href="https://react.dev" target="_blank">
                    <img src={linechart} className="logo react" alt="React logo" />
                  </a></td>
                <td class="px-2 pb-4 hidden lg:table-cell"><button className="text-white bg-primary p-6 py-2 rounded hover:bg-black focus:outline-none font-medium underline">Trade</button></td>
              </tr>

              <tr class="bg-gray-100">
                <td class="p-6">
                  <div className="flex">
                    <img src='https://cdn.animaapp.com/projects/624bf82149c7baaee137f21d/releases/624c0e843d84adb832e1dcaf/img/bitcoin-icon@2x.png'
                      alt="Bitcoin"
                      className='w-10 h-10 mr-2' />
                    <p className='font-semibold pt-3 font-poppins md:pr-1 pb-4'>Bitcoin</p>
                    <p className='md:pr-20 pt-3 pb-4 hidden lg:table-cell'>BTC</p>

                  </div>
                </td>
                <td class="px-2 pb-4">$56,623.54</td>
                <td class="p-6 pb-4 text-green">+1.41%</td>
                <td class="px-2 pb-4 hidden lg:table-cell">
                  <a href="https://react.dev" target="_blank">
                    <img src={linechart} className="logo react" alt="React logo" />
                  </a></td>
                <td class="px-2 pb-4 hidden lg:table-cell"><button className="text-white bg-primary p-6 py-2 rounded hover:bg-black focus:outline-none font-medium underline">Trade</button></td>
              </tr>


              <tr class="bg-white">
                <td class="p-6">
                  <div className="flex">
                    <img src='https://cdn.animaapp.com/projects/624bf82149c7baaee137f21d/releases/624c0e843d84adb832e1dcaf/img/bitcoin-icon@2x.png'
                      alt="Bitcoin"
                      className='w-10 h-10 mr-2' />
                    <p className='font-semibold pt-3 pb-4 font-poppins md:pr-1'>Bitcoin</p>
                    <p className='md:pr-20 pt-3 pb-4'>BTC</p>

                  </div>
                </td>
                <td class="px-2 pb-4">$56,623.54</td>
                <td class="p-6 pb-4 text-green">+1.41%</td>
                <td class="px-2 pb-4 hidden lg:table-cell">
                  <a href="https://react.dev" target="_blank">
                    <img src={linechart} className="logo react" alt="React logo" />
                  </a></td>
                <td class="px-2 pb-4 hidden lg:table-cell"><button className="text-white bg-primary p-6 py-2 rounded hover:bg-black focus:outline-none font-medium underline">Trade</button></td>
              </tr>

              <tr class="bg-gray-100">
                <td class="p-6">
                  <div className="flex">
                    <img src='https://cdn.animaapp.com/projects/624bf82149c7baaee137f21d/releases/624c0e843d84adb832e1dcaf/img/bitcoin-icon@2x.png'
                      alt="Bitcoin"
                      className='w-10 h-10 mr-2' />
                    <p className='font-semibold pt-3 pb-4 font-poppins md:pr-1'>Bitcoin</p>
                    <p className='md:pr-20 pt-3 pb-4'>BTC</p>

                  </div>
                </td>
                <td class="px-2 pb-4">$56,623.54</td>
                <td class="p-6 pb-4 text-green">+1.41%</td>
                <td class="p-6 pb-4 hidden lg:table-cell">
                  <a href="https://react.dev" target="_blank">
                    <img src={linechart} className="logo react" alt="React logo" />
                  </a></td>
                <td class="px-2 pb-4 hidden lg:table-cell"><button className="text-white bg-primary p-6 py-2 rounded hover:bg-black focus:outline-none font-medium underline">Trade</button></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>


      <div className='max-w-5xl mx-auto flex flex-col text-center space-y-4 pb-24'>
        <div className="text-4xl font-poppins font-semibold">Create the next generation crypto exchange website.</div>
        <p className="text-xl font-poppins text-grey">Created with Figma and Anima. No coding involved.</p>
      </div>


      <div className='flex flex-row max-w-5xl mx-auto justify-between overflow-visible pb-24' >
        {Array.map(() => {
          return (
            <>
              <div className='flex flex-col shadow-lg rounded-md p-4 space-y-8'>
                <h2 className="text-md font-poppins font-semibold">Bitcoin vs Ethereum</h2>

                <svg id="622099faac60947c06215ef2" width="274" height="170" viewBox="0 0 274 170" version="1.1"><defs><clipPath id="622099faac60947c06215ef2-clip"><rect x="0" y="0" height="153.671875" width="274"></rect></clipPath></defs><g class="recharts-cartesian-grid"><g class="recharts-cartesian-grid-horizontal"><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="0" y1="153.671875" x2="274" y2="153.671875"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="0" y1="115.25390625" x2="274" y2="115.25390625"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="0" y1="76.8359375" x2="274" y2="76.8359375"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="0" y1="38.41796875" x2="274" y2="38.41796875"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="0" y1="0" x2="274" y2="0"></line></g><g class="recharts-cartesian-grid-vertical"><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="54.8" y1="0" x2="54.8" y2="153.671875"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="109.6" y1="0" x2="109.6" y2="153.671875"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="164.39999999999998" y1="0" x2="164.39999999999998" y2="153.671875"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="219.2" y1="0" x2="219.2" y2="153.671875"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="274" y1="0" x2="274" y2="153.671875"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="0" y="0" width="274" height="153.671875" offset="[object Object]" x1="0" y1="0" x2="0" y2="153.671875"></line></g></g><g class="recharts-layer recharts-line"><path stroke="#3366FF" stroke-width="1" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="274" height="153.671875" class="recharts-curve recharts-line-curve" stroke-dasharray="460.3740234375px 0px" type="monotone" d="M0,138.3046875C18.266666666666666,127.63302951388889,36.53333333333333,116.96137152777779,54.8,102.44791666666667C73.06666666666666,87.93446180555556,91.33333333333333,51.223958333333336,109.6,51.223958333333336C127.86666666666666,51.223958333333336,146.13333333333333,100.39895833333333,164.39999999999998,100.39895833333333C182.66666666666666,100.39895833333333,200.9333333333333,38.41796875,219.2,38.41796875C237.46666666666667,38.41796875,255.73333333333332,96.044921875,274,153.671875"></path></g><g class="recharts-layer recharts-line"><path stroke="#009379" stroke-width="1" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="274" height="153.671875" class="recharts-curve recharts-line-curve" stroke-dasharray="322.377197265625px 0px" type="monotone" d="M0,92.203125C18.266666666666666,105.13717447916667,36.53333333333333,118.07122395833333,54.8,118.07122395833333C73.06666666666666,118.07122395833333,91.33333333333333,112.86345486111111,109.6,102.44791666666667C127.86666666666666,92.03237847222223,146.13333333333333,65.73741319444444,164.39999999999998,53.78515625C182.66666666666666,41.83289930555555,200.9333333333333,30.734374999999993,219.2,30.734374999999993C237.46666666666667,30.734374999999993,255.73333333333332,43.540364583333336,274,56.34635416666667"></path></g></svg>

                <div className='flex flex-row justify-start space-x-5'>

                  <div class=" bg-yellow w-2 h-2 m-2" data-id="I91:3541;20:3271;20:2545"></div>
                  <div className='font-poppins text-grey ' >BTC</div>


                  <div class="rectangle-34-b1zR73 bg-cblue w-2 h-2 m-2" data-id="I91:3541;20:3271;20:2545"></div>
                  <div className='font-poppins text-grey'>ETH</div>
                </div>
              </div>
            </>
          )
        })}

      </div>


      <div className='max-w-5xl mx-auto flex flex-col text-center space-y-4 pb-24'>
        <div className="text-4xl font-poppins font-semibold">Create the next generation crypto exchange website.</div>
        <p className="text-xl font-poppins text-grey">Created with Figma and Anima. No coding involved.</p>
      </div>

      <div className='flex flex-row max-w-5xl mx-auto justify-between overflow-visible space-x-6 pb-24' >
        {Array.map(() => {
          return (
            <>
              <div className='flex flex-col shadow-lg rounded-md p-4 space-y-8 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                  <circle cx="42.5" cy="42.5" r="42.5" fill="#f8f8f8" />
                </svg>
                <div className='space-y-4'>
                  <div className='font-poppins font-semibold text-xl'>Awesome feature</div>
                  <div className='font-poppins text-grey text-sm pb-4'>Fill in the details with a clear description of your feature.</div>
                  <div className='font-poppins font-semibold text-primary'>Learn More</div>
                </div>
              </div>
            </>
          )
        })}
      </div>


      <div className='max-w-5xl mx-auto flex flex-col text-center space-y-4 pb-24'>
        <div className="text-4xl font-poppins font-semibold">Create the next generation crypto exchange website.</div>
        <p className="text-xl font-poppins text-grey">Created with Figma and Anima. No coding involved.</p>
      </div>

      <div className='flex flex-row max-w-5xl mx-auto justify-between overflow-visible space-x-6 pb-10' >
        {cardArr.map(() => {
          return (
            <>
              <div>
                <div className='flex flex-row space-x-4 rounded-md shadow-lg p-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                    <circle cx="42.5" cy="42.5" r="42.5" fill="#f8f8f8" />
                  </svg>
                  <div className='space-y-2'>
                    <div className='font-poppins font-semibold text-xl'>Awesome feature</div>
                    <div className='font-poppins text-grey text-sm pb-4'>Fill in the details with a clear description of your feature.</div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>

      <div className='flex flex-row max-w-5xl mx-auto justify-between overflow-visible space-x-6 pb-32' >
        {cardArr.map(() => {
          return (
            <>
              <div>
                <div className='flex flex-row space-x-4 ounded-md shadow-lg p-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                    <circle cx="42.5" cy="42.5" r="42.5" fill="#f8f8f8" />
                  </svg>
                  <div className='space-y-2'>
                    <div className='font-poppins font-semibold text-xl'>Awesome feature</div>
                    <div className='font-poppins text-grey text-sm pb-4'>Fill in the details with a clear description of your feature.</div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>

      <div className='max-w-5xl mx-auto text-center space-y-10 pb-32'>
        <div className='font-poppins text-4xl font-semibold '>Start Today. Easly</div>
        <button className="text-white bg-primary p-6 py-3 rounded hover:bg-black focus:outline-none underline font-poppins font-semibold">
          Get Started
        </button>
      </div>


      <div className=' flex flex-row justify-between mx-20 max-w-full p-16' >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="39" viewBox="0 0 202 39" fill="none">
            <path d="M10.6121 30.9199C8.59609 30.9199 6.85542 30.4813 5.39009 29.6039C3.93409 28.7266 2.80942 27.4993 2.01609 25.9219C1.23209 24.3446 0.840088 22.5106 0.840088 20.4199C0.840088 18.3293 1.23209 16.4953 2.01609 14.9179C2.80942 13.3406 3.93409 12.1133 5.39009 11.2359C6.85542 10.3586 8.59609 9.91992 10.6121 9.91992C12.9268 9.91992 14.8681 10.4939 16.4361 11.6419C18.0134 12.7899 19.1241 14.3439 19.7681 16.3039L15.9321 17.3679C15.5588 16.1453 14.9288 15.1979 14.0421 14.5259C13.1554 13.8446 12.0121 13.5039 10.6121 13.5039C9.33342 13.5039 8.26476 13.7886 7.40609 14.3579C6.55676 14.9273 5.91742 15.7299 5.48809 16.7659C5.05875 17.8019 4.84409 19.0199 4.84409 20.4199C4.84409 21.8199 5.05875 23.0379 5.48809 24.0739C5.91742 25.1099 6.55676 25.9126 7.40609 26.4819C8.26476 27.0513 9.33342 27.3359 10.6121 27.3359C12.0121 27.3359 13.1554 26.9953 14.0421 26.3139C14.9288 25.6326 15.5588 24.6853 15.9321 23.4719L19.7681 24.5359C19.1241 26.4959 18.0134 28.0499 16.4361 29.1979C14.8681 30.3459 12.9268 30.9199 10.6121 30.9199Z" fill="#2702FF" />
            <path d="M23.2707 30.4999V15.3799H26.6307V19.0759L26.2667 18.5999C26.4627 18.0773 26.724 17.6013 27.0507 17.1719C27.3774 16.7426 27.7787 16.3879 28.2547 16.1079C28.6187 15.8839 29.0154 15.7113 29.4447 15.5899C29.874 15.4593 30.3174 15.3799 30.7747 15.3519C31.232 15.3146 31.6894 15.3239 32.1467 15.3799V18.9359C31.7267 18.8053 31.2367 18.7633 30.6767 18.8099C30.126 18.8473 29.6267 18.9733 29.1787 19.1879C28.7307 19.3933 28.3527 19.6686 28.0447 20.0139C27.7367 20.3499 27.5034 20.7513 27.3447 21.2179C27.186 21.6753 27.1067 22.1933 27.1067 22.7719V30.4999H23.2707Z" fill="#2702FF" />
            <path d="M36.6149 37.2199L39.5269 29.2119L39.5829 31.5639L33.0029 15.3799H36.9509L41.3749 26.8319H40.4789L44.8749 15.3799H48.6829L40.1429 37.2199H36.6149Z" fill="#2702FF" />
            <path d="M58.4916 30.9199C56.989 30.9199 55.7337 30.5699 54.7257 29.8699C53.7177 29.1699 52.957 28.2179 52.4436 27.0139C51.9396 25.8099 51.6876 24.4519 51.6876 22.9399C51.6876 21.4279 51.9396 20.0699 52.4436 18.8659C52.9477 17.6619 53.6896 16.7099 54.6696 16.0099C55.6496 15.3099 56.8583 14.9599 58.2957 14.9599C59.7423 14.9599 61.0023 15.3053 62.0756 15.9959C63.149 16.6866 63.9797 17.6339 64.5677 18.8379C65.165 20.0326 65.4637 21.3999 65.4637 22.9399C65.4637 24.4519 65.1696 25.8099 64.5816 27.0139C64.003 28.2179 63.191 29.1699 62.1456 29.8699C61.1003 30.5699 59.8823 30.9199 58.4916 30.9199ZM51.0436 37.2199V15.3799H54.4036V25.7399H54.8797V37.2199H51.0436ZM57.8756 27.5319C58.697 27.5319 59.369 27.3266 59.8916 26.9159C60.4143 26.5053 60.8017 25.9546 61.0536 25.2639C61.3056 24.5639 61.4316 23.7893 61.4316 22.9399C61.4316 22.0999 61.301 21.3346 61.0396 20.6439C60.7783 19.9439 60.3723 19.3886 59.8216 18.9779C59.2803 18.5579 58.585 18.3479 57.7356 18.3479C56.9423 18.3479 56.2983 18.5393 55.8036 18.9219C55.3183 19.3046 54.9636 19.8413 54.7396 20.5319C54.5156 21.2226 54.4036 22.0253 54.4036 22.9399C54.4036 23.8546 54.5156 24.6573 54.7396 25.3479C54.9636 26.0386 55.3276 26.5753 55.8316 26.9579C56.345 27.3406 57.0263 27.5319 57.8756 27.5319Z" fill="#2702FF" />
            <path d="M78.0363 30.4999C76.991 30.6959 75.9643 30.7799 74.9563 30.7519C73.9576 30.7333 73.0616 30.5606 72.2683 30.2339C71.4843 29.8979 70.887 29.3613 70.4763 28.6239C70.103 27.9333 69.907 27.2333 69.8883 26.5239C69.8696 25.8053 69.8603 24.9933 69.8603 24.0879V11.1799H73.6683V23.8639C73.6683 24.4519 73.673 24.9839 73.6823 25.4599C73.701 25.9266 73.799 26.2999 73.9763 26.5799C74.3123 27.1119 74.849 27.4013 75.5863 27.4479C76.3236 27.4946 77.1403 27.4573 78.0363 27.3359V30.4999ZM67.2843 18.3199V15.3799H78.0363V18.3199H67.2843Z" fill="#2702FF" />
            <path d="M87.8094 30.9199C86.2881 30.9199 84.9534 30.5793 83.8054 29.8979C82.6574 29.2166 81.7614 28.2786 81.1174 27.0839C80.4827 25.8799 80.1654 24.4986 80.1654 22.9399C80.1654 21.3626 80.4921 19.9766 81.1454 18.7819C81.7987 17.5779 82.6994 16.6399 83.8474 15.9679C84.9954 15.2959 86.3161 14.9599 87.8094 14.9599C89.3307 14.9599 90.6654 15.3006 91.8134 15.9819C92.9707 16.6633 93.8714 17.6059 94.5154 18.8099C95.1594 20.0046 95.4814 21.3813 95.4814 22.9399C95.4814 24.5079 95.1547 25.8939 94.5014 27.0979C93.8574 28.2926 92.9567 29.2306 91.7994 29.9119C90.6514 30.5839 89.3214 30.9199 87.8094 30.9199ZM87.8094 27.3639C89.0321 27.3639 89.9421 26.9533 90.5394 26.1319C91.1461 25.3013 91.4494 24.2373 91.4494 22.9399C91.4494 21.5959 91.1414 20.5226 90.5254 19.7199C89.9187 18.9173 89.0134 18.5159 87.8094 18.5159C86.9787 18.5159 86.2974 18.7026 85.7654 19.0759C85.2334 19.4493 84.8367 19.9673 84.5754 20.6299C84.3234 21.2926 84.1974 22.0626 84.1974 22.9399C84.1974 24.2933 84.5007 25.3713 85.1074 26.1739C85.7234 26.9673 86.6241 27.3639 87.8094 27.3639Z" fill="#2702FF" />
            <path d="M105.006 30.4999V10.3399H108.422L115.086 23.7239L121.75 10.3399H125.166V30.4999H121.61V18.4599L115.758 30.4999H114.414L108.562 18.4599V30.4999H105.006Z" fill="#2702FF" />
            <path d="M133.715 30.9199C132.633 30.9199 131.713 30.7146 130.957 30.3039C130.211 29.8839 129.641 29.3286 129.249 28.6379C128.867 27.9379 128.675 27.1679 128.675 26.3279C128.675 25.6279 128.783 24.9886 128.997 24.4099C129.212 23.8313 129.557 23.3226 130.033 22.8839C130.519 22.4359 131.167 22.0626 131.979 21.7639C132.539 21.5586 133.207 21.3766 133.981 21.2179C134.756 21.0593 135.633 20.9099 136.613 20.7699C137.593 20.6206 138.671 20.4573 139.847 20.2799L138.475 21.0359C138.475 20.1399 138.261 19.4819 137.831 19.0619C137.402 18.6419 136.683 18.4319 135.675 18.4319C135.115 18.4319 134.532 18.5673 133.925 18.8379C133.319 19.1086 132.894 19.5893 132.651 20.2799L129.207 19.1879C129.59 17.9373 130.309 16.9199 131.363 16.1359C132.418 15.3519 133.855 14.9599 135.675 14.9599C137.01 14.9599 138.195 15.1653 139.231 15.5759C140.267 15.9866 141.051 16.6959 141.583 17.7039C141.882 18.2639 142.059 18.8239 142.115 19.3839C142.171 19.9439 142.199 20.5693 142.199 21.2599V30.4999H138.867V27.3919L139.343 28.0359C138.606 29.0533 137.808 29.7906 136.949 30.2479C136.1 30.6959 135.022 30.9199 133.715 30.9199ZM134.527 27.9239C135.227 27.9239 135.815 27.8026 136.291 27.5599C136.777 27.3079 137.159 27.0233 137.439 26.7059C137.729 26.3886 137.925 26.1226 138.027 25.9079C138.223 25.4973 138.335 25.0213 138.363 24.4799C138.401 23.9293 138.419 23.4719 138.419 23.1079L139.539 23.3879C138.41 23.5746 137.495 23.7333 136.795 23.8639C136.095 23.9853 135.531 24.0973 135.101 24.1999C134.672 24.3026 134.294 24.4146 133.967 24.5359C133.594 24.6853 133.291 24.8486 133.057 25.0259C132.833 25.1939 132.665 25.3806 132.553 25.5859C132.451 25.7913 132.399 26.0199 132.399 26.2719C132.399 26.6173 132.483 26.9159 132.651 27.1679C132.829 27.4106 133.076 27.5973 133.393 27.7279C133.711 27.8586 134.089 27.9239 134.527 27.9239Z" fill="#2702FF" />
            <path d="M146.26 30.4999V15.3799H149.62V19.0759L149.256 18.5999C149.452 18.0773 149.713 17.6013 150.04 17.1719C150.366 16.7426 150.768 16.3879 151.244 16.1079C151.608 15.8839 152.004 15.7113 152.434 15.5899C152.863 15.4593 153.306 15.3799 153.764 15.3519C154.221 15.3146 154.678 15.3239 155.136 15.3799V18.9359C154.716 18.8053 154.226 18.7633 153.666 18.8099C153.115 18.8473 152.616 18.9733 152.168 19.1879C151.72 19.3933 151.342 19.6686 151.034 20.0139C150.726 20.3499 150.492 20.7513 150.334 21.2179C150.175 21.6753 150.096 22.1933 150.096 22.7719V30.4999H146.26Z" fill="#2702FF" />
            <path d="M158.191 30.4999L158.219 10.3399H162.083V22.6599L167.207 15.3799H171.911L166.451 22.9399L172.275 30.4999H167.319L162.083 23.2199V30.4999H158.191Z" fill="#2702FF" />
            <path d="M180.842 30.9199C179.293 30.9199 177.926 30.5886 176.74 29.9259C175.564 29.2539 174.64 28.3346 173.968 27.1679C173.306 25.9919 172.974 24.6479 172.974 23.1359C172.974 21.4839 173.301 20.0466 173.954 18.8239C174.608 17.6013 175.508 16.6539 176.656 15.9819C177.804 15.3006 179.125 14.9599 180.618 14.9599C182.205 14.9599 183.554 15.3333 184.664 16.0799C185.775 16.8266 186.596 17.8766 187.128 19.2299C187.66 20.5833 187.847 22.1746 187.688 24.0039H183.922V22.6039C183.922 21.0639 183.675 19.9579 183.18 19.2859C182.695 18.6046 181.897 18.2639 180.786 18.2639C179.489 18.2639 178.532 18.6606 177.916 19.4539C177.31 20.2379 177.006 21.3999 177.006 22.9399C177.006 24.3493 177.31 25.4413 177.916 26.2159C178.532 26.9813 179.433 27.3639 180.618 27.3639C181.365 27.3639 182.004 27.2006 182.536 26.8739C183.068 26.5473 183.474 26.0759 183.754 25.4599L187.562 26.5519C186.993 27.9333 186.092 29.0066 184.86 29.7719C183.638 30.5373 182.298 30.9199 180.842 30.9199ZM175.83 24.0039V21.1759H185.854V24.0039H175.83Z" fill="#2702FF" />
            <path d="M200.342 30.4999C199.296 30.6959 198.27 30.7799 197.262 30.7519C196.263 30.7333 195.367 30.5606 194.574 30.2339C193.79 29.8979 193.192 29.3613 192.782 28.6239C192.408 27.9333 192.212 27.2333 192.194 26.5239C192.175 25.8053 192.166 24.9933 192.166 24.0879V11.1799H195.974V23.8639C195.974 24.4519 195.978 24.9839 195.988 25.4599C196.006 25.9266 196.104 26.2999 196.282 26.5799C196.618 27.1119 197.154 27.4013 197.892 27.4479C198.629 27.4946 199.446 27.4573 200.342 27.3359V30.4999ZM189.59 18.3199V15.3799H200.342V18.3199H189.59Z" fill="#2702FF" />
          </svg>
        </div>

        <div className='flex flex-row space-x-24'>
          <div>
          <div className="mb-5 font-poppins font-semibold">Community</div>
          

          <div className="flex flex-col items-center space-y-3 md:items-start">
            <a href="#" className="font-poppins text-grey hover:text-cyan"
            >Twitter</a>
            <a href="#" className="font-poppins text-grey hover:text-cyan"
            >Facebook</a>
            <a href="#" className="font-poppins text-grey hover:text-cyan"
            >Discord</a>
            <a href="#" className="font-poppins text-grey hover:text-cyan"
            >Reddit</a>
          </div>
          </div>


          <div>
          <div className="mb-5 font-poppins font-semibold">About</div>
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <a href="#" className="font-poppins text-grey hover:text-cyan"
            >About us</a>
            <a href="#" className="font-poppins text-grey hover:text-cyan"
            >Careers</a>
            <a href="#" className="font-poppins text-grey hover:text-cyan"
            >Privacy</a>
            <a href="#" className="font-poppins text-grey hover:text-cyan"
            >News</a>
          </div>
          </div>
        
 
        <div>
        <div className="mb-5 font-poppins font-semibold">Learn</div>
        <div className="flex flex-col items-center space-y-3 md:items-start">
          <a href="#" className="font-poppins text-grey hover:text-cyan"
          >Blog</a>
          <a href="#" className="font-poppins text-grey hover:text-cyan"
          >Newsletter</a>
          <a href="#" className="font-poppins text-grey hover:text-cyan"
          >FAQ</a>
          <a href="#" className="font-poppins text-grey hover:text-cyan"
          >Crypto basics</a>
        </div>
        </div>


        <div>
        <div className="mb-5 font-poppins font-semibold">Support</div>
        <div className="flex flex-col items-center space-y-3 md:items-start">
          <a href="#" className=" text-grey hover:text-cyan font-poppins"
          >Help center</a>
          <a href="#" className="font-poppins text-grey hover:text-cyan"
          >Contact us</a>
          <a href="#" className="font-poppins text-grey hover:text-cyan"
          >Account</a>
          <a href="#" className="font-poppins text-grey hover:text-cyan"
          >Payments</a>
      
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default XLComponents