'use client';
import { useState } from "react";
import Ripples from "react-ripples";

export default function Home() {
  const [cardholderNameError, setCardholderNameError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');
  const [cvcError, setCvcError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [mm, setMm] = useState('');
  const [yy, setYy] = useState('');

  const validateCardholderName = (cardholderName: string)=> {
    return cardholderName.length>=1;
  }

  
  const validateCardNumber = (cardNumber: string) => {
    const numbersOnly = /^[0 - 9]+$/;

    if(cardNumber.trim() === '') {
      setCardNumberError('Card Number cannot be empty');
    } else if(!numbersOnly.test(cardNumber)) {
      setCardNumberError('Wrong format, numbers only');
    } else if(cardNumber.length < 19) {
      setCardNumberError('Minimum card length should be 16');
    }
      else {
        setCardNumberError('');
        return true;
      }
    }
    
    const validateMm = (mm: string) => {
      const month = parseInt(mm, 10)
      if (mm.trim()==='') {
        setMonthError('Cant be blank');
        return false;
      } else if (isNaN(month) || month < 1 || month > 12) {
        setMonthError('Invalid month');
        return false;
      } else {
        setMonthError('');
        return true;
      }
    }

    const validateYy = (yy: string) => {
      // const year = parseInt(yy, 10)
      if (yy.trim()==='') {
        setYearError('Cant be blank');
        return false;
      }
      if (!/^\d{2}$/.test(yy)) {
        setYearError('Invalid year format!');
        return false;
      }
       else {
        setYearError('');
        return true;
      }
    }

    const validateCvc = (cvc: string) => {
      if(cvc.trim() === '') {
        setCvcError('cant be blank');
      } else if(cvc.length!==3) {
        setCvcError('cvc length should be exact 3')
      } else {
        setCvcError('');
        return true;
      }
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardholderNameInput = document.getElementById('cardholderName') as HTMLInputElement;
    const cardNumberInput = document.getElementById('cardNumber') as HTMLInputElement;
    const cardMonthInput = document.getElementById('mm') as HTMLInputElement;
    const cardYearInput = document.getElementById('yy') as HTMLInputElement;
    const cardCvcInput = document.getElementById('cvc') as HTMLInputElement;


    if(validateCardholderName(cardholderNameInput.value)) {
      setCardholderNameError('');
    } else {
      setCardholderNameError('Cardholder name cannot be empty');
    }

    if(validateCardNumber(cardNumberInput.value)) {
      setCardNumberError('');
    } else {
      return;
    }
    if(validateMm(cardMonthInput.value)) {
      setMonthError('');
    } else {
      return;
    }
    if(validateYy(cardYearInput.value)) {
      setYearError('');
    } else {
      return;
    }
    if(validateCvc(cardCvcInput.value)) {
      setCvcError('');
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
      return;
    }

  }
  const thanksForm = () => {
    setFormSubmitted(false);
    setCardholderName('');
    setCardNumber('');
    setMm('');
    setYy('');
    setCvc('');
  }  

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setCardNumber(event?.target?.value)
    const input = event.target.value;
    const formattedInput = input.replace(/\D/g, '')
     // Remove non-numeric characters
     .slice(0, 16)
                               .replace(/(.{4})/g, '$1 '); // Add space after every 4 characters
                               setCardNumber(formattedInput.trim()); //Removing any trailing space
  }

  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(event?.target?.value)
  }

  const handleCardholderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardholderName(event?.target?.value)
  }

  const handleMmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMm(event?.target?.value)
  }

  const handleYyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYy(event?.target?.value)
  }

  return (
    <main className="flex relative font-semibold text-xl min-h-screen flex-col items-center justify-center pt-8 pb-12 xl:pt-20 xl:pb-20 pl-4 pr-4 xl:pl-12 xl:pr-12">
        <img src="/images/bg-main-desktop.png" alt={""} height={100} width={100} className="h-[100%] w-auto bg-center bg-no-repeat left-0 top-0 absolute hidden xl:block" aria-hidden="true"/> 
        <img src="/images/bg-main-mobile.png" alt={""} className="h-60 bg-center bg-no-repeat absolute xl:hidden block top-0 w-full"/>
      
      <div className="grid xl:grid-flow-col-dense gap-4 w-full z-10">
        <div className="relative flex flex-col-reverse justify-center xl:items-start items-center xl:flex-col xl:pl-24 gap-10">

           {/* Front card */}
          <div className="flex relative justify-between mr-[3.6rem] mt-[6.12rem] xl:mt-0 xl:mr-0 z-20">
            <img src="/images/bg-card-front.png" alt={""} className="w-[17rem] h-[10.5rem] xl:w-auto xl:h-auto bg-contain bg-center"/>
            <img src="/images/card-logo.svg" alt="" className="absolute top-5 left-5 xl:top-8 xl:left-8 xl:w-auto xl:h-auto w-[25%] h-[24%]" />
            <h1 className="text-white text-lg xl:text-3xl font-medium tracking-wider xl:tracking-widest absolute xl:bottom-[4.2rem] xl:left-8 bottom-[3rem] left-6">{cardNumber ? cardNumber: '0000 0000 0000 0000'}</h1>
            <p className="absolute text-white bottom-4 left-6 xl:bottom-6 xl:left-8 font-medium capitalize text-sm xl:text-base">{cardholderName ? cardholderName: 'JANE APPLESSED'}</p>
            <p className="absolute bottom-4 right-6 xl:bottom-6 xl:right-8 text-white text-sm xl:text-base font-medium">{mm ? mm: '00'}/{yy ? yy: '00'}</p>
          </div>

          {/* Back card */}
          <div className="absolute top-2 right-0 sm:right-[5rem] md:right-[14rem] lg:right-[20rem] text-center xl:relative xl:flex xl:pl-24 xl:left-0"> 
          <img src="/images/bg-card-back.png" alt={""} className="w-[18rem] h-[10rem] xl:w-auto xl:h-auto"/>
          <div className="absolute top-[4.2rem] right-[2rem] xl:right-[3.6rem] xl:top-[6.66rem] text-white text-base text-center xl:text-xl tracking-wider font-semibold">{cvc ? cvc: '000'}</div>
          </div>
        </div>
        {!formSubmitted && (
        <div className="flex justify-center xl:justify-start items-center">
        <form id="form" className="max-w-[27rem] pl-[0] xl:pl-0 pr-[0] xl:pr-0 pt-[2rem]" onSubmit={handleSubmit} noValidate>
  <div className="mb-5">
    <label htmlFor="cardholderName" className="flex mb-1 text-left text-sm font-semibold tracking-widest text-gray-900 leading-6">CARDHOLDER NAME
    </label>
    <input 
      type="text" 
      id="cardholderName" 
      className={`bg-gray-50 border border-gray-200 text-base rounded-lg text-gray-900 
focus:outline-none w-full px-6 p-3`} 
      placeholder="e.g. Jane Applessed"  
      value={cardholderName}
      onChange={handleCardholderChange}
      />
      {cardholderNameError && <p className="mt-2 text-red-600 text-sm">{cardholderNameError}</p>}
  </div>
  <div className="mb-5">
    <label htmlFor="cardNumber" className="flex mb-1 text-left text-sm font-semibold tracking-widest  text-gray-900 leading-6">CARD NUMBER
    </label>
    <input 
      type="text" 
      id="cardNumber" 
      className={`bg-gray-50 border border-gray-200 text-base rounded-lg text-gray-900 
focus:outline-none w-full px-6 p-3`} 
      placeholder="e.g. 1234 5678 9132 0000"  
      value={cardNumber}
      onChange={handleCardNumberChange}
      />
      {cardNumberError && <p className="mt-2 text-red-600 text-sm">{cardNumberError}</p>}
  </div>
  <div className="mb-12">
    <div className="grid grid-cols-2 gap-6">
      <div>
    <label htmlFor="cardholderName" className="flex mb-1 text-left text-sm font-semibold tracking-normal xl:tracking-widest text-gray-900 leading-6">EXP. DATE (MM/YY)
    </label>
    <div className="grid grid-cols-2 gap-4">
      {/* <div className="relative p-4"> */}

    <input 
      type="number" 
      id="mm" 
      className={`bg-gray-50 border border-gray-200 text-base rounded-lg text-gray-900 
focus:outline-none w-full px-4 xl:px-6 p-3`} 
      placeholder="MM"  
      value={mm}
      onChange={handleMmChange}
      />
       <input 
      type="text" 
      id="yy" 
      className={`bg-gray-50 border border-gray-200 text-base rounded-lg text-gray-900 
      focus:outline-none w-full px-5 xl:px-6 p-3`} 
      placeholder="YY"  
      value={yy}
      onChange={handleYyChange}
      />
      {/* </div> */}
    </div>
      <div className="flex w-full">
      {monthError ? <p className="flex pt-1 justify-start text-red-600 text-sm">{monthError}</p> : (yearError ? <p className="flex justify-end text-red-600 text-sm pb-0 pt-1 pl-[5.5rem] xl:pl-[6.9rem]">{yearError}</p>: null)}
      </div>
      </div>
      <div>
      <label htmlFor="cardholderName" className="flex mb-1 text-left text-sm font-semibold tracking-widest  text-gray-900 leading-6">CVC
    </label>
    <input 
      type="text" 
      id="cvc" 
      className={`bg-gray-50 border border-gray-200 text-base rounded-lg text-gray-900 
focus:outline-none w-full px-6 p-3`} 
      placeholder="e.g. 123"  
      value={cvc}
      onChange={handleCvcChange}
      minLength={3}
      maxLength={3}
      />
      {cvcError && <p className="mt-1 text-red-600 text-sm">{cvcError}</p>}
      </div>
    </div>
  </div>
  <Ripples 
    placeholder="click to interact" 
    onPointerEnterCapture={undefined} 
    onPointerLeaveCapture={undefined} 
    className="w-full" 
    during={1600}  
  >
    <button type="submit" 
     className="text-white bg-slate-800 hover:bg-slate-700 font-semibold rounded-lg text-lg md:text-base w-full py-4 text-center transition duration-500 shadow-md hover:bg-gradient-to-r from-slate-900 to-slate-600 ease-linear"
    >
      Confirm
    </button>
  </Ripples>
  </form>
      </div>
        )} {formSubmitted && (
          <div className="grid xl:grid-flow-col-dense gap-4 w-full xl:pr-[14rem]">
          <div className="flex flex-col items-center justify-center gap-4">
            <img src="/images/icon-complete.svg" alt=""  className="pb-4"/>
          <h1 className="text-2xl font-semibold text-black tracking-widest text-center">THANK YOU!</h1>
          <p className="text-base font-medium text-center">We have added your card details</p>
           <button type="button" onClick={thanksForm} className={`w-full max-w-[22rem] sm:w-[22rem] xl:w-[21rem] my-6 text-white bg-slate-900 py-2.5 rounded-lg px-2 text-center`}>Continue</button>
           </div>
          </div>
        )}
        </div>
    </main>
  );
}
