import Image from "next/image";
import {DialogDemo} from "@/components/ui/DialogWindow";
import NutriScore from "@/components/ui/NutriScore";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <h1 className={"ml-16 mt-32 font-bold text-7xl"}>We want you to invest<br/> but with conscience and not at
                any price!</h1>
            <div className={"flex"}>

                <img src={"/nav/ui-kits/landing.jpg"} alt={""} style={{width: "800px", height: "400px"}}
                     className={"ml-16 mt-16 rounded-3xl"}/>
                <div className={"flex flex-col gap-4 mr-16 ml-16 mt-32"}>

                    <p >

                        Welcome to sustainable trading! Using our unique ESG score, we help you invest responsibly and
                        contribute to a better future.
                        <br/>
                        <br/>
                        Join our trading community, exchange ideas, and grow your insight. Need help? Our chatbot is
                        always ready with answers. New to trading? Our playful tutorial makes it easy and fun!
                        <br/>
                        <br/>
                        Invest smarter with us. Let's build a greener world together through responsible trading. Start
                        your journey today!<br/>

                        <br/>
                        <br/>
                        <b>
                            Welcome. Let's trade responsibly!
                        </b>
                    </p>
                    <DialogDemo/>
                </div>

            </div>

        </>
    );
}
