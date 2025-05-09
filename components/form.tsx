

import { Button } from "./button"

import Link from "next/link"




export function FormComponent() {












    async function handleSubmit(formData: FormData) {

        const select = formData.get("selectName")
        const frete = formData.get("nameFrete")




        console.log(frete, select)



        try {



        } catch (err) {
            console.log(err)
        }
    }


    return (
        <form action={handleSubmit} className="  w-full h-full flex flex-col gap-6 items-center justify-center">

            <Link className="w-full flex justify-center items-center lg:w-full" href={"/checkout"}><button type="submit" className="py-1 h-12  px-2 w-full bg-blue-600 mt-2 font-bold text-white md:w-6/12 lg:w-full">Comprar</button></Link>



        </form>
    )
}