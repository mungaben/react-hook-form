import Foodform from '@/components/Foodform'
import Form from '@/components/Form'
import Register from '@/components/Register'
import UseForm from '@/components/UseForm'
import Validate from '@/components/Validate'
import Image from 'next/image'


export default function Home() {
  return (
   <div className='w-full bg-stone-500'>
    {/* <Form/> */}
    <UseForm/>
    {/* <Register/> */}
    {/* <Validate/> */}
    <Foodform/>

   </div>
  )
}
