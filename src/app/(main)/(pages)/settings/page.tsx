import ProfileForm from "@/components/forms/ProfileForm";
import ProfilePicture from "./_components/ProfilePicture";
import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import image from "next/image";
import { userInfo } from "os";

const SettingsPage = async () => {
  const authUser = await currentUser();
  if (!authUser) return null;

  const user = await prisma.user.findUnique({
    where: { clerkId: authUser.id },
  });

  const removeProfileImage = async () => {
    "use server";
    const response = await prisma.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: "",
      },
    });
    return response;
  };

  const uploadProfileImage = async (image: string) => {
    "use server";
    const response = await prisma.user.update({
      where: { clerkId: authUser.id },
      data: { profileImage: image },
    });
    return response;
  };

  const updateUserInfo = async (firstName: string, lastName: string) => {
    "use server";

    const userInfo = await prisma.user.update({
      where: { clerkId: authUser.id },
      data: {
        firstName,
        lastName,
      },
    });
    return userInfo;
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col w-full md:items-center gap-10 p-6">
        <div className="flex flex-col md:items-center">
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ""}
          onUpload={uploadProfileImage}
        />
        <ProfileForm user={user} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
};

export default SettingsPage;
