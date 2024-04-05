import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useModal } from "@/provider/modal-provider";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import GradientSpinningBorder from "./GradientSpinningBorder";

type Props = {
  title: string;
  subheading: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

const CustomModal = ({ title, subheading, children, defaultOpen }: Props) => {
  const { isOpen, setClose } = useModal();
  const handleClose = () => setClose();

  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <DrawerContent>
        <DrawerHeader className="flex flex-col items-center gap-4 overflow-scroll">
          <DrawerTitle className="text-center">{title}</DrawerTitle>
          <DrawerDescription className="text-center">
            {subheading}
          </DrawerDescription>
          {children}
        </DrawerHeader>
        <DrawerFooter className="flex flex-col items-center justify-center gap-4 bg-background border-t-[1px] border-t-muted">
          <DrawerClose className="max-w-[26rem] w-full">
            <GradientSpinningBorder>
              <Button
                variant={"ghost"}
                onClick={handleClose}
                className="w-full relative rounded-full dark:bg-black bg-white">
                Close
              </Button>
            </GradientSpinningBorder>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomModal;
