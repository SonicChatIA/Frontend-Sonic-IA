import { useState } from "react";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import { curve } from "../assets";
import transacion from "../assets/IA chat/Trnsaction-ori.png"
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title={
            <>
              AI Chat Bot for{" "}
              <span className="inline-block relative font-semibold">
                Sonic Transfers
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </>
          }
          text="Transfer Sonic tokens through blockchain using natural language commands with our intelligent AI assistant."
        />

        <div className="relative">
          

          {/* Service 2 & 3 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="Robot"
                  className="h-full w-full object-cover pointer-events-none select-none"
                  width={630}
                  height={750}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">AI Transfer Assistant</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Simply tell our AI to transfer Sonic tokens. Natural language commands make blockchain transactions as easy as chatting!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-8 px-4 xl:px-8">
                  <h4 className="h4 mb-4">AI Processing Transfer</h4>
                  <p className="body-2 mb-4 text-n-3">
                    Watch our AI instantly process your payment request. Simple, fast, and secure - the transfer happens in seconds with intelligent blockchain processing.
                  </p>

                  <div className="bg-n-8 rounded-xl overflow-hidden mb-4">
                    <img src={transacion} alt="AI Transaction" className="w-full h-auto object-contain" />
                  </div>
                </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className={`w-full h-full object-cover ${
                    isPlaying && "animate-pulse"
                  } pointer-events-none select-none`}
                  width={520}
                  height={400}
                  alt="Scary Robot"
                />

                <VideoChatMessage isPlaying={isPlaying} />
                {/* <VideoBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> */}
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
