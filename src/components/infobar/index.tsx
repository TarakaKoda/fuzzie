"use client";
import { onPaymentDetails } from "@/app/(main)/(pages)/billing/_actions/PaymentConnections";
import { infoBarOptions } from "@/lib/constant";
import { useBilling } from "@/provider/billing-provider";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { AnimatedTooltip } from "../global/AnimatedToolTip";
import GradientSpinningBorder from "../global/GradientSpinningBorder";
import { Input } from "../ui/input";

const InfoBar = () => {
  const { credits, tier, setCredits, setTier } = useBilling();
  const onGetPayment = async () => {
    const response = await onPaymentDetails();
    if (response) {
      setTier(response.tier!);
      setCredits(response.credits!);
    }
  };

  useEffect(() => {
    onGetPayment();
  }, []);

  return (
    <div className="flex flex-row justify-between gap-6 items-center px-4 py-4 w-full dark:bg-black">
      <div className="md:max-w-[900px] w-full">
        <GradientSpinningBorder>
          <span className="flex relative w-full items-center bg-white dark:bg-black px-4 rounded-full">
            <Search />
            <Input
              placeholder="Quick Search"
              className="border-none bg-transparent"
            />
          </span>
        </GradientSpinningBorder>
      </div>
      <div className="flex items-center justify-evenly gap-6">
        <GradientSpinningBorder>
          <span className="flex items-center gap-2 relative bg-white dark:bg-black rounded-full p-2 font-bold">
            <p className="text-sm font-light dark:text-gray-300">Credits</p>
            {tier == "Unlimited" ? (
              <span>Unlimited</span>
            ) : (
              <span>
                {credits}/{tier == "Free" ? "10" : tier == "Pro" && "100"}
              </span>
            )}
          </span>
        </GradientSpinningBorder>
        <AnimatedTooltip items={infoBarOptions} />
        <div className="relative w-10 h-10 p-1 flex items-center jus bg-black rounded-full">

          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
