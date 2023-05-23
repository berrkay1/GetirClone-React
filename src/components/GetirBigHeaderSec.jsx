import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import Slider from "react-slick";

const GetirBigHeaderSec = () => {
    const [selected, setSelected] = useState('')

    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
  
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
  
    };
  
  
    return (
      <div className='relative before:bg-gradient-to-r before:from-[#5D3EBC] before:to-transparent before:absolute before:top-0 before:left-0 before:z-20 before:w-full before:h-full h-[500px] z-0'  >
  
        <Slider {...settings}>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-1.jpg" alt="" />
          </div>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-2.jpg" alt="" />
          </div>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-3.jpg" alt="" />
          </div>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-5.jpg" alt="" />
          </div>
  
        </Slider>
  
        <div className='container absolute top-0 text-white z-30 w-full h-full flex items-center justify-between  left-1/2 -translate-x-1/2'>
          <div className='text-4xl font-semibold '>
            <img className='w-[315px]' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjIiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0yMC42NDMgNy42ODhjMS41MSAwIDIuMjM0LjgyNCAyLjIzNCAxLjU3MyAwIC44ODYtLjc5OSAxLjQ2LTIuMjQ3IDEuNDYtMi4wOTcgMC0yLjg5NS0uMy0yLjg5NS0uMyAwLTEuMjczLjk5OS0yLjczMyAyLjkwOC0yLjczM3ptNS4zNzkgMS41NmMwLTIuNzMzLTIuMjQ2LTQuNTMtNS41MTYtNC41My0zLjEwOCAwLTYuMzY1IDIuMjM0LTYuMzY1IDcuMjE0IDAgMy44MDcgMi4yOTcgNi42MTUgNi4yNzggNi42MTUgMi4yMzQgMCA0LjY5My0xLjI3MyA1LjMxNy0yLjE0NyAwIDAtLjQyNC0xLjYzNS0xLjU4NS0xLjYzNS0uNjExIDAtMS4wNjEuMjM3LTEuNTYuNDQ5YTQuOTUgNC45NSAwIDAgMS0xLjkzNC4zOTljLTEuMTExIDAtMy4wMi0uNDQ5LTMuMDItMi44MzMgMCAwIC44OTkuMjYyIDIuOTQ1LjI2MiA0LjM4MS0uMDEyIDUuNDQxLTEuODYgNS40NDEtMy43OTR6bTguMTc1IDYuMzc4Yy0xLjUxIDAtMi4yOTYtMS4yNzMtMi40MzQtMS44MjItLjE3Mi0uNjk0LS4yNTYtMS40MDctLjI1LTIuMTIybC4wMjUtNC4wOTRoMS4wOThjLjg4NiAwIDEuNTczLS4yNjIgMi4wNDctLjc3NHMuNzI0LTEuMjExLjcyNC0yLjA4NGgtMy44NjlsLS4wMjUtMS44MjIuMDEyLTEuMzk4LjAzNy0uODQ5YTQuNTIgNC41MiAwIDAgMSAuMDYyLS41NDljLTEuMTczIDAtMi4wNzIuMjUtMi42ODMuNzQ5cy0uOTI0IDEuMzIzLS45MjQgMi40ODRsLS4wMjUgOS4wODZjMCAzLjcxOSAxLjc3MiA2LjE1MyA1LjE1NCA2LjE1MyAxLjY3MiAwIDIuODk1LS44OTkgMi44OTUtMi4yNTlhMi43MSAyLjcxIDAgMCAwLS4xMTItLjg4NiA3LjQ1IDcuNDUgMCAwIDEtMS43MzUuMTg3em04LjQ4Ni4xNzRjLS43NDkgMC0xLjIzNi0uNTQ5LTEuMjM2LTEuNDM1VjcuODEzbC4wMTMtMS4zOTguMDM3LS44NDlhNS4yMSA1LjIxIDAgMCAxIC4wNjItLjU0OWMtMS4xOTggMC0yLjA5Ny4yNS0yLjcwOC43NDlzLS45MjQgMS4zMjMtLjkyNCAyLjQ4NGwtLjAyNSA2LjY3N2MwIDIuMzg0IDEuNTM1IDMuNzA3IDMuNDY5IDMuNjMyIDEuMjIzLS4wNSAyLjI3Mi0uNjI0IDIuMjcyLTEuOTA5YTUuMzQgNS4zNCAwIDAgMC0uMDg3LS45NjFjLS4yODUuMDc1LS41NzkuMTEyLS44NzQuMTEyek0zOC43ODkgMy43MDdhMS45NyAxLjk3IDAgMCAwIC44ODYuMjEyYy43MjQgMCAxLjI5OC0uMzQ5IDEuNzIyLTEuMDM2LjE3NC0uMzA4LjI2NC0uNjU3LjI2Mi0xLjAxMS4wMDMtLjMzMS0uMDc5LS42NTgtLjIzNy0uOTQ5YTEuNjQgMS42NCAwIDAgMC0uNzExLS42ODZBMS42NiAxLjY2IDAgMCAwIDM5Ljg1IDBhMS44NyAxLjg3IDAgMCAwLS45NzQuMjg3IDEuOTQgMS45NCAwIDAgMC0uNzM2Ljc4NiAxLjk3IDEuOTcgMCAwIDAtLjI2MiAxLjAxMSAxLjg2IDEuODYgMCAwIDAgLjIzNy45MzYgMS43OSAxLjc5IDAgMCAwIC42NzQuNjg2em0xMi41NjggMS4zMzVhMTAuMjUgMTAuMjUgMCAwIDAtMi4yMDkuMjUgNS4wNCA1LjA0IDAgMCAwLTIuMDA5LjkzNiA0Ljk0IDQuOTQgMCAwIDAtMS40NiAxLjkyMmMtLjM3NC44MjQtLjU2MiAxLjg3Mi0uNTYyIDMuMTU4djMuNzU3YzAgMS4xNjEuMTUgMi4yMzQuODQ5IDIuNzU4Ljc2MS41NzQgMS42NDcuNTk5IDIuODIxLjU5OS0uMDI1LS4xMTItLjAzNy0uNDQ5LS4wNjItLjY3NGE3LjY2IDcuNjYgMCAwIDEtLjAzOC0uODQ5bC0uMDEyLTEuMzk4di00LjgxOGMwLTEuMTM2LjE4Ny0yLjU5NiAyLjE4NC0yLjc1OCAxLjEyMy0uMSAyLjEyMi0uNTI0IDIuMTIyLTEuNzQ3LS4wMDItLjM4Ny0uMDY5LS43NzEtLjItMS4xMzZoLTEuNDIzek02LjIxNSAxNC4yNGMtMS41MzUgMC0yLjcwOC0uOTczLTIuNzA4LTMuMTA4IDAtMi4yNzEgMS4xOTgtMy40NTcgMi43MDgtMy40NTcgMS40ODUgMCAyLjU3MS44OTkgMi41NzEgMy4yODIgMCAyLjQ0Ni0xLjE3MyAzLjI4Mi0yLjU3MSAzLjI4MnptLjAyNS05LjUyM0MyLjE0NyA0LjcxOCAwIDcuNTg4IDAgMTEuMDgzYzAgMy4yMzMgMS45NzIgNi4yNTMgNS41NTQgNi4yNTMgMS44NiAwIDIuOTMzLS43ODYgMy4yMDctMS4wMjN2MS42MjJjMCAxLjg2LS43MjQgMy4wOTUtMi41OTYgMy4wOTUtLjg5OSAwLTEuNTczLS4yNS0yLjE5Ny0uNTM3LS41NDktLjI2Mi0uOTYxLS41NzQtMS41MS0uNTc0LTEuMzk4IDAtMS43ODUgMS43MjItMS43NzIgMS43MzVDMS43MzUgMjMuMDAyIDQuMTMxIDI0IDYuMTQgMjRjMy45NTYgMCA2LjE0LTIuMzA5IDYuMTQtNi44ODl2LTUuMzU0Yy0uMDEyLTQuMTgxLTEuODYtNy4wMzktNi4wNDEtNy4wMzl6IiBmaWxsPSIjZmZkMTBkIi8+PHBhdGggZD0iTTcxLjc3NSAzLjcwN2ExLjk3IDEuOTcgMCAwIDAgLjg4Ni4yMTJjLjcyNCAwIDEuMjk4LS4zNDkgMS43MjItMS4wMzYuMTc0LS4zMDguMjY0LS42NTcuMjYyLTEuMDExLjAwMy0uMzMxLS4wNzktLjY1OC0uMjM3LS45NDlhMS42NCAxLjY0IDAgMCAwLS43MTEtLjY4NkExLjY2IDEuNjYgMCAwIDAgNzIuODM2IDBhMS44NyAxLjg3IDAgMCAwLS45NzMuMjg3IDEuOTQgMS45NCAwIDAgMC0uNzM2Ljc4NiAxLjk3IDEuOTcgMCAwIDAtLjI2MiAxLjAxMSAxLjg3IDEuODcgMCAwIDAgLjIzNy45MzYgMS45NyAxLjk3IDAgMCAwIC42NzQuNjg2em01LjI4IDBhMS45NyAxLjk3IDAgMCAwIC44ODYuMjEyYy43MjQgMCAxLjI5OC0uMzQ5IDEuNzIyLTEuMDM2LjE3NC0uMzA4LjI2NC0uNjU3LjI2Mi0xLjAxMS4wMDMtLjMzMS0uMDc5LS42NTgtLjIzNy0uOTQ5LS4xNjEtLjI5Ni0uNDEtLjUzNi0uNzExLS42ODZBMS42NiAxLjY2IDAgMCAwIDc4LjExNSAwYTEuODcgMS44NyAwIDAgMC0uOTczLjI4NyAxLjk0IDEuOTQgMCAwIDAtLjczNi43ODYgMS45NyAxLjk3IDAgMCAwLS4yNjIgMS4wMTEgMS44NiAxLjg2IDAgMCAwIC4yMzcuOTM2IDEuNzkgMS43OSAwIDAgMCAuNjc0LjY4NnptMjAuOTU0IDBhMS45NyAxLjk3IDAgMCAwIC44ODYuMjEyYy43MjQgMCAxLjI5OC0uMzQ5IDEuNzIzLTEuMDM2LjE3NC0uMzA4LjI2NC0uNjU3LjI2Mi0xLjAxMWExLjk1IDEuOTUgMCAwIDAtLjIzNy0uOTQ5Yy0uMTYxLS4yOTYtLjQxLS41MzYtLjcxMi0uNjg2QTEuNjYgMS42NiAwIDAgMCA5OS4wNyAwYTEuODcgMS44NyAwIDAgMC0uOTc0LjI4NyAxLjk1IDEuOTUgMCAwIDAtLjczNi43ODYgMS45NyAxLjk3IDAgMCAwLS4yNjIgMS4wMTEgMS44NiAxLjg2IDAgMCAwIC4yMzcuOTM2IDEuNzkgMS43OSAwIDAgMCAuNjc0LjY4NnptNS4yNjcgMGExLjk3IDEuOTcgMCAwIDAgLjg4Ni4yMTJjLjcyNCAwIDEuMjk4LS4zNDkgMS43MjMtMS4wMzYuMTczLS4zMDguMjY0LS42NTcuMjYyLTEuMDExYTEuOTQgMS45NCAwIDAgMC0uMjM4LS45NDkgMS42NCAxLjY0IDAgMCAwLS43MTEtLjY4NiAxLjY2IDEuNjYgMCAwIDAtLjg2MS0uMjM3Yy0uMzQ1LjAwNC0uNjgyLjEwNC0uOTc0LjI4N2ExLjk1IDEuOTUgMCAwIDAtLjczNi43ODYgMS45NyAxLjk3IDAgMCAwLS4yNjIgMS4wMTEgMS44NSAxLjg1IDAgMCAwIC4yMzYuOTM0IDEuODQgMS44NCAwIDAgMCAuNjc1LjY4OHpNNjEuMTQyIDcuNjM4Yy0xLjY2IDAtMi45MDggMS42MzUtMi45MDggMy42OTQgMCAzLjAzMyAxLjI5OCA0LjI4MSAzLjI1NyA0LjI4MSAxLjYzNSAwIDIuODIxLTEuNTcyIDIuODIxLTMuNjk0LS4wMTMtMy4yMDctMS4xNjEtNC4yODEtMy4xNy00LjI4MXptMCAxMC44OTZjLTMuMzgyIDAtNi4yMTUtMi43NzEtNi4yMTUtNi43MjdWLjYxMmgxLjEyM2MxLjI3MyAwIDIuMTU5LjczNiAyLjE1OSAyLjI3MXYzLjg0NGMuNjYxLS45NDkgMS43ODUtMi4wMDkgMy41NjktMi4wMDkgMy4zNTcgMCA1LjkyOCAyLjc0NiA1LjkyOCA2LjYyNyAwIDMuOTgxLTIuNTQ2IDcuMTg5LTYuNTY1IDcuMTg5em04LjQ0OS02LjIxNlY3LjM2NGMwLTEuNTQ4LjgxMS0yLjM0NiAyLjcyMS0yLjM0NmguNTg3djcuNDEzYzAgMi4yNDYuOTQ4IDMuMTgzIDIuMjk2IDMuMTgzIDEuNDk4IDAgMi42NzEtLjk3NCAyLjY3MS0zLjQwN1Y3LjM2NGMwLTEuNTQ4LjgzNi0yLjM0NiAyLjcyMS0yLjM0NmguNjExdjcuNTEzYzAgMy44NDQtMi41NzEgNS45OTEtNS44MjggNS45OTEtMy44NDQuMDEyLTUuNzc4LTIuMDk3LTUuNzc4LTYuMjAzem0yNi4xODQgMFY3LjM2NGMwLTEuNTQ4LjgxMS0yLjM0NiAyLjcyMS0yLjM0NmguNTg3djcuNDEzYzAgMi4yNDYuOTQ4IDMuMTgzIDIuMjk2IDMuMTgzIDEuNDk4IDAgMi42NzEtLjk3NCAyLjY3MS0zLjQwN1Y3LjM2NGMwLTEuNTQ4LjgzNi0yLjM0NiAyLjcyMS0yLjM0NmguNjExdjcuNTEzYzAgMy44NDQtMi41NzEgNS45OTEtNS44MjggNS45OTEtMy44NDQuMDEyLTUuNzc5LTIuMDk3LTUuNzc5LTYuMjAzek04NS4zNDIgMjIuNTE1Yy0xLjIyMyAwLTIuMjk2LS44MTEtMi4yOTYtMi4wMzR2LS42MzZsMS44Ni0uMTI1YzEuMTk4LS4wNzUgMS42MS0uNTYyIDIuMzIxLTIuNDIxLTEuNzM1LTIuNjIxLTQuMjMxLTkuMTczLTQuNjgtMTIuMjgxaDEuNzM1Yy40NDktLjAwNy44ODcuMTQ0IDEuMjM2LjQyN3MuNTg4LjY4LjY3NCAxLjEyMWMuNDYyIDIuNTQ2IDEuNDQ4IDUuMjkyIDIuNjQ2IDcuNjEzIDEuMDczLTIuNDcxIDIuMjcxLTYuNDY1IDIuNTcxLTkuMTQ4aDEuNDIzYzEuMDQ4IDAgMS41NDguNDYyIDEuNTQ4IDEuNTQ4IDAgMS4zOTgtMi4yOTYgNy40MTMtMi45MDggOC44MzYtMi40NDYgNS43NTMtMy43NDQgNy4xMDEtNi4xMjggNy4xMDF6bTI3LjI5NC0xOS43MTl2Ny44NzVjMS4yNzMtMS42NiAyLjUyMS0zLjM0NSA0LjAzMi00Ljc5My43ODYtLjczNiAxLjU3Mi0uODYxIDIuNjIxLS44NjFoMS44ODR2LjEyNWMtLjkzNi43ODYtMy45OTQgNC4yNTYtNS4zNTQgNS45OTFsMy4yNTcgMy44NDRjMS4xOTggMS4xOTggMS43MzUgMS40NDggMi41NDYgMS43MS0uMzM3IDEuMDQ4LS44ODYgMS42MS0yLjIyMSAxLjYxYTMuMiAzLjIgMCAwIDEtMi4xNTktLjkxMWMtMS42ODUtMS43MzUtMy4xNTgtMy42OTQtNC42MDYtNS42Mjl2Ni40NGwtMS4wNDguMDI1Yy0xLjUyMy4wMjUtMi4yNDYtLjc4Ni0yLjI0Ni0yLjMyMVYuNjEyaDEuMDQ4YzEuNTg1IDAgMi4yNDYuOTExIDIuMjQ2IDIuMTg0eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" alt="" />
  
            <div className='mt-10'>
              <span>Uygun fiyatlarla </span><br />
              <span>kapınızda!</span>
            </div>
          </div>
  
          <div className='bg-[#FAFAFA] p-6 rounded-lg w-[400px]'>
            <h5 className=' text-[#5d3ebc] text-center text-[16px] font-semibold'>Giriş yap veya kayıt ol</h5>
            <div className='flex items-center justify-center my-4 w-full gap-x-2'>
              <ReactFlagsSelect
                countries={["US", "GB", "FR", "DE", "IT", "TR"]}
                customLabels={{ US: "EN-US", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT", TR: '+90' }}
                selected='TR'
                className='flag pb-0 bg-white'
                onSelect={code => setSelected(code)}
              />
              <div className='relative w-full'>
                <input className=' input h-[56px] pb-1 rounded-sm w-full border-solid border-gray-200 border-2 focus:border-purple-600 outline-none mb-[5px]' />
                <span className='absolute text-gray-700 text-sm h-full left-8 top-0 flex items-center z-0 peer-hover:h-5'>Telefon Numarası</span>
              </div>
            </div>
            <button className='h-12 bg-[#FFD300] text-center w-full text-[#5d3ebc] font-semibold text-sm rounded-md hover:bg-[#7849F7] hover:text-[#FFD300] duration-200'>Telefon numarasıyla devam et</button>
          </div>
        </div>
      </div>
    )
}

export default GetirBigHeaderSec