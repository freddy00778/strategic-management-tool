import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

import Tooltip from "../Tooltip";

registerLocale("enGB", enGB);

import arrleft from "../../assets/images/arrow-left.svg";
import arrright from "../../assets/images/arrow-right.svg";
import pBlue from "../../assets/images/polygon-blue.svg";
import pOrange from "../../assets/images/polygon-orange.svg";
import pVoilet from "../../assets/images/polygon-voilet.svg";
import pGreen from "../../assets/images/p-green.svg";
import pLightBlue from "../../assets/images/p-light-blue.svg";
import pPink from "../../assets/images/p-pink.svg";
import pRed from "../../assets/images/p-red.svg";
import pTeal from "../../assets/images/p-teal.svg";
import pYellow from "../../assets/images/p-yellow.svg";
import tGreen from "../../assets/images/t-green.svg";
import tPink from "../../assets/images/t-Pink.svg";
import tLightBlue from "../../assets/images/t-light-blue.svg";
import tRed from "../../assets/images/t-red.svg";
import tTeal from "../../assets/images/t-teal.svg";
import tYellow from "../../assets/images/t-yellow.svg";

const CalendarContent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [monthPickerOpen, setMonthPickerOpen] = useState(false);
  const [yearPickerOpen, setYearPickerOpen] = useState(false);

  const handleMonthClick = () => {
    setMonthPickerOpen(!monthPickerOpen);
  };

  const handleYearClick = () => {
    setYearPickerOpen(!yearPickerOpen);
  };

  const handlePrevClick = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate.getTime());
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextClick = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate.getTime());
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <div className="w-[1010px] h-[773px] pr-[1px] justify-center items-center inline-flex">
      <div className="self-stretch shadow flex-col justify-start items-start inline-flex">
        <div className="flex justify-between items-center py-4 w-full">
          <div className="flex justify-start items-start gap-2">
            <div
              className="text-gray-600 text-lg font-bold cursor-pointer"
              onClick={handleMonthClick}
            >
              {selectedDate.toLocaleString("default", { month: "long" })}
              {monthPickerOpen && (
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date) => setSelectedDate(date)}
                  onCalendarClose={() => setMonthPickerOpen(false)}
                  dateFormat="MMMM"
                  showMonthYearPicker
                  inline
                  locale="enGB"
                />
              )}
            </div>
            <div
              className="text-gray-600 text-lg font-bold cursor-pointer"
              onClick={handleYearClick}
            >
              {selectedDate.getFullYear()}
              {yearPickerOpen && (
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date) => setSelectedDate(date)}
                  onCalendarClose={() => setYearPickerOpen(false)}
                  dateFormat="yyyy"
                  showYearPicker
                  inline
                  locale="enGB"
                />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="cursor-pointer" onClick={handlePrevClick}>
              <img src={arrleft} alt="Previous" />
            </div>
            <div className="cursor-pointer" onClick={handleNextClick}>
              <img src={arrright} alt="Next" />
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 justify-start items-start inline-flex">
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white rounded-tl-md  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[12.466409683227539px] font-medium">
              SUN
            </div>
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[12.466409683227539px] font-medium">
              MON
            </div>
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[12.466409683227539px] font-medium">
              TUE
            </div>
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[12.466409683227539px] font-medium">
              WED
            </div>
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[12.466409683227539px] font-medium">
              THUR
            </div>
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[12.466409683227539px] font-medium">
              FRI
            </div>
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white rounded-tr-md  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[12.466409683227539px] font-medium">
              SAT
            </div>
          </div>
        </div>
        <div className="h-[206.47px] justify-start items-start inline-flex">
          <div className="w-[144.14px] h-[206.47px] p-[9.35px] bg-white  border border-gray-200 flex-col justify-start items-start gap-[7.79px] inline-flex">
            <div className="w-[125.44px] py-[3.12px]  justify-start items-center gap-[14.02px] inline-flex">
              <Tooltip text="Public Holiday" position="right">
                <div className="w-[22.60px] h-[22.60px] p-[3.12px]  bg-[#000] rounded-[38.96px] flex-col justify-center items-center gap-[6.23px] inline-flex">
                  <h1 className="text-white text-[16.362163543701172px] font-medium">
                    1
                  </h1>
                </div>
              </Tooltip>
              <div className="grow shrink basis-0 h-[23.47px] p-[6.23px] bg-zinc-100 rounded justify-start items-center gap-[6.23px] flex">
                <div className="text-black text-[9.349807739257812px] font-medium">
                  Company Closed
                </div>
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[4.67px] inline-flex">
              <Tooltip text="Strategic Projects">
                <div className="px-[12.47px] py-[2.34px] bg-blue-900 rounded justify-start items-start gap-[7.79px] flex">
                  <div className="text-white text-[10.908108711242676px] font-medium">
                    10
                  </div>
                </div>
              </Tooltip>
              <div className="px-[12.47px] py-[2.34px] bg-orange-700 rounded justify-start items-start gap-[7.79px] flex">
                <div className="text-white text-[10.908108711242676px] font-medium">
                  15
                </div>
              </div>
              <div className="px-[12.47px] py-[2.34px] bg-fuchsia-800 rounded flex-col justify-start items-start gap-[7.79px] inline-flex">
                <div className="flex-col justify-start items-start gap-[4.67px] flex">
                  <div className="text-white text-[10.908108711242676px] font-medium">
                    4
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[4.67px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={pBlue} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-indigo-500 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={pOrange} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-orange-300 rounded-full" />
              </div>
              <div className="w-[37.40px] h-[17.92px] px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={pVoilet} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-fuchsia-300 rounded-full" />
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[4.67px] inline-flex">
              <div className="w-full h-[17.67px] px-[12.47px] py-[2.34px] bg-gray-700 rounded justify-center items-center gap-[7.79px] flex">
                <div className="text-white text-[10.908108711242676px] font-medium">
                  5
                </div>
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[10.91px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tGreen} alt="" />
                </div>
                <div>
                  <img src={pGreen} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-green-600 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tRed} alt="" />
                </div>
                <div>
                  <img src={pRed} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-red-500 rounded-full" />
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[10.91px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tTeal} alt="" />
                </div>
                <div>
                  <img src={pTeal} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-teal-400 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tLightBlue} alt="" />
                </div>
                <div>
                  <img src={pLightBlue} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-sky-400 rounded-full" />
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[10.91px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tPink} alt="" />
                </div>
                <div>
                  <img src={pPink} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-pink-400 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tYellow} alt="" />
                </div>
                <div>
                  <img src={pYellow} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-yellow-500 rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              2
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              3
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px] flex-col justify-start items-start gap-[4.67px] flex" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              4
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px] flex-col justify-start items-start gap-[4.67px] flex" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              5
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px] flex-col justify-start items-start gap-[4.67px] flex" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              6
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px] flex-col justify-start items-start gap-[4.67px] flex" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              7
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px] flex-col justify-start items-start gap-[4.67px] flex" />
          </div>
        </div>
        <div className="h-[206.47px] justify-start items-start inline-flex">
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              8
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px] flex-col justify-start items-start gap-[4.67px] flex" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              9
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px] flex-col justify-start items-start gap-[4.67px] flex" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              10
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px] flex-col justify-start items-start gap-[4.67px] flex" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              11
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              12
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              13
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[4.67px] inline-flex">
              <div className="px-[12.47px] py-[2.34px] bg-blue-900 rounded justify-start items-start gap-[7.79px] flex">
                <div className="text-white text-[10.908108711242676px] font-medium">
                  10
                </div>
              </div>
              <div className="px-[12.47px] py-[2.34px] bg-orange-700 rounded justify-start items-start gap-[7.79px] flex">
                <div className="text-white text-[10.908108711242676px] font-medium">
                  15
                </div>
              </div>
              <div className="px-[12.47px] py-[2.34px] bg-fuchsia-800 rounded flex-col justify-start items-start gap-[7.79px] inline-flex">
                <div className="flex-col justify-start items-start gap-[4.67px] flex">
                  <div className="text-white text-[10.908108711242676px] font-medium">
                    4
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[4.67px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={pBlue} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-indigo-500 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={pOrange} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-orange-300 rounded-full" />
              </div>
              <div className="w-[37.40px] h-[17.92px] px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={pVoilet} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-fuchsia-300 rounded-full" />
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[4.67px] inline-flex">
              <div className="h-[17.67px] px-[12.47px] py-[2.34px] bg-gray-700 rounded justify-center items-center gap-[7.79px] flex w-full">
                <div className="text-white text-[10.908108711242676px] font-medium">
                  5
                </div>
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[10.91px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tGreen} alt="" />
                </div>
                <div>
                  <img src={pGreen} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-green-600 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tRed} alt="" />
                </div>
                <div>
                  <img src={pRed} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-red-500 rounded-full" />
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[10.91px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tTeal} alt="" />
                </div>
                <div>
                  <img src={pTeal} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-teal-400 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tLightBlue} alt="" />
                </div>
                <div>
                  <img src={pLightBlue} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-sky-400 rounded-full" />
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[10.91px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tPink} alt="" />
                </div>
                <div>
                  <img src={pPink} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-pink-400 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tYellow} alt="" />
                </div>
                <div>
                  <img src={pYellow} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-yellow-500 rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white border  border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              14
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
        </div>
        <div className="h-[206.47px] justify-start items-start inline-flex">
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              15
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              16
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              17
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              18
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[4.67px] inline-flex">
              <div className="px-[12.47px] py-[2.34px] bg-blue-900 rounded justify-start items-start gap-[7.79px] flex">
                <div className="text-white text-[10.908108711242676px] font-medium">
                  10
                </div>
              </div>
              <div className="px-[12.47px] py-[2.34px] bg-orange-700 rounded justify-start items-start gap-[7.79px] flex">
                <div className="text-white text-[10.908108711242676px] font-medium">
                  15
                </div>
              </div>
              <div className="px-[12.47px] py-[2.34px] bg-fuchsia-800 rounded flex-col justify-start items-start gap-[7.79px] inline-flex">
                <div className="flex-col justify-start items-start gap-[4.67px] flex">
                  <div className="text-white text-[10.908108711242676px] font-medium">
                    4
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[4.67px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={pBlue} alt="" />
                </div>

                <div className="w-[10.91px] h-[10.91px] bg-indigo-500 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={pOrange} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-orange-300 rounded-full" />
              </div>
              <div className="w-[37.40px] h-[17.92px] px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={pVoilet} alt="" />
                </div>

                <div className="w-[10.91px] h-[10.91px] bg-fuchsia-300 rounded-full" />
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[4.67px] inline-flex">
              <div className="w-full h-[17.67px] px-[12.47px] py-[2.34px] bg-gray-700 rounded justify-center items-center gap-[7.79px] flex">
                <div className="text-white text-[10.908108711242676px] font-medium">
                  5
                </div>
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[10.91px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tGreen} alt="" />
                </div>
                <div>
                  <img src={pGreen} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-green-600 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tRed} alt="" />
                </div>
                <div>
                  <img src={pRed} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-red-500 rounded-full" />
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[10.91px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tTeal} alt="" />
                </div>
                <div>
                  <img src={pTeal} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-teal-400 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tLightBlue} alt="" />
                </div>
                <div>
                  <img src={pLightBlue} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-sky-400 rounded-full" />
              </div>
            </div>
            <div className="self-stretch p-[1.56px] justify-start items-center gap-[10.91px] inline-flex">
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tPink} alt="" />
                </div>
                <div>
                  <img src={pPink} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-pink-400 rounded-full" />
              </div>
              <div className="px-[4.67px] py-[1.56px] justify-start items-center gap-[6.23px] flex">
                <div>
                  <img src={tYellow} alt="" />
                </div>
                <div>
                  <img src={pYellow} alt="" />
                </div>
                <div className="w-[10.91px] h-[10.91px] bg-yellow-500 rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              19
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              20
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              21
            </div>
            <div className="flex-col justify-start items-start gap-[4.67px] flex">
              <div className="text-gray-200 text-[10.908108711242676px] font-medium">
                -
              </div>
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
        </div>
        <div className="h-[150.06px] justify-start items-start inline-flex">
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              22
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              23
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              24
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              25
            </div>
            <div className="self-stretch p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              26
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              27
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white rounded-br-md  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              28
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
        </div>
        <div className="h-[150.06px] justify-start items-start inline-flex">
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white rounded-bl-md  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              29
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
          <div className="w-[144.14px] self-stretch p-[9.35px] bg-white  border border-gray-200 flex-col justify-between items-start gap-[7.79px] inline-flex">
            <div className="text-neutral-400 text-[16.362163543701172px] font-medium">
              30
            </div>
            <div className="self-stretch h-[21.04px] p-[1.56px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarContent;
