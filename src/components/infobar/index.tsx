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
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black">
        <span className="flex items-center gap-2 font-bold">
          <p className="text-sm font-light text-gray-300">Credits</p>
          {tier == "Unlimited" ? (
            <span>Unlimited</span>
          ) : (
            <span>
              {credits}/{tier == "Free" ? "10" : tier == "Pro" && "100"}
            </span>
          )}
        </span>
      <GradientSpinningBorder>
        <span className="flex relative items-center bg-white dark:bg-black px-4 rounded-full">
          <Search />
          <Input
            placeholder="Quick Search"
            className="border-none bg-transparent"
          />
        </span>
      </GradientSpinningBorder>
      <AnimatedTooltip items={infoBarOptions} />
      <UserButton />
    </div>
  );
};

export default InfoBar;
