import { Carousel } from "../../../components/carousel";
import { Footer } from "../../../components/footer";
import { ProductList } from "../../../components/product-list";
import { stripe } from "@/lib/stripe";

export default async function Product() {

    const itemsStripe = await stripe.products.list({
        expand: ["data.default_price"],
        
        
    })


    console.log(itemsStripe.data)

    return (
        <div>
            <Carousel products={itemsStripe.data}/>
            <div className="w-full flex-col items-center flex justify-center">
                
                <ProductList products={itemsStripe.data} />
                <Footer/>
            </div>
        </div>
    )
}